import prismaClient from "../prisma/index.js";
class AuthorService {
    async create({ name, email, createdBy }) {
        if (!name || !email || !createdBy) {
            throw new Error("Informe todos os campos obrigatórios");
        }
        const emailAlreadyExists = await prismaClient.author.findUnique({
            where: { email },
        });
        if (emailAlreadyExists) {
            throw new Error("Já existe um autor cadastrado com este email");
        }
        const author = await prismaClient.author.create({
            data: {
                name,
                email,
                createdBy,
            },
        });
        return author;
    }
    async findAll() {
        return await prismaClient.author.findMany();
    }
    async update({ id, name, email, editedBy }) {
        if (!name || !email || !editedBy) {
            throw new Error("Campos obrigatórios não informados");
        }
        const exists = await prismaClient.author.findUnique({
            where: { id },
        });
        if (!exists) {
            throw new Error("Id não encontrado");
        }
        return prismaClient.author.update({
            where: { id: id },
            data: {
                name: name,
                email: email,
                editedBy: editedBy,
            },
        });
    }
    async delete({ id }) {
        if (!id) {
            throw new Error("Informe o id");
        }
        const authorExists = await prismaClient.author.findUnique({
            where: { id: id },
        });
        if (!authorExists) {
            throw new Error("Autor não encontrado");
        }
        return prismaClient.author.delete({
            where: { id: id },
        });
    }
}
export { AuthorService };
//# sourceMappingURL=AuthorService.js.map