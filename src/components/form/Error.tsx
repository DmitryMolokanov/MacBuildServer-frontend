import styles from "../form/styles.module.css";

export default function Error({ children }: { children: React.ReactNode }) {
  return <span className={styles.Error}>{children}</span>;
}
