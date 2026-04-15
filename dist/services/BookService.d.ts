interface CreateBookDTO {
    name: string;
    isbn: string;
    publishedAt: Date;
    category: string;
    authorId: string;
    publisherId: string;
    createdBy: string;
}
interface UpdateBookDTO {
    id: string;
    name: string;
    isbn: string;
    publishedAt: Date;
    category: string;
    authorId: string;
    publisherId: string;
    editedBy: string;
}
interface DeleteBookTDO {
    id: string;
}
declare class BookService {
    create({ name, isbn, publishedAt, category, authorId, publisherId, createdBy, }: CreateBookDTO): Promise<{
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
    }>;
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
    update({ id, name, isbn, publishedAt, category, authorId, publisherId, editedBy, }: UpdateBookDTO): Promise<{
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
    }>;
    delete({ id }: DeleteBookTDO): Promise<{
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
    }>;
}
export { BookService };
//# sourceMappingURL=BookService.d.ts.map