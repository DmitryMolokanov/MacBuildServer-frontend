import { ReactNode } from "react";
import styles from "./styles.module.css";
interface ButtonProps {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <button type="submit" className={styles.FormBtn}>
      {children}
    </button>
  );
}
