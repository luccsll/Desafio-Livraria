import prismaClient from "../prisma/index.js";

interface CreatePublisherDTO {
  name: string;
  publisherCode: string;
  createdBy: string;
}

class PublisherService {
  async create({ name, publisherCode, createdBy }: CreatePublisherDTO) {
    if (!name || !publisherCode || !createdBy) {
      throw new Error("Campos obrigatórios não informados");
    }

    const exists = await prismaClient.publisher.findUnique({
      where: { publisherCode },
    });

    if (exists) {
      throw new Error("Publisher já existe");
    }

    return prismaClient.publisher.create({
      data: { name, publisherCode, createdBy },
    });
  }

  async findAll() {
    return prismaClient.publisher.findMany();
  }

  async update(publisherCode: string, name: string, editedBy: string) {
    if (!publisherCode || !name || !editedBy) {
      throw new Error("Campos obrigatórios não informados");
    }

    const exists = await prismaClient.publisher.findUnique({
      where: { publisherCode },
    });

    if (!exists) {
      throw new Error("Publisher não encontrado");
    }

    return prismaClient.publisher.update({
      where: { publisherCode },
      data: { name, editedBy },
    });
  }

  async delete(publisherCode: string) {
    if (!publisherCode) {
      throw new Error("Publisher code não informado");
    }

    return prismaClient.publisher.delete({
      where: { publisherCode },
    });
  }
}

export { PublisherService };
