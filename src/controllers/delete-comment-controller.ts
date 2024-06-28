import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteCommentService } from "../services/delete-comment-service";

class DeleteCommentController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };

    const deleteCommentService = new DeleteCommentService();

    const comment = await deleteCommentService.execute({ id });

    reply.send(comment);
  }
}

export { DeleteCommentController };
