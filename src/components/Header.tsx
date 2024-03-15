import HeaderList from "./HeaderList";
import Image from "next/image";
import styles from "./styles.module.css";
import { useState } from "react";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={styles.Header}>
      <div className={styles.HeaderBtnContainer}>
        <HeaderList />
      </div>
      <div
        className={styles.HeaderBurgerMenu}
        onClick={(e) => {
          e.stopPropagation();
          setShowMenu((cur) => !cur);
        }}
      >
        <Image src="/menu.png" width={30} height={18} alt="menu" />
        <div className={styles.HeaderBurgerList}>
          {showMenu ? <HeaderList /> : null}
        </div>
      </div>
    </div>
  );
}
