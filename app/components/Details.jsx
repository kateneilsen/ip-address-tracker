import styles from "../styles/details.module.css";

export default function Details({ipInfo, state, timezone}) {
  const data = ipInfo;
  const stateAbbreviation = state;
  return (
    <section className={styles.responseInfo}>
      <span className={styles.textwrap}>
        <h2>IP ADDRESS</h2>
        <b>{data.ip}</b>
      </span>
      <span>
        <h2>LOCATION</h2>
        <b>
          {data.city}, {stateAbbreviation} , {data.zipcode}
        </b>
      </span>
      <span className={styles.nowrap}>
        <h2>TIMEZONE</h2>
        <b>UTC{timezone}</b>
      </span>
      <span>
        <h2>ISP</h2>
        <b>{data.isp}</b>
      </span>
    </section>
  );
}
