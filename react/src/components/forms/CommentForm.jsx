import "./form.scss";
import React, { useContext, useEffect, useState } from "react";
import Button from "../button/button";
import PostService from "../../api/PostService";
import moment from "moment";
import { AuthContext } from "../../context";

export default function CommentForm({show, setNewCom, newCom, setShow, artId}) {


  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [comment, setComment] = useState("");
  


  function addComment(e) {
      e.preventDefault();
      
      const newComment = {
      comment: comment,
      user_id: isAuth.id,
      user_name: isAuth.name,
      article_id: artId,
      publish: moment().format("MM DD YY, h:mm:ss a"),
    };

    async function add() {
      const respons = await PostService.sendComment(newComment);
      setNewCom(!newCom);
    }

    add();
    setShow(false);

    setComment("");
  }

  return (
    <form
      className={show ? "form_login form" : "disabled"}
      onSubmit={addComment}
    >
      <label>
        Comment
        <input
        value={comment}
          className="input"
          type="text"
          placeholder="Enter comment"
          onChange={(e) => setComment(e.target.value)}
        />
      </label>
      <Button className="button button_border">Add</Button>
    </form>
  );
}
