import ModalBase from "../modal/ModalBase";
import styles from "./ModalDescription.module.css";
import { IoLogoWhatsapp } from "react-icons/io";
export default function ModalDescription({ isOpen, handleClose, imgs = [] }) {
  return (
    <ModalBase isOpen={isOpen} handleClose={handleClose}>
      <div className={styles.grid_imgs}>
        {imgs.map((img) => (
          <img src={img.url} key={img.id} alt="Modelo imagem"></img>
        ))}
      </div>
      <div className={styles.btn_redirection}>
        <a href="#">
          Agende seu horário <IoLogoWhatsapp />
        </a>
      </div>
    </ModalBase>
  );
}
