import { FastifyReply, FastifyRequest } from "fastify";
import jwt from "jsonwebtoken";
import authConfig from "../config/auth.js";

interface TokenPayload {
  sub: string;
  email: string;
}

export async function authMiddleware(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return reply.code(401).send({ message: "Token não informado" });
  }

  const [scheme, token] = authHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    return reply.code(401).send({ message: "Token mal formatado" });
  }

  try {
    const decoded = jwt.verify(token, authConfig.jwt.secret) as TokenPayload;
    request.userId = decoded.sub;
    request.userEmail = decoded.email;
  } catch {
    return reply.code(401).send({ message: "Token inválido" });
  }
}
