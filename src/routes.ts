import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";

import PublisherController from "./controllers/PublisherController.js";
import AuthorController from "./controllers/AuthorController.js";
import BookController from "./controllers/BookController.js";
import AuthController from "./controllers/AuthController.js";
import { authMiddleware } from "./middlewares/auth.js";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.post(
    "/auth/register",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new AuthController().register(request, reply);
    }
  );

  fastify.post(
    "/auth/login",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new AuthController().login(request, reply);
    }
  );

  fastify.post(
    "/publisher",
    { preHandler: authMiddleware },
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new PublisherController().create(request, reply);
    }
  );

  fastify.get(
    "/publisher",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new PublisherController().findAll(request, reply);
    }
  );

  fastify.put(
    "/publisher/:publisherCode",
    { preHandler: authMiddleware },
    (request: FastifyRequest, reply: FastifyReply) => {
      return new PublisherController().update(request, reply);
    }
  );

  fastify.delete(
    "/publisher/:publisherCode",
    { preHandler: authMiddleware },
    (request: FastifyRequest, reply: FastifyReply) => {
      return new PublisherController().delete(request, reply);
    }
  );

  fastify.get("/author", async () => {
    return new AuthorController().findAll();
  });

  fastify.post(
    "/author",
    { preHandler: authMiddleware },
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new AuthorController().create(request, reply);
    }
  );

  fastify.put(
    "/author/:id",
    { preHandler: authMiddleware },
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new AuthorController().update(request, reply);
    }
  );

  fastify.delete(
    "/author/:id",
    { preHandler: authMiddleware },
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new AuthorController().delete(request, reply);
    }
  );

  fastify.get("/book", async () => {
    return new BookController().findAll();
  });

  fastify.post(
    "/book",
    { preHandler: authMiddleware },
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new BookController().create(request, reply);
    }
  );

  fastify.put(
    "/book/:id",
    { preHandler: authMiddleware },
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new BookController().update(request, reply);
    }
  );

  fastify.delete(
    "/book/:id",
    { preHandler: authMiddleware },
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new BookController().delete(request, reply);
    }
  );
}
