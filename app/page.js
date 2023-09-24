import Image from "next/image";
import styles from "./styles/page.module.css";
import Details from "./components/Details";

export default function Home() {
  return (
    <main>
      <section className={styles.top}>
        <h1>IP Address Tracker</h1>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="Search for any IP address or domain"
          />
          <button>
            <img src="../images/icon-arrow.svg" alt="arrow right" />
          </button>
        </div>
      </section>
      <Details />
    </main>
  );
}
