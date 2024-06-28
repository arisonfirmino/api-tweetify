import prismaClient from "../prisma";

class ListPostsService {
  async execute() {
    const posts = await prismaClient.post.findMany({
      include: {
        comments: true,
      },
      orderBy: {
        created_at: "desc",
      },
    });

    return posts;
  }
}

export { ListPostsService };
