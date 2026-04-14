import prismaClient from "../prisma/index.js";
import bcrypt from "bcryptjs";
import jwt, { type Secret, type SignOptions } from "jsonwebtoken";
import authConfig from "../config/auth.js";

interface LoginUserTDO {
  email: string;
  password: string;
}

interface CreateUserTDO extends LoginUserTDO {
  name: string;
}

class AuthService {
  async create({ name, email, password }: CreateUserTDO) {
    if (!name || !email || !password) {
      throw new Error("Informe todos campos");
    }

    const exitsEmail = await prismaClient.user.findUnique({
      where: { email: email },
    });

    if (exitsEmail) {
      throw new Error("E-mail já cadastrado");
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const createUser = await prismaClient.user.create({
      data: { name, email, passwordHash },
    });

    return {
      id: createUser.id,
      name: createUser.name,
      email: createUser.email,
      createdAt: createUser.createdAt,
    };
  }

  async login({ email, password }: LoginUserTDO) {
    if (!email || !password) {
      throw new Error("Credenciais insuficientes");
    }

    const getUser = await prismaClient.user.findUnique({
      where: { email: email },
    });

    if (!getUser) {
      throw new Error("Email ou senha inválida");
    }

    const isValid = await bcrypt.compare(password, getUser.passwordHash);

    if (!isValid) {
      throw new Error("Email ou senha inválida");
    }

    const jwtSecret: Secret = authConfig.jwt.secret;
    const jwtExpiresIn = authConfig.jwt.expiresIn as NonNullable<
      SignOptions["expiresIn"]
    >;
    const signOptions: SignOptions = {
      subject: getUser.id,
      expiresIn: jwtExpiresIn,
    };

    const token = jwt.sign(
      {
        name: getUser.name,
        email: getUser.email,
      },
      jwtSecret,
      signOptions
    );

    return {
      user: {
        id: getUser.id,
        name: getUser.name,
        email: getUser.email,
      },
      token,
    };
  }
}

export { AuthService };
