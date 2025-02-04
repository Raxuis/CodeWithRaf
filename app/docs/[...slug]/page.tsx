import { posts } from "#site/content";
import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx-components";
import '@/styles/mdx.css';
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface PostPageProps {
  params: {
    slug: string[];
  }
}

async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug.join("/");
  return posts.find((post) => post.slugAsParams === slug);
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set("title", post.title);

  return {
    title: post.title,
    description: post.description,
    authors: { name: siteConfig.authors.join(", ") },
    openGraph: {
      title: post.title,
      description: post.description,
      url: post.slug,
      type: "article",
      images: [
        {
          url: `/api/og?${ogSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [`/api/og?${ogSearchParams.toString()}`],
    }
  }
}

export async function generateStaticParams(): Promise<PostPageProps["params"][]> {
  return posts.map(post => ({ slug: post.slugAsParams.split("/") }));
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostFromParams(params);

  if (!post || !post.published) {
    notFound();
  }

  return <article className="container py-6 prose dark:prose-invert max-w-3xl">
    <h1 className="mb-2">{post.title}</h1>
    {post.description ? <p className="text-xl mt-0 text-muted-foreground">{post.description}</p> : null}
    <hr className="my-4" />
    <MDXContent code={post.body} />
  </article>
}
