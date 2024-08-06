import styles from "./ItensMenu.module.css";
import { FaPlus } from "react-icons/fa6";

export default function ItensMenu({ name, value, img, description }) {
  return (
    <div className={styles.itens_menu_details}>
      <img src={img} alt="Imagem modelo" />
      <div className={styles.itens}>
        <h2>{name}</h2>
        <h3>{description}</h3>
        <p>
          <span>
            {value.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </p>
        <button className={styles.btn}>
          <FaPlus size={18} />
        </button>
      </div>
    </div>
  );
}
