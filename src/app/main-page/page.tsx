"use client";

import { useSelector } from "react-redux";
import { authTypes } from "@/types/authTypes";
import Header from "@/components/Header";
import Authentication from "../authentication-page/page";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import Post from "@/components/Post";
import FeaturedWork from "@/components/FeaturedWork";

export default function MainPage() {
  const selector = useSelector((state: authTypes) => state.token);

  if (selector.length > 0)
    return (
      <div className={styles.MainPage}>
        <Header />
        <div className={styles.Title}>
          <div className={styles.TitleInfo}>
            <div className={styles.TitleInfoContainer}>
              <div className={styles.TitleGreeting}>
                Hi, I am John, <br /> Creative Technologist
              </div>
              <div className={styles.TitleDiscription}>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </div>
              <button className={styles.TitleBtn}>Download Resume</button>
            </div>
          </div>
          <div className={styles.TitleImg}>
            <div className={styles.TitleImgContainer}>
              <Image src="/Ellipse 1.png" width={243} height={243} alt="user" />
            </div>
          </div>
        </div>
        <div className={styles.ResentPosts}>
          <div className={styles.ResentPostsTitle}>
            <span>Recent posts</span>
            <Link href={"/#"}>View all</Link>
          </div>
          <div className={styles.PostsContainer}>
            <Post
              title={"Making a design system from scratch"}
              date={"12 Feb 2020"}
              themes={"Design, Pattern"}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Post>
            <Post
              title={"Creating pixel perfect icons in Figma"}
              date={"12 Feb 2020"}
              themes={"Figma, Icon Design"}
            >
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </Post>
          </div>
        </div>
        <div className={styles.FeaturedWorks}>
          <div className={styles.FeaturedWorksTitle}>Featured works</div>
          <div className={styles.FeaturedWorksContainer}>
            <FeaturedWork
              title={"Designing Dashboards"}
              date={"2020"}
              category={"Dashboard"}
              img={"/Rectangle 30.png"}
              discribe={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                sint. Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet.`}
            />
            <FeaturedWork
              title={"Vibrant Portraits of 2020"}
              date={"2018"}
              category={"Illustration"}
              img={"/Rectangle 32.png"}
              discribe={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                sint. Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet.`}
            />
            <FeaturedWork
              title={"36 Days of Malayalam type"}
              date={"2018"}
              category={"Typography"}
              img={"/Rectangle 34.png"}
              discribe={`Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                sint. Velit officia consequat duis enim velit mollit. Exercitation
                veniam consequat sunt nostrud amet.`}
            />
          </div>
        </div>
        <div className={styles.Footer}>
          <div className={styles.FooterIcons}>
            <Image src="/icons/fb.svg" width={30} height={30} alt="fb" />
            <Image src="/icons/insta.svg" width={30} height={30} alt="insta" />
            <Image src="/icons/Group.svg" width={37} height={30} alt="Group" />
            <Image
              src="/icons/Linkedin.svg"
              width={30}
              height={30}
              alt="Linkedin"
            />
          </div>
          <div className={styles.FooterCopyright}>
            Copyright ©2020 All rights reserved
          </div>
        </div>
      </div>
    );
  return <Authentication />;
}
