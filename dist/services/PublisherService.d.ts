interface CreatePublisherDTO {
    name: string;
    publisherCode: string;
    createdBy: string;
}
declare class PublisherService {
    create({ name, publisherCode, createdBy }: CreatePublisherDTO): Promise<{
        name: string;
        publisherCode: string;
        createdBy: string;
        id: string;
        editedBy: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        name: string;
        publisherCode: string;
        createdBy: string;
        id: string;
        editedBy: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    update(publisherCode: string, name: string, editedBy: string): Promise<{
        name: string;
        publisherCode: string;
        createdBy: string;
        id: string;
        editedBy: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    delete(publisherCode: string): Promise<{
        name: string;
        publisherCode: string;
        createdBy: string;
        id: string;
        editedBy: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
export { PublisherService };
//# sourceMappingURL=PublisherService.d.ts.map