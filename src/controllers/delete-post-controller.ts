import { FastifyRequest, FastifyReply } from "fastify";
import { DeletePostService } from "../services/delete-post-service";

class DeletePostController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };

    const deletePostService = new DeletePostService();

    const post = await deletePostService.execute({ id });

    reply.send(post);
  }
}

export { DeletePostController };
