import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement, cloneElement } from "react";

interface ActiveProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({children, activeClassName, ...props }: ActiveProps) {
  const { asPath } = useRouter();

  const className = asPath === props.href 
    ? activeClassName 
    : '';

  return (
    <Link {...props }>
     {cloneElement(children, {
       className,
     })}
    </Link>
  );
}