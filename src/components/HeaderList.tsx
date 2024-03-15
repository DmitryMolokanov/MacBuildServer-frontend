import Link from "next/link";
import SignOutBtn from "./SignOutBtn";
import styles from "./styles.module.css";

export default function HeaderList() {
  return (
    <ul className={styles.HeaderList}>
      <li>
        <Link href={"#"}>Works</Link>
      </li>
      <li>
        <Link href={"#"}>Blog</Link>
      </li>
      <li>
        <Link href={"#"}>Contact</Link>
      </li>
      <li>
        <SignOutBtn />
      </li>
    </ul>
  );
}
