import ModalBase from "../modal/ModalBase";
import styles from "./ModalDescription.module.css";

export default function ModalDescription({ isOpen, handleClose, imgs = [] }) {
  return (
    <ModalBase isOpen={isOpen} handleClose={handleClose}>
      <div className={styles.grid_imgs}>
        {imgs.map((img) => (
          <img src={img.url} key={img.id} alt="Modelo imagem"></img>
        ))}
      </div>
      <a href="#">Agende seu horário</a>
    </ModalBase>
  );
}
