import prismaClient from "../prisma";

interface CreateCommentServiceProps {
  postId: string;
  name: string;
  email: string;
  imageUrl: string;
  text: string;
}

class CreateCommentService {
  async execute({
    postId,
    name,
    email,
    imageUrl,
    text,
  }: CreateCommentServiceProps) {
    const post = await prismaClient.post.findFirst({
      where: {
        id: postId,
      },
    });

    if (!post) {
      throw new Error("Post não encontrado.");
    }

    return await prismaClient.comment.create({
      data: {
        postId,
        name,
        email,
        imageUrl,
        text,
      },
    });
  }
}

export { CreateCommentService };
