import styles from "./styles.module.css";
import Link from "next/link";

export default function RegistrationLink() {
  return (
    <div className={styles.RegistrationLinkContainer}>
      <label>If you haven't registered yet, follow this link</label>
      <Link href={"/registration-page"} className={styles.Registration}>
        Registration
      </Link>
    </div>
  );
}
