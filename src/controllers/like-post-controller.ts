import { FastifyReply, FastifyRequest } from "fastify";
import { LikePostService } from "../services/like-post-service";

class LikePostController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { postId } = request.body as { postId: string };

    const likePostService = new LikePostService();

    const like = await likePostService.execute({ postId });

    reply.send(like);
  }
}

export { LikePostController };
