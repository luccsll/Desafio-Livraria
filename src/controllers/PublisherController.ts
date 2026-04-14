import { FastifyRequest, FastifyReply } from "fastify";
import { PublisherService } from "../services/PublisherService.js";

class PublisherController {
  private service = new PublisherService();

  async create(request: FastifyRequest, reply: FastifyReply) {
    const { name, publisherCode } = request.body as {
      name: string;
      publisherCode: string;
    };
    const createdBy = request.userEmail;

    if (!createdBy) {
      throw new Error("Usuário autenticado não identificado");
    }

    const publisher = await this.service.create({
      name,
      publisherCode,
      createdBy,
    });

    return reply.send(publisher);
  }

  async findAll(request: FastifyRequest, reply: FastifyReply) {
    const publishers = await this.service.findAll();

    return reply.send(publishers);
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    const { publisherCode } = request.params as {
      publisherCode: string;
    };

    const { name } = request.body as { name: string };
    const editedBy = request.userEmail;

    if (!editedBy) {
      throw new Error("Usuário autenticado não identificado");
    }

    const publisher = await this.service.update(publisherCode, name, editedBy);

    return reply.send(publisher);
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    const { publisherCode } = request.params as {
      publisherCode: string;
    };

    await this.service.delete(publisherCode);

    return reply.status(204).send();
  }
}

export default PublisherController;
