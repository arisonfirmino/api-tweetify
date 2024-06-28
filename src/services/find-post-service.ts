import prismaClient from "../prisma";

class FindPostService {
  async execute({ id }: { id: string }) {
    const post = await prismaClient.post.findFirst({
      where: {
        id: id,
      },
      include: {
        comments: true,
      },
    });

    return post;
  }
}

export { FindPostService };
