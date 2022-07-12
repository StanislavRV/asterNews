import "./form.scss";
import React, { useContext, useEffect, useState } from "react";
import Input from "../input/Input";
import Button from "../button/button";
import { AuthContext } from "../../context";
import { useForm } from "react-hook-form";


export default function LoginForm({ LogIn, error}) {

  const { isAuth, setIsAuth } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  function loginUser(data) {
  
    LogIn(data);
    
    reset();

  }

  return (
    <form className="form_login form" onSubmit={handleSubmit(loginUser)}>
      <h1 className="form__title">Login</h1>
      <label>
        Email
        <input
          {...register("email", {
            required: "Field is required",
            pattern: {
              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
              message: "Wrong email",
            },
            minLength: {
              value: 8,
              message: "Min 8 characters",
            },
          })}
          className="input"
   
          type="text"
          placeholder="Enter email"
          
  
        />
      </label>
      <label>
        {errors?.email && (
          <div style={{ marginBottom: "10px", color: "red", fontSize: "14px" }}>
            {errors?.email?.message || "Error!"}
          </div>
        )}
        Password
        <input
          {...register("password", {
            required: "Field is required",
            minLength: {
              value: 8,
              message: "Min 8 characters",
            },
          })}
          // value={user.password}
          autoComplete="on"
          className="input"
          type="password"
          placeholder="Enter password"
          
        />
      </label>
      {errors?.password && (
        <div style={{ marginBottom: "10px", color: "red", fontSize: "14px" }}>
          {errors?.password?.message || "Error!"}
        </div>
      )}

      <Button className="button button_border" disabled={!isValid}>
        Login
      </Button>
    </form>
  );
}
