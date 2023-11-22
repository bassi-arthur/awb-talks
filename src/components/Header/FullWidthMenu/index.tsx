import { ActiveLink } from "../../ActiveLink";
import { HeaderContainer, HeaderContent, StyledLink } from "./styles";
import Image from "next/image";
import LogoImage from "../../../assets/awb.talks.logo.svg";
import Link from "next/link";

export default function FullWidthMenu() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href={"/"}>
          <Image src={LogoImage} alt="site logo" />
        </Link>
        <nav>
          <ActiveLink href="/">
            <StyledLink>Home</StyledLink>
          </ActiveLink>
          <ActiveLink href="/posts" as="/posts">
            <StyledLink>Posts</StyledLink>
          </ActiveLink>
          <ActiveLink href="/about" as="/about">
            <StyledLink>About</StyledLink>
          </ActiveLink>
        </nav>
      </HeaderContent>
    </HeaderContainer>
  );
}
