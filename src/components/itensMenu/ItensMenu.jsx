import styles from "./ItensMenu.module.css";
import { FaPlus } from "react-icons/fa6";

export default function ItensMenu({
  name,
  id,
  value,
  img,
  description,
  handleClick,
  alt,
}) {
  return (
    <div
      className={styles.itens_menu_details}
      onClick={() => {
        handleClick(id);
      }}
    >
      <img src={img} alt={alt} />
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
          <FaPlus size={18} aria-label="icone de ver-mais abre o modal" />
        </button>
      </div>
    </div>
  );
}
