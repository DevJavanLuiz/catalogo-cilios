import styles from "./Modalbase.module.css";
import { IoMdClose } from "react-icons/io";

export default function ModalBase({ isOpen, children, handleClose }) {
  return (
    isOpen && (
      <div className={styles.content_modal}>
        <div className={styles.modal_base}>
          <button onClick={handleClose}>
            <IoMdClose />
          </button>
          <div className={styles.modal_body}>{children}</div>
        </div>
      </div>
    )
  );
}
