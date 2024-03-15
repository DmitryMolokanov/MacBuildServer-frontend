import styles from "./styles.module.css";
import Link from "next/link";

export default function RegistrationLink() {
  return (
    <div className={styles.RegistrationLinkContainer}>
      <label>If you are already registered, follow this link</label>
      <Link href={"/authentication-page"} className={styles.Registration}>
        Authentication
      </Link>
    </div>
  );
}
