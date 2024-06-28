import {
  FastifyInstance,
  FastifyPluginOptions,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreatePostController } from "./controllers/create-post-controller";
import { ListPostsController } from "./controllers/list-posts-controller";
import { DeletePostController } from "./controllers/delete-post-controller";
import { FindPostController } from "./controllers/find-post-controller";
import { CreateCommentController } from "./controllers/create-comment-controller";
import { DeleteCommentController } from "./controllers/delete-comment-controller";
import { LikePostController } from "./controllers/like-post-controller";

export async function routes(
  fastify: FastifyInstance,
  options: FastifyPluginOptions
) {
  fastify.post(
    "/post",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreatePostController().handle(request, reply);
    }
  );

  fastify.get(
    "/posts",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListPostsController().handle(request, reply);
    }
  );

  fastify.get("/post", async (request: FastifyRequest, reply: FastifyReply) => {
    return new FindPostController().handle(request, reply);
  });

  fastify.delete(
    "/post",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeletePostController().handle(request, reply);
    }
  );

  fastify.post(
    "/comment",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateCommentController().handle(request, reply);
    }
  );

  fastify.delete(
    "/comment",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteCommentController().handle(request, reply);
    }
  );

  fastify.post(
    "/like",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new LikePostController().handle(request, reply);
    }
  );
}
