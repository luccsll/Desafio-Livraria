import { FastifyRequest, FastifyReply } from "fastify";
import { BookService } from "../services/BookService.js";

class BookController {
  private bookService = new BookService();

  async create(request: FastifyRequest, reply: FastifyReply) {
    const { name, isbn, publishedAt, category, authorId, publisherId } =
      request.body as {
      name: string;
      isbn: string;
      publishedAt: Date;
      category: string;
      authorId: string;
      publisherId: string;
    };
    const createdBy = request.userEmail;

    if (!createdBy) {
      throw new Error("Usuário autenticado não identificado");
    }

    const createBook = await this.bookService.create({
      name,
      isbn,
      publishedAt,
      category,
      authorId,
      publisherId,
      createdBy,
    });

    reply.code(200).send(createBook);
  }

  async findAll() {
    const findAllBooks = await this.bookService.findAll();

    if (!findAllBooks.length) {
      throw new Error("Nenhum registro encontrado");
    }

    return findAllBooks;
  }

  async update(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };
    const { name, isbn, publishedAt, category, authorId, publisherId } =
      request.body as {
      name: string;
      isbn: string;
      publishedAt: Date;
      category: string;
      authorId: string;
      publisherId: string;
    };
    const editedBy = request.userEmail;

    if (!id) {
      throw new Error("Informe o id");
    }

    if (!editedBy) {
      throw new Error("Usuário autenticado não identificado");
    }

    const updateBook = await this.bookService.update({
      id,
      name,
      isbn,
      publishedAt,
      category,
      authorId,
      publisherId,
      editedBy,
    });

    return reply.code(200).send(updateBook);
  }

  async delete(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.params as { id: string };

    const deleteBook = await this.bookService.delete({ id });

    return reply.code(200).send(deleteBook);
  }
}

export default BookController;
