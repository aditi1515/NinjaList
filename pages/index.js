import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum ea
          illum beatae temporibus unde maxime quae voluptatibus veniam
          distinctio, sed mollitia eligendi laudantium earum minus dolores
          incidunt iste aliquam.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id cum ea
          illum beatae temporibus unde maxime quae voluptatibus veniam
          distinctio, sed mollitia eligendi laudantium earum minus dolores
          incidunt iste aliquam.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
