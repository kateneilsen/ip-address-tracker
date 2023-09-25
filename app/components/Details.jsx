import styles from "../styles/details.module.css";
import { getDetails } from "../lib/getDetails";

export default async function Details({ipInfo}) {
  return (
    <section className={styles.responseInfo}>
      <span className={styles.nowrap}>
        <h2>IP ADDRESS</h2>
        <b>{ipInfo.ip}</b>
      </span>
      <span>
        <h2>LOCATION</h2>
        <b>
          {ipInfo.location.city}, {ipInfo.location.country}, {ipInfo.location.postalCode}
        </b>
      </span>
      <span className={styles.nowrap}>
        <h2>TIMEZONE</h2>
        <b>UTC{ipInfo.location.timezone}</b>
      </span>
      <span>
        <h2>ISP</h2>
        <b>{ipInfo.isp}</b>
      </span>
    </section>
  );
}
