import styles from "./NavBar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <GiHamburgerMenu />
    </div>
  );
}
