import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ButtonContainer, Container, Hero, IconButton } from "./styles";
import ProfileImage from "../../assets/profile-image.jpg";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <>
      <Head>
        <title>About | awb.talks</title>
      </Head>
      <Container>
        <Hero>
          <span>Hello I&apos;m</span>
          <h1>
            <span>Arthur Winiarski Bassi</span>
          </h1>
          <p>Fullstack Developer</p>
          <p>
            Fullstack developer specialized in ReactJS for dynamic interfaces
            and C# with .NET for backend robustness. Passionate about creating
            scalable and intuitive solutions that drive exceptional user
            experiences.
          </p>
          <ButtonContainer>
            <IconButton
              href={
                "https://www.linkedin.com/in/arthur-winiarski-bassi-068b8814b/"
              }
            >
              <FaLinkedinIn />
            </IconButton>
            <IconButton href={"https://github.com/bassi-arthur"}>
              <FaGithub />
            </IconButton>
          </ButtonContainer>
        </Hero>
        <Image
          src={ProfileImage}
          alt="Arthur winiarski bassi"
          priority={true}
        />
        <main />
      </Container>
    </>
  );
}
