import Fastify from "fastify";
import cors from "@fastify/cors";
import { routes } from "./routes.js";
const app = Fastify({ logger: true });
app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message });
});
const start = async () => {
    await app.register(cors);
    await app.register(routes);
    try {
        const port = Number(process.env.PORT) || 3333;
        await app.listen({
            port,
            host: "0.0.0.0",
        });
    }
    catch (err) {
        process.exit(1);
    }
};
start();
//# sourceMappingURL=server.js.map