import { PublisherService } from "../services/PublisherService.js";
class PublisherController {
    constructor() {
        this.service = new PublisherService();
    }
    async create(request, reply) {
        const { name, publisherCode } = request.body;
        const createdBy = request.userEmail;
        if (!createdBy) {
            throw new Error("Usuário autenticado não identificado");
        }
        const publisher = await this.service.create({
            name,
            publisherCode,
            createdBy,
        });
        return reply.send(publisher);
    }
    async findAll(request, reply) {
        const publishers = await this.service.findAll();
        return reply.send(publishers);
    }
    async update(request, reply) {
        const { publisherCode } = request.params;
        const { name } = request.body;
        const editedBy = request.userEmail;
        if (!editedBy) {
            throw new Error("Usuário autenticado não identificado");
        }
        const publisher = await this.service.update(publisherCode, name, editedBy);
        return reply.send(publisher);
    }
    async delete(request, reply) {
        const { publisherCode } = request.params;
        await this.service.delete(publisherCode);
        return reply.status(204).send();
    }
}
export default PublisherController;
//# sourceMappingURL=PublisherController.js.map