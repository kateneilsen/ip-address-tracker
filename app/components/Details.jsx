import styles from "../styles/details.module.css";

export default function Details({ipInfo}) {
  return (
    <section className={styles.responseInfo}>
      <span className={styles.textwrap}>
        <h2>IP ADDRESS</h2>
        <b>{ipInfo.ip}</b>
      </span>
      <span>
        <h2>LOCATION</h2>
        <b>
          {ipInfo.city}, {ipInfo.country_code3}, {ipInfo.zipcode}
        </b>
      </span>
      <span className={styles.textwrap}>
        <h2>TIMEZONE</h2>
        <b>{ipInfo.time_zone.name}</b>
      </span>
      <span>
        <h2>ISP</h2>
        <b>{ipInfo.isp}</b>
      </span>
    </section>
  );
}
