import "./index.css";
import MenuDetails from "./components/menuDetails/MenuDetails";
import menuItens from "./assets/DB/menuItens";
import { useState } from "react";
import ModalDescription from "./components/modalDescription/ModalDescription";

function App() {
  const [modalContentSelected, setModalContentSelected] = useState({});

  function onOpenModal(id) {
    const menuDetails = menuItens.menu.find((menu) =>
      menu.itens.find((item) => item.id == id)
    );
    const itemExist = menuDetails.itens.find((item) => item.id == id);
    setModalContentSelected(itemExist);
  }

  function onCloseModal() {
    setModalContentSelected({});
  }
  return (
    <>
      {menuItens.menu.map((info) => {
        return (
          <MenuDetails
            key={info.id}
            name={info.name}
            itens={info.itens}
            handleClick={onOpenModal}
          />
        );
      })}

      <ModalDescription
        isOpen={modalContentSelected?.id}
        handleClose={onCloseModal}
        imgs={modalContentSelected?.modalImgs}
      />
    </>
  );
}

export default App;
