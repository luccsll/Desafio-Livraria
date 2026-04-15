import { FastifyRequest, FastifyReply } from "fastify";
declare class BookController {
    private bookService;
    create(request: FastifyRequest, reply: FastifyReply): Promise<void>;
    findAll(): Promise<{
        name: string;
        createdBy: string;
        id: string;
        editedBy: string | null;
        createdAt: Date;
        updatedAt: Date;
        isbn: string;
        publishedAt: Date;
        category: string;
        authorId: string;
        publisherId: string;
    }[]>;
    update(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    delete(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
export default BookController;
//# sourceMappingURL=BookController.d.ts.map