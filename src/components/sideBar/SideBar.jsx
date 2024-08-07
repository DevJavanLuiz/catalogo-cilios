import styles from "./SideBar.module.css";
import { MdLocationPin } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function SideBar({ onCloseSideBar }) {
  return (
    <nav className={styles.side_bar}>
      <div className={styles.logo}>
        <img src="/img/logo-side-bar.png" alt="" />
      </div>
      <ul className={styles.menu_itens}>
        <li>
          <Link to="/" onClick={onCloseSideBar}>
            <strong>Catálogo</strong>
            <span>
              <FaList />
            </span>
          </Link>
        </li>
        <li>
          <Link to="/location" onClick={onCloseSideBar}>
            <strong>Localizaçao</strong>
            <span>
              <MdLocationPin />
            </span>
          </Link>
        </li>
        <li>
          <Link to="/contacts" onClick={onCloseSideBar}>
            <strong>Contatos</strong>
            <span>
              <MdPhone />
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
