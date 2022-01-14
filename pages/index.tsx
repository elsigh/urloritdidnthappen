import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const onClick = (id: string) => {
    const notReal = document.getElementById("not-real");
    const real = document.getElementById("real");
    if (notReal === null || real === null) return;
    notReal.hidden = true;
    real.hidden = true;
    if (id === "not-real") {
      notReal.hidden = false;
    } else {
      real.hidden = false;
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>URLorItDidntHappen</title>
        <meta name="description" content="URL or it didn't happen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>URLorItDidntHappen</h1>
        <h2>Click one:</h2>
        <div>
          <button onClick={() => onClick("real")}>
            I have the URL right now
          </button>
          <span className={styles.or}>or</span>
          <button onClick={() => onClick("not-real")}>
            I don’t have the URL atm
          </button>
        </div>

        <div id="real" hidden className={styles.card}>
          Shit is real.
        </div>

        <div id="not-real" hidden className={styles.card}>
          It didn’t happen.
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
