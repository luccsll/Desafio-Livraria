interface CreateAuthorDTO {
    name: string;
    email: string;
    createdBy: string;
}
interface UpdateAuthorDTO {
    id: string;
    name: string;
    email: string;
    editedBy: string;
}
interface DeleteAuthorDTO {
    id: string;
}
declare class AuthorService {
    create({ name, email, createdBy }: CreateAuthorDTO): Promise<{
        name: string;
        createdBy: string;
        id: string;
        editedBy: string | null;
        createdAt: Date;
        updatedAt: Date;
        email: string;
    }>;
    findAll(): Promise<{
        name: string;
        createdBy: string;
        id: string;
        editedBy: string | null;
        createdAt: Date;
        updatedAt: Date;
        email: string;
    }[]>;
    update({ id, name, email, editedBy }: UpdateAuthorDTO): Promise<{
        name: string;
        createdBy: string;
        id: string;
        editedBy: string | null;
        createdAt: Date;
        updatedAt: Date;
        email: string;
    }>;
    delete({ id }: DeleteAuthorDTO): Promise<{
        name: string;
        createdBy: string;
        id: string;
        editedBy: string | null;
        createdAt: Date;
        updatedAt: Date;
        email: string;
    }>;
}
export { AuthorService };
//# sourceMappingURL=AuthorService.d.ts.map