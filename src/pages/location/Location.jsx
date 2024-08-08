import styles from "./Location.module.css";

import MyMap from "../../components/mapGoogle/MapGoogle";

export default function Location() {
  return (
    <>
      <div className={styles.logo}>
        <img src="/img/logo-side-bar.png" alt="logo" />
      </div>
      <div className={styles.location_content}>
        <MyMap />
        <p>R.Uruaçu, 45 Candeias, Jaboatão dos Guararapes. </p>
      </div>
    </>
  );
}
