import App from "./App.jsx";
import { useLocation, Route, Routes } from "react-router-dom";
import Contacts from "./pages/contact/Contacts.jsx";
import Location from "./pages/location/Location.jsx";
import NavBar from "./components/navBar/NavBar.jsx";
import { AnimatePresence } from "framer-motion";
import Animation from "./components/animation/Animation.jsx";

export default function MyRouter() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="main-content">
      <NavBar />
      <div className="container">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.key}>
            <Route path="/" element={<Animation content={<App />} />}></Route>
            <Route
              path="/contacts"
              element={<Animation content={<Contacts />} />}
            ></Route>
            <Route
              path="/location"
              element={<Animation content={<Location />} />}
            ></Route>
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}
