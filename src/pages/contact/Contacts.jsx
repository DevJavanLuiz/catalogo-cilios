import styles from "./Contacts.module.css";
export default function Contacts() {
  return (
    <div>
      <div className={styles.logo}>
        <img src="/img/logo-side-bar.png" alt="logo" />
      </div>
      <div className={styles.contacts_content}>
        <div className={styles.item_contact}>
          <a href="#">
            <img src="/img/instagram.png" alt="logo instagram" />
            <p>@instagram</p>
          </a>
        </div>
        <div className={styles.item_contact}>
          <a href="#">
            <img src="public/img/whatsapp.png" alt="logo whatsapp" />
            <p>(81) 9 8518-7616</p>
          </a>
        </div>
      </div>
      <div className={styles.description_contact}>
        <p>
          DEUS, TUDO QUE SOU, DEVO À VOCÊ! AGRADEÇO POR TER O SENHOR AO MEU
          LADO. AGRADEÇO A TUDO QUE TENHO E TUDO QUE ESTÁ POR VIR.
          <br />
          <br />
          EM DEUS, TUDO É POSSIVEL!
        </p>
      </div>
    </div>
  );
}
