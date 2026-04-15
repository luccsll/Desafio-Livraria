import { FastifyRequest, FastifyReply } from "fastify";
declare class AuthController {
    private authService;
    register(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    login(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
export default AuthController;
//# sourceMappingURL=AuthController.d.ts.map