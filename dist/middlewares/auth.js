import jwt from "jsonwebtoken";
import authConfig from "../config/auth.js";
export async function authMiddleware(request, reply) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        return reply.code(401).send({ message: "Token não informado" });
    }
    const [scheme, token] = authHeader.split(" ");
    if (scheme !== "Bearer" || !token) {
        return reply.code(401).send({ message: "Token mal formatado" });
    }
    try {
        const decoded = jwt.verify(token, authConfig.jwt.secret);
        request.userId = decoded.sub;
        request.userEmail = decoded.email;
    }
    catch {
        return reply.code(401).send({ message: "Token inválido" });
    }
}
//# sourceMappingURL=auth.js.map