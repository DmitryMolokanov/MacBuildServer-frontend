import styles from "../app/main-page/styles.module.css";

interface PostProps {
  title: string;
  date: string;
  themes: string;
  children: React.ReactNode;
}

export default function Post({ title, date, themes, children }: PostProps) {
  return (
    <div className={styles.Post}>
      <div className={styles.PostTitle}>{title}</div>
      <div className={styles.PostDateContainer}>
        <div className={styles.PostDate}> {date}</div>
        <div className={styles.PostTheme}> {themes}</div>
      </div>
      {children}
    </div>
  );
}
