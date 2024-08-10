import ModalBase from "../modal/ModalBase";
import styles from "./ModalDescription.module.css";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";
export default function ModalDescription({
  isOpen,
  handleClose,
  imgs = [],
  title,
}) {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <ModalBase isOpen={isOpen} handleClose={handleClose}>
      <div className={styles.logo_img}>
        <img src="/img/logo.png" alt="logo" />
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className={styles.grid_imgs}
      >
        {imgs.map((img) => (
          <motion.img
            src={img.url}
            key={img.id}
            variants={item}
            alt="Modelo imagem"
          ></motion.img>
        ))}
      </motion.div>
      <div className={styles.btn_redirection}>
        <a
          href={`https://api.whatsapp.com/send?phone=558185187616&text=Olá, estou interessada em fazer o *${title}*, pode me passar mais informaçoes?`}
        >
          Agende seu horário <IoLogoWhatsapp />
        </a>
      </div>
    </ModalBase>
  );
}
