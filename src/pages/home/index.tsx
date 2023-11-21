import Head from "next/head";
import { Container, Hero, RedirectButton } from "./styles";
import Image from "next/image";
import HeroImage from "../../assets/Mulher.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | awb.talks</title>
      </Head>
      <Container>
        <Hero>
          <span>👏 Hey, Welcome</span>
          <h1>
            News about the <br /> <span>fullstack</span> world.
          </h1>
          <p>
            In this blog you&apos;ll see posts more focused on <br /> Next Js,
            React, Node and .Net
          </p>
          <RedirectButton href={"/posts"}>See more</RedirectButton>
        </Hero>
        <Image
          src={HeroImage}
          alt="Mulher codando"
          priority={true}
          height={520}
          width={335}
        />
        <main />
      </Container>
    </>
  );
}
