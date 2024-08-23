import "./index.css";
import MenuDetails from "./components/menuDetails/MenuDetails";
import menuItens from "./assets/DB/menuItens";
import { useState } from "react";
import ModalDescription from "./components/modalDescription/ModalDescription";
import { BsInfoCircleFill } from "react-icons/bs";

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
      <div className="info-content">
        <BsInfoCircleFill />
        <div className="info">
          {/* <img src="/img/info-manutencao.jpeg" alt="" /> */}
          <p>
            <b>Manutenção Regular:</b> É necessário realizar a manutenção entre
            15 a 20 dias após a aplicação. Os cílios devem estar pelo menos 40%
            preenchidos para que a manutenção seja eficaz.{" "}
          </p>
        </div>
      </div>
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
        title={modalContentSelected?.name}
      />
    </>
  );
}

export default App;
