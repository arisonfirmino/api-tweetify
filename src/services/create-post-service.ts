import prismaClient from "../prisma";

interface CreatePostServiceProps {
  name: string;
  email: string;
  imageUrl: string | null;
  text: string;
}

class CreatePostService {
  async execute({ name, email, imageUrl, text }: CreatePostServiceProps) {
    if (!name || !email || !text) {
      throw new Error("Campos não preenchidos!");
    }

    const post = await prismaClient.post.create({
      data: {
        name,
        email,
        imageUrl,
        text,
      },
    });

    return post;
  }
}

export { CreatePostService };
