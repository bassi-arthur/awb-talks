import { useState } from "react";
import {
  HeaderContainer,
  Icon,
  MenuContainer,
  MenuLabel,
  StyledLink,
} from "./styles";
import { ActiveLink } from "@/components/ActiveLink";
import Link from "next/link";
import Image from "next/image";
import LogoImage from "../../../assets/awb.talks.logo.svg";

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  return (
    <HeaderContainer>
      <Link href={"/"}>
        <Image src={LogoImage} alt="site logo" />
      </Link>
      <MenuLabel htmlFor="nav-toggle" onClick={handleClick}>
        <Icon open={open}>&nbsp;</Icon>
      </MenuLabel>
      <MenuContainer open={open}>
        <ActiveLink onClick={handleClick} href="/">
          <StyledLink>Home</StyledLink>
        </ActiveLink>
        <ActiveLink onClick={handleClick} href="/posts" as="/posts">
          <StyledLink>Posts</StyledLink>
        </ActiveLink>
        <ActiveLink onClick={handleClick} href="/about" as="/about">
          <StyledLink>About</StyledLink>
        </ActiveLink>
      </MenuContainer>
    </HeaderContainer>
  );
}
