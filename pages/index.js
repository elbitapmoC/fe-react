import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Champions from "../components/Champions";
import Counter from "../components/Counter";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Home() {
  const [count, setCount] = useState(1);

  return (
    <div className={styles.container}>
      <Head>
        <title>State &amp; Props</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel showThumbs={false}>
        <div className={`${styles.main}`}>
          <Champions
            title="Random Champion Selection"
            description="Passing Props, useState &amp; Reactive Data"
            filter={false}
          />
        </div>
        <div className={styles.main}>
          <Counter title="Count Chocula" count={count} setCount={setCount} />
        </div>
        <div className="">
          <Champions
            title="Filtered List of Champion"
            description="Passing Props, useState &amp; Reactive Data"
            filter={true}
          />
        </div>
      </Carousel>
      <Footer />
    </div>
  );
}
