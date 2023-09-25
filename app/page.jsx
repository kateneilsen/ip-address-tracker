
import styles from "./styles/page.module.css";
import Details from "./components/Details";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { getDetails} from "../app/lib/getDetails";

const MyMap = dynamic(() => import("./components/Map"), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

export default async function Home() {
  const ipInfo = await getDetails();
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
      <Details ipInfo={ipInfo} />
      <MyMap ipInfo={ipInfo} />
    </main>
  );
}
