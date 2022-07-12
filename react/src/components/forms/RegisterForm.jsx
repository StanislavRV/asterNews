import "./form.scss";
import React, { useEffect, useState } from "react";
import Input from "../input/Input";
import Button from "../button/button";
import { useForm } from "react-hook-form";
import PostService from "../../api/PostService";


export default function RegisterForm({Register}) {
  
  function RegisterUser(data) {

    Register(data);
    reset();
  
  }


  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({ mode: "onBlur" });

  return (
    <form className="form_login form" onSubmit={handleSubmit(RegisterUser)}>
      <h1 className="form__title">Registration</h1>
      <label>
        Name
        <input 
           {...register("name", {
            required: "Field is required",           
            minLength: {
              value: 3,
              message: "Min 3 characters",
            },
          })}
          className="input"
          type="text"
          placeholder="Enter name"
        />
      </label>
      {errors?.name && (
        <div style={{ marginBottom: "10px", color: "red", fontSize: "14px" }}>
          {errors?.name?.message || "Error!"}
        </div>
      )}
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
          type="email"
          placeholder="Enter email"
        />
      </label>
      {errors?.email && (
        <div style={{ marginBottom: "10px", color: "red", fontSize: "14px" }}>
          {errors?.email?.message || "Error!"}
        </div>
      )}
      <label>
        Password
        <input          
           {...register("password", {
            required: "Field is required",
            minLength: {
              value: 8,
              message: "Min 8 characters",
            },
          })}
          className="input"
          type="password"
          placeholder="Enter password"
          autoComplete="on"
        />
      </label>
      {errors?.password && (
        <div style={{ marginBottom: "10px", color: "red", fontSize: "14px" }}>
          {errors?.password?.message || "Error!"}
        </div>
      )}
      <label>
        Confirm password
        <input          
           {...register("confirm_password", {
            required: "Field is required",
            minLength: {
              value: 8,
              message: "Min 8 characters",
            },
          })}
          autoComplete="on"
          className="input"
          type="password"
          placeholder="Confirm password"
        
        />
      </label>
      {errors?.confirm_password && (
        <div style={{ marginBottom: "10px", color: "red", fontSize: "14px" }}>
          {errors?.confirm_password?.message || "Error!"}
        </div>
      )}
      <Button className="button button_border" disabled={!isValid}>
        Registration
      </Button>
    </form>
  );
}
