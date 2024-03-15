import styles from "../app/main-page/styles.module.css";
import Image from "next/image";

interface FeaturedWorkProps {
  title: string;
  img: string;
  date: string;
  category: string;
  discribe: string;
}

export default function FeaturedWork({
  title,
  date,
  category,
  img,
  discribe,
}: FeaturedWorkProps) {
  return (
    <div className={styles.WorkContainer}>
      <div className={styles.WorkImgContainer}>
        <Image src={img} width={246} height={180} alt="work" />
      </div>
      <div className={styles.WorkInfoContainer}>
        <div className={styles.WorkInfoTitle}>{title}</div>
        <div className={styles.WorkInfoDateCategory}>
          <div className={styles.WorkInfoDate}>{date}</div>
          <div className={styles.WorkInfoCategory}>{category}</div>
        </div>
        <div className={styles.WorkInfoDiscribe}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </div>
      </div>
    </div>
  );
}
