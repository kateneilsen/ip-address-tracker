import { getDetails } from "../lib/getDetails";
import styles from "../styles/details.module.css";

export default async function Details() {
  const response = await getDetails();
  return (
    <section className={styles.responseInfo}>
      <span>
        <h2>IP ADDRESS</h2>
        <b>{response.ip}</b>
      </span>
      <span>
        <h2>LOCATION</h2>
        <b>
          {response.location.region},{response.location.country}
        </b>
      </span>
      <span>
        <h2>TIMEZONE</h2>
        <b>{response.location.timezone}</b>
      </span>
      <span>
        <h2>ISP</h2>
        <b>{response.isp}</b>
      </span>
    </section>
  );
}
