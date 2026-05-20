import { TrendingUp } from "lucide-react";
import type { ReactNode } from "react";
import styles from "./Badge.module.scss";

const SEPARATOR = " · ";

export type BadgeProps = {
  /** Labels joined with a middle dot (e.g. CEO · AI Product Strategist). */
  items?: string[];
  /** Custom label content; use when `items` is not enough. */
  children?: ReactNode;
  icon?: ReactNode;
  className?: string;
};

function classNames(...parts: (string | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export function BadgeTrendingUpIcon({ className }: { className?: string }) {
  return <TrendingUp className={className} size={14} aria-hidden />;
}

export function Badge({ items, children, icon, className }: BadgeProps) {
  const label =
    children ??
    (items && items.length > 0 ? items.join(SEPARATOR) : null);

  if (label == null) {
    return null;
  }

  return (
    <span className={classNames(styles.badge, className)}>
      {icon ? <span className={styles.icon}>{icon}</span> : null}
      <span className={styles.text}>{label}</span>
    </span>
  );
}
