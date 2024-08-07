import { useState } from "react";
import styles from "./MenuDetails.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import ItensMenu from "../itensMenu/ItensMenu";

export default function MenuDetails({ name, itens = [], handleClick }) {
  const [itensMenu, setItensMenu] = useState(false);

  function onItensMenu() {
    setItensMenu((prevState) => !prevState);
  }
  return (
    <div
      className={`${styles.menu_details}  ${
        itensMenu && styles.menu_details_open
      }`}
    >
      <h1>{name}</h1>
      <button onClick={onItensMenu}>
        {itensMenu ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </button>
      {itens.map((info) => (
        <ItensMenu
          name={info.name}
          key={info.id}
          id={info.id}
          description={info.description}
          img={info.img}
          value={info.value}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
}
