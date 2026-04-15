import { AuthorService } from "../services/AuthorService.js";
class AuthorController {
    constructor() {
        this.authorService = new AuthorService();
    }
    async create(request, reply) {
        const { name, email } = request.body;
        const createdBy = request.userEmail;
        if (!createdBy) {
            throw new Error("Usuário autenticado não identificado");
        }
        const createAuthor = await this.authorService.create({
            name,
            email,
            createdBy,
        });
        return reply.code(200).send(createAuthor);
    }
    async findAll() {
        const findAllAuthor = await this.authorService.findAll();
        if (!findAllAuthor.length) {
            throw new Error("Nenhum registro encontrado");
        }
        return findAllAuthor;
    }
    async update(request, reply) {
        const { id } = request.params;
        const { name, email } = request.body;
        const editedBy = request.userEmail;
        if (!id) {
            throw new Error("Informe o id");
        }
        if (!editedBy) {
            throw new Error("Usuário autenticado não identificado");
        }
        const updateAuthor = await this.authorService.update({
            id,
            name,
            email,
            editedBy,
        });
        return reply.code(200).send(updateAuthor);
    }
    async delete(request, reply) {
        const { id } = request.params;
        const deleteAuthor = await this.authorService.delete({ id });
        return reply.code(200).send(deleteAuthor);
    }
}
export default AuthorController;
//# sourceMappingURL=AuthorController.js.map