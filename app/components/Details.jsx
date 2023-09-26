import styles from "../styles/details.module.css";

export default function Details({ipInfo}) {
  const data = ipInfo;
  return (
    <section className={styles.responseInfo}>
      <span className={styles.textwrap}>
        <h2>IP ADDRESS</h2>
        <b>{data.ip}</b>
      </span>
      <span>
        <h2>LOCATION</h2>
        <b>
         {ipInfo.location.region}
        </b>
      </span>
      <span className={styles.nowrap}>
        <h2>TIMEZONE</h2>
        <b>UTC{ipInfo.location.timezone}</b>
      </span>
      <span>
        <h2>ISP</h2>
        <b>{data.isp}</b>
      </span>
    </section>
  );
}
