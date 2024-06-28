import prismaClient from "../prisma";

class DeletePostService {
  async execute({ id }: { id: string }) {
    if (!id) {
      throw new Error("Falha na solicitação.");
    }

    const findPost = await prismaClient.post.findFirst({
      where: {
        id: id,
      },
    });

    if (!findPost) {
      throw new Error("Post não encontrado.");
    }

    await prismaClient.comment.deleteMany({
      where: {
        postId: findPost.id,
      },
    });

    await prismaClient.post.delete({
      where: {
        id: findPost.id,
      },
    });

    return { message: "Deletado com sucesso!" };
  }
}

export { DeletePostService };
