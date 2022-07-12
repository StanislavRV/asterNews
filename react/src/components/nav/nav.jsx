import "./nav.scss";
import Logo from "./logo.png";
import React, { useContext, useEffect, useRef, useState } from "react";

import userArow from "../../iconsfont/user-arrow.svg";
import user from "../../iconsfont/user.svg";
import Input_search from "../input/input_serch";
import Modal from "../modal/Modal";
import LoginForm from "../forms/LoginForm";
import Button from "../button/button";
import PostService from "../../api/PostService";
import { useFetching } from "../../hooks/useFetching";
import { AuthContext } from "../../context";
import RegisterForm from "../forms/RegisterForm";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/loader";
import axios from "axios";

export default function Nav() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const router = useNavigate();
  const userMenu = useRef();

  const [show, setShow] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [modal, setMadal] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const LogIn = (data) => {
  

    async function login() {
      const respons = await PostService.getLogin(data);
 

      if (respons.data == "Wronge password" || respons.data == "Not found user " + `${data.email}`) {
        setError(respons.data);
        return error;
      } else {
        setIsLogin(false);
        setMadal(false);
        setIsAuth(respons.data);
        localStorage.setItem("auth", JSON.stringify(respons.data));
      }
    }
    login();
 
  };

  const Register = (data) => {

    async function registerUser() {
      const respons = await PostService.getReg(data);
   

      if (respons.data == "Wronge password" || respons.data == "Not found user " + `${data.email}`) {
        setError(respons.data);
        return error;
      } else {
        setIsLogin(false);
        setMadal(false);
        setIsAuth(respons.data);
        LogIn(data);

      }
    }
    registerUser();  

  };

  function isLoginModal() {
    setMadal(true);
    setIsLogin(true);
  }
  function logOut() {
    setIsAuth(false);
    localStorage.removeItem("auth");
  }

  const closeMenu = (e) => {
    e.stopPropagation();
    setShow(!show);
    if (userMenu.current === e.target) {
      setShow(!show);
    }
  };

 
  return (
    <div className="container">
      <div className="header">
        <div onClick={() => router(`/news/`)} className="header__logo">
          <img src={Logo} alt="Logo" />
          <span>Aster News</span>
        </div>

        <Input_search />

        {isAuth.id ? (
          <div ref={userMenu} className="login_reg_btn">
            <div className="user" onClick={() => setShow(!show)}>
              <div className="user__title">
                <img src={user} alt="team" />
                <span>{isAuth.name}</span>
              </div>

              <ul className={show ? "show" : ""} onClick={() => setShow(!show)}>
                {/* <li>
                  <a href="#">Account</a>
                </li>
                <li>
                  <a href="#">Settings</a>
                </li> */}
                <li>
                  <Button className="login button" onClick={logOut}>
                    Logout
                  </Button>
                </li>
              </ul>

              <div className={show ? "show" : ""}>
                <img src={userArow} alt="team" />
              </div>
            </div>
          </div>
        ) : (
          <div className="login_reg_btn">
            <Button className="login button" onClick={isLoginModal}>
              Login
            </Button>
            <Button className="login button" onClick={() => setMadal(true)}>
              Registration
            </Button>
          </div>
        )}

        <Modal visible={modal} setVisible={setMadal} setIsLogin={setIsLogin}>
          {isLogin ? (
            <>
              {error ? (
                <div
                  style={{
                    marginBottom: "10px",
                    color: "red",
                    fontSize: "14px",
                  }}
                >
                  {error}
                </div>
              ) : (
                <></>
              )}

              <LoginForm LogIn={LogIn} call={useFetching} />

            </>
          ) : (
            <RegisterForm Register={Register} />
          )}
        </Modal>
      </div>
    </div>
  );
}
