import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCommentService } from "../services/create-comment-service";

class CreateCommentController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { postId, name, email, imageUrl, text } = request.body as {
      postId: string;
      name: string;
      email: string;
      imageUrl: string;
      text: string;
    };

    const createCommentService = new CreateCommentService();

    const comment = await createCommentService.execute({
      postId,
      name,
      email,
      imageUrl,
      text,
    });

    reply.send(comment);
  }
}

export { CreateCommentController };
