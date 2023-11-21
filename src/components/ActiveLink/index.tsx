import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement, cloneElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
  const { pathname } = useRouter();
  const relativePath = pathname.match(/^\/[^\/]*/)![0];
  const isActive =
    relativePath === rest.href || relativePath === rest.as ? true : false;
  return (
    <Link {...rest}>
      {cloneElement(children, { pathname: isActive.toString() })}
    </Link>
  );
}
