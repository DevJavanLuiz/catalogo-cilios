import "./index.css";
import NavBar from "./components/navBar/NavBar";
import MenuDetails from "./components/menuDetails/MenuDetails";
import menuItens from "./assets/DB/menuItens";

function App() {
  return (
    <div className="main-content">
      <NavBar />
      <div className="container">
        {menuItens.menu.map((info) => {
          return <MenuDetails key={info.id} name={info.name} />;
        })}
      </div>
    </div>
  );
}

export default App;
