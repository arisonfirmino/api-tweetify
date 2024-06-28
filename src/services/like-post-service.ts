import prismaClient from "../prisma";

class LikePostService {
  async execute({ postId }: { postId: string }) {
    return await prismaClient.post.update({
      where: {
        id: postId,
      },
      data: {
        likes: {
          increment: 1,
        },
      },
    });
  }
}

export { LikePostService };
