import { FastifyRequest, FastifyReply } from "fastify";
declare class AuthorController {
    private authorService;
    create(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    findAll(): Promise<{
        name: string;
        createdBy: string;
        id: string;
        editedBy: string | null;
        createdAt: Date;
        updatedAt: Date;
        email: string;
    }[]>;
    update(request: FastifyRequest, reply: FastifyReply): Promise<never>;
    delete(request: FastifyRequest, reply: FastifyReply): Promise<never>;
}
export default AuthorController;
//# sourceMappingURL=AuthorController.d.ts.map