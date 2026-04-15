import prismaClient from "../prisma/index.js";
class BookService {
    async create({ name, isbn, publishedAt, category, authorId, publisherId, createdBy, }) {
        if (!name || !isbn || !publishedAt || !category || !authorId || !publisherId || !createdBy) {
            throw new Error("Informe todos os campos para realizar o cadastro");
        }
        const authorExists = await prismaClient.author.findUnique({
            where: { id: authorId },
        });
        if (!authorExists) {
            throw new Error("Autor do livro não encontrado");
        }
        const publisherExists = await prismaClient.publisher.findUnique({
            where: { id: publisherId },
        });
        if (!publisherExists) {
            throw new Error("Editora não encontrada");
        }
        const book = await prismaClient.book.create({
            data: {
                name,
                isbn,
                publishedAt,
                category,
                authorId,
                publisherId,
                createdBy,
            },
        });
        return book;
    }
    async findAll() {
        return await prismaClient.book.findMany();
    }
    async update({ id, name, isbn, publishedAt, category, authorId, publisherId, editedBy, }) {
        if (!id || !name || !isbn || !publishedAt || !category || !authorId || !publisherId || !editedBy) {
            throw new Error("Informe todos os campos para realizar o cadastro");
        }
        const bookExists = await prismaClient.book.findUnique({
            where: { id: id },
        });
        if (!bookExists) {
            throw new Error("Livro não encontrado");
        }
        const authorExists = await prismaClient.author.findUnique({
            where: { id: authorId },
        });
        if (!authorExists) {
            throw new Error("Autor do livro não encontrado");
        }
        const publisherExists = await prismaClient.publisher.findUnique({
            where: { id: publisherId },
        });
        if (!publisherExists) {
            throw new Error("Editora não encontrada");
        }
        const updateBook = await prismaClient.book.update({
            where: { id: id },
            data: {
                name,
                isbn,
                publishedAt,
                category,
                authorId,
                publisherId,
                editedBy,
            },
        });
        return updateBook;
    }
    async delete({ id }) {
        if (!id) {
            throw new Error("Informe o id");
        }
        const bookExists = await prismaClient.book.findUnique({
            where: { id: id },
        });
        if (!bookExists) {
            throw new Error("Livro não encontrado");
        }
        return await prismaClient.book.delete({ where: { id: id } });
    }
}
export { BookService };
//# sourceMappingURL=BookService.js.map