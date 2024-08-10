import { useState } from "react";
import SideBar from "../sideBar/SideBar";
import styles from "./NavBar.module.css";
import { AiOutlineMenu } from "react-icons/ai";
import { RiCloseLargeFill } from "react-icons/ri";

export default function NavBar() {
  const [isOpenSideBar, setisOpenSideBar] = useState(false);

  function openSideBar() {
    setisOpenSideBar(true);
  }
  function closeSideBar() {
    setisOpenSideBar(false);
  }

  return (
    <>
      <div className={styles.navbar}>
        {isOpenSideBar ? (
          <button onClick={closeSideBar}>
            <RiCloseLargeFill />
          </button>
        ) : (
          <button onClick={openSideBar}>
            <AiOutlineMenu />
          </button>
        )}
      </div>
      <SideBar onCloseSideBar={closeSideBar} isOpen={isOpenSideBar} />
    </>
  );
}
