import { AuthService } from "../services/AuthService.js";
class AuthController {
    constructor() {
        this.authService = new AuthService();
    }
    async register(request, reply) {
        const { name, email, password } = request.body;
        const user = await this.authService.create({ name, email, password });
        return reply.code(201).send(user);
    }
    async login(request, reply) {
        const { email, password } = request.body;
        const session = await this.authService.login({ email, password });
        return reply.code(200).send(session);
    }
}
export default AuthController;
//# sourceMappingURL=AuthController.js.map