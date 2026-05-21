import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "secondary";

type CommonProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
};

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export type ButtonProps = ButtonAsLink | ButtonAsButton;

function classNames(...parts: (string | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export function Button({
  variant = "primary",
  children,
  className,
  icon,
  href,
  ...rest
}: ButtonProps) {
  const classes = classNames(
    styles.button,
    variant === "primary" ? styles.primary : styles.secondary,
    className,
  );

  const content = (
    <>
      {children}
      {icon ? <span className={styles.icon}>{icon}</span> : null}
    </>
  );

  if (href) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classes} href={href} {...anchorProps}>
        {content}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button type="button" className={classes} {...buttonProps}>
      {content}
    </button>
  );
}
