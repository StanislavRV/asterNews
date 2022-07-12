
import "./App.scss";

import React, { useState, useEffect } from "react";
import { AuthContext } from "./context";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Nav from "./components/nav/nav";
import Main from "./pages/Main";
import Footer from "./components/footer/footer";
import Swiper from "./components/swiper/Swiper";
import Loader from "./components/loader/loader";
import Admin from "./components/admin/Admin";

function App() {
  const [isAuth, setIsAuth] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      let user = JSON.parse(localStorage.getItem("auth"));
      setIsAuth(user);
    }
    setIsLoading(false);
   
  }, []);

  if (isLoading) {
    return <Loader />;
  }


  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
    
      <div className="app">      
        <Nav />
        <Admin />
        <Main />
        <Footer/>
      </div>
      

    </AuthContext.Provider>
  );
}

export default App;
