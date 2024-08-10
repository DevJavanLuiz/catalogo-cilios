import styles from "./SideBar.module.css";
import { MdLocationPin } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { FaList } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function SideBar({ onCloseSideBar, isOpen }) {
  const links = [
    {
      name: "Catalogo",
      icon: <FaList />,
      url: "/",
    },
    {
      name: "Localização",
      icon: <MdLocationPin />,
      url: "/location",
    },
    {
      name: "Contatos",
      icon: <MdPhone />,
      url: "/contacts",
    },
  ];

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
    <nav
      className={styles.side_bar}
      style={{ transform: isOpen && " translateX(0)" }}
    >
      <div className={styles.logo}>
        <img src="/img/logo-side-bar.png" alt="logo" />
      </div>
      {isOpen && (
        <motion.ul
          variants={container}
          initial="hidden"
          animate="visible"
          className={styles.menu_itens}
        >
          {links.map((link) => (
            <motion.li key={link.name} variants={item}>
              <Link to={link.url} onClick={onCloseSideBar}>
                <strong>{link.name}</strong>
                <span>{link.icon}</span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </nav>
  );
}
