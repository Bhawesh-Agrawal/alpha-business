import blogData from "../../../../db-temp/blog.json";

type Blog = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  author: { name: string };
};

interface Metadata {
  title: string;
  description: string;
  keywords?: string[];
  authors?: { name: string }[];
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = blogData.find((b) => b.slug === params.slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The blog post you are looking for does not exist.",
    };
  }

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
  };
}
