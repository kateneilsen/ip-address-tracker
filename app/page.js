import styles from "./styles/page.module.css";
import Details from "./components/Details";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const MyMap = dynamic(() => import("./components/Map"), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

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
      <MyMap />
    </main>
  );
}
