import { ReactNode } from "react";
import styles from "./styles.module.css";
interface InputProps {
  children: ReactNode;
  type: string;
}

export default function Input({ children, type }: InputProps) {
  return (
    <div className={styles.Input}>
      <label>{children}:</label>
      <input type={type} name={type} />
    </div>
  );
}
