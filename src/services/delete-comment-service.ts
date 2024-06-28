import prismaClient from "../prisma";

class DeleteCommentService {
  async execute({ id }: { id: string }) {
    if (!id) {
      throw new Error("Falha na solicitação.");
    }

    const findComment = await prismaClient.comment.findFirst({
      where: {
        id: id,
      },
    });

    if (!findComment) {
      throw new Error("Comentário não encontrado.");
    }

    await prismaClient.comment.delete({
      where: {
        id: findComment.id,
      },
    });

    return { message: "Deletado com sucesso!" };
  }
}

export { DeleteCommentService };
