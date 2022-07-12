import "./form.scss";
import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "../button/button";
import { useForm } from "react-hook-form";
import moment from "moment";
import PostService from "../../api/PostService";
import { AuthContext } from "../../context";

import axios from "axios";

export default function CreateArticleForm() {
  const { isAuth, setIsAuth } = useContext(AuthContext);


  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState([]);

  async function allCategorys() {
    const respons = await PostService.getCategorys();
    setCategory([...respons.data]);
  }

  useEffect(() => {
    allCategorys();
  }, []);

  const fileInput = useRef();
  const fileInputArt = useRef();

  function sendArticle(data) {
   

     let newArticle = {
      title: data.title,
      article: data.article,            
      category_id: data.category,
      author_id: isAuth.id,      
      publish: moment().format("MM DD YY, h:mm:ss a"),
      path_title_img:  fileInput.current?.files[0],
      path_aticle_img:  fileInputArt.current?.files[0],
    };

    async function sendArticle(newArticle) {
      
      const respons = await axios.post("http://127.0.0.1:8000/api/articles/create", newArticle, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      })
    
      return respons;
    }   
    sendArticle(newArticle);
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
    <form className="form_login form" onSubmit={handleSubmit(sendArticle)}>
      <h1 className="form__title">Create Article</h1>
      <label>
        Article title
        <input
          {...register("title", {
            required: "Field is required",
          })}
          className="input"
          type="text"
          placeholder="Enter title"
        />
      </label>

      {errors?.title && (
        <div style={{ marginBottom: "10px", color: "red", fontSize: "14px" }}>
          {errors?.title?.message || "Error!"}
        </div>
      )}

      <label>
        Article text
        <textarea
          {...register("article", {
            required: "Field is required",
          })}
          className="input textarea"
          type="text"
          placeholder="Enter text"
        />
      </label>

      {errors?.article && (
        <div style={{ marginBottom: "10px", color: "red", fontSize: "14px" }}>
          {errors?.article?.message || "Error!"}
        </div>
      )}

      <label>
        Category
        <select {...register("category")} className="input" onChange={(e) =>setCategoryId(e.target.value)}>
          {category.map((item) => (
            <option key={item.id} value={item.id}>
              {item.category}
            </option>
          ))}
        </select>
      </label>
      <label>
        Title image
        <input {...register("path_title_img")} className="input" type="file" ref={fileInput} />
      </label>
      <label>
        Article image
        <input {...register("path_aticle_img")} className="input" type="file" ref={fileInputArt}/>
      </label>

      <Button className="button button_border" disabled={!isValid}>
        Create
      </Button>
    </form>
  );
}
