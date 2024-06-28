import { FastifyRequest, FastifyReply } from "fastify";
import { ListPostsService } from "../services/list-posts-service";

class ListPostsController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listPostService = new ListPostsService();

    const posts = await listPostService.execute();

    reply.send(posts);
  }
}

export { ListPostsController };
