import Head from "next/head";
import { Chip, Post, PostsContainer } from "./styles";
import Link from "next/link";
import { GetStaticProps } from "next";
import { prismic } from "@/lib/prismic";

type ExcerptType = {
  text: string;
};

type Post = {
  slug: string;
  title: string;
  excerpt: ExcerptType;
  updatedAt: string;
  tags: string[];
};

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  function truncateText(str: string, n: number) {
    return str.length > n ? str.slice(0, n - 1) + " ..." : str;
  }

  return (
    <>
      <Head>
        <title>Posts | awb.talks</title>
      </Head>
      <PostsContainer>
        {posts.map((post) => (
          <Post key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <time>{post.updatedAt}</time>
              <strong>{post.title}</strong>
              <p>{truncateText(post.excerpt.text, 300)}</p>
              {post.tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </Link>
          </Post>
        ))}
      </PostsContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await prismic.getAllByType("posts", {
    fetch: ["post.title", "post.content"],
    pageSize: 100,
  });

  const posts = response.map((post) => {
    return {
      slug: post.uid,
      title: post.data.title,
      excerpt: post.data.content[0],
      tags: post.tags,
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    };
  });

  return {
    props: {
      posts,
    },
  };
};
