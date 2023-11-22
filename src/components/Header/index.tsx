import { useMediaQuery } from "@/hooks/useMediaQuery";
import HamburgerMenu from "./HamburguerMenu";
import FullWidthMenu from "./FullWidthMenu";

export function Header() {
  const isBreakpoint = useMediaQuery(768);
  return <>{isBreakpoint ? <HamburgerMenu /> : <FullWidthMenu />}</>;
}
