import { cn } from "@heroui/react";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function ButtonLink({ href, children, className, onClick }: ButtonLinkProps) {
  return (
    <a href={href} onClick={onClick} className={cn("inline-flex items-center justify-center cursor-pointer", className)}>
      {children}
    </a>
  );
}
