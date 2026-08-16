import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  highlight: string;
  description?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  highlight,
  description,
}: SectionTitleProps) {
  return (
    <header className={styles.header}>
      {eyebrow && (
        <span className={styles.eyebrow}>
          {eyebrow}
        </span>
      )}

      <h2>
        {title}{" "}
        <span>{highlight}</span>
      </h2>

      {description && (
        <p>{description}</p>
      )}
    </header>
  );
}