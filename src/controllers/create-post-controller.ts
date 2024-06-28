import { FastifyRequest, FastifyReply } from "fastify";
import { CreatePostService } from "../services/create-post-service";

class CreatePostController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { name, email, imageUrl, text } = request.body as {
      name: string;
      email: string;
      imageUrl: string | null;
      text: string;
    };

    const createPostService = new CreatePostService();

    const post = await createPostService.execute({
      name,
      email,
      imageUrl,
      text,
    });

    reply.send(post);
  }
}

export { CreatePostController };
