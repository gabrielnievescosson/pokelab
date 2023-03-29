import { Component, useState } from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { BurgerMenuContext } from "../components/context/burgerMenuContext";
import BurgerMenuProvider from "../components/context/BurgerMenuProvider";
import LogInStructure from "../components/logInStructure/LogInStructure";
import { Captures } from "./Captures";
import Details from "./Details";
import Home from "./Home";
import SignUp from "./SignUp.jsx";

const LogIn = () => {
    const [widthBurgerMenu, setWidthBurgerMenu] = useState({ width: `0%` });
    const [widthList, setWidthList] = useState({ width: `100%` });
    const [widthActive, setWidthActive] = useState(false);
    const [connect, setConnect] = useState(false);
    const [globalUser, setGlobalUser] = useState({
      email: '',
      username: '',
      name: '',
      password: '',
    });
    const display = () => {
    
      if (widthActive) {
      setWidthBurgerMenu({ width: `0%` });
      setWidthList({ width: `100%` });
      setWidthActive(false);
    } else {
      setWidthBurgerMenu({ width: `20%` });
      setWidthList({ width: `80%` });
      setWidthActive(true);
    }
  };

  return (
    <BrowserRouter>
      <BurgerMenuContext.Provider
        value={{
          display,
          widthBurgerMenu,
          widthList,
          globalUser,
          setGlobalUser,
        }}
      >
        <Routes>
          <Route path="/logIn" element={<LogInStructure />} />
          <Route path="/signUp/*" element={<SignUp />} />
          <Route path="/home/:language" element={<Home />} />
          <Route path="/captures/:language" element={<Captures />} />
          <Route path="/details/:language/:pokemon" element={<Details />} />
          <Route path="/" element={<Navigate to="/logIn" />} />
        </Routes>
      </BurgerMenuContext.Provider>
    </BrowserRouter>
  );
};

export default LogIn;
