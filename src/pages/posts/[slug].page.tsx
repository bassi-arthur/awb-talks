import { Fragment } from "react";
import Head from "next/head";
import { Container, PostContainer } from "./style";
import { prismic } from "@/lib/prismic";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { PrismicRichText } from "@prismicio/react";
import { ImageFieldImage, RichTextField } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicNextImageProps } from "@prismicio/next";

interface Params extends ParsedUrlQuery {
  slug: string;
}

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: RichTextField | null;
    updatedAt: string;
    bannerImage: ImageFieldImage | null;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | awb.talks</title>
      </Head>
      <Container>
        <PrismicNextImage field={post.bannerImage} height={250} width={1120} />
        <PostContainer>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <PrismicRichText field={post.content} />
        </PostContainer>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as Params;

  const response = await prismic.getByUID("posts", slug);

  console.log("posts", response);

  const post = {
    slug: response.uid,
    title: response.data.title,
    bannerImage: response.data.bannerimage,
    content: response.data.content,
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };

  return {
    props: { post },
  };
};
