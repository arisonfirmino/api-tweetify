import { FastifyRequest, FastifyReply } from "fastify";
import { FindPostService } from "../services/find-post-service";

class FindPostController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };

    const findPostService = new FindPostService();

    const post = await findPostService.execute({ id });

    reply.send(post);
  }
}

export { FindPostController };
