import SideBar from "../sideBar/SideBar";
import styles from "./NavBar.module.css";

import { AiOutlineMenu } from "react-icons/ai";
import { RiCloseLargeFill } from "react-icons/ri";

import { useState } from "react";

export default function NavBar() {
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  function openSideBar() {
    setIsOpenSideBar(true);
  }
  function closeSideBar() {
    setIsOpenSideBar(false);
  }

  return (
    <>
      <div className={styles.navbar}>
        {isOpenSideBar ? (
          <button
            aria-label="botão 'X' fechar a sidebar"
            onClick={closeSideBar}
          >
            <RiCloseLargeFill />
          </button>
        ) : (
          <button
            aria-label="botão 'Hamburguer' abir a sidebar"
            onClick={openSideBar}
          >
            <AiOutlineMenu />
          </button>
        )}
      </div>
      <SideBar onCloseSideBar={closeSideBar} isOpen={isOpenSideBar} />
    </>
  );
}
