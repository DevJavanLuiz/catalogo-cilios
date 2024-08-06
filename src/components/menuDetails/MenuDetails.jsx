import styles from "./MenuDetails.module.css";
import { IoIosArrowDown } from "react-icons/io";

export default function MenuDetails({ name }) {
  return (
    <div className={styles.menu_details}>
      <h1>{name}</h1>
      <button>
        <IoIosArrowDown />
      </button>
    </div>
  );
}
