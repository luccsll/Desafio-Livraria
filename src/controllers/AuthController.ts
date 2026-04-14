import { FastifyRequest, FastifyReply } from "fastify";
import { AuthService } from "../services/AuthService.js";

class AuthController {
  private authService = new AuthService();

  async register(request: FastifyRequest, reply: FastifyReply) {
    const { name, email, password } = request.body as {
      name: string;
      email: string;
      password: string;
    };

    const user = await this.authService.create({ name, email, password });

    return reply.code(201).send(user);
  }

  async login(request: FastifyRequest, reply: FastifyReply) {
    const { email, password } = request.body as {
      email: string;
      password: string;
    };

    const session = await this.authService.login({ email, password });

    return reply.code(200).send(session);
  }
}

export default AuthController;
