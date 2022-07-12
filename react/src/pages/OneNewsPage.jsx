import "../style/main.scss";

import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostService from "../api/PostService";
import { useFetching } from "../hooks/useFetching";
import Loader from "../components/loader/loader";
import Comment from "../components/coments/Comment";
import Button from "../components/button/button";
import CommentForm from "../components/forms/CommentForm";
import { AuthContext } from "../context";

export default function OneNewsPage() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const params = useParams();
  const route = useNavigate();

  const [article, setArticle] = useState([]);
  const [author, setAuthor] = useState([]);
  const [category, setCategory] = useState([]);
  const [comments, setComments] = useState([]);
  const [show, setShow] = useState(false);
  const [newCom, setNewCom] = useState(false);

  const [fetchArticleId, isPostsLoading, articleError] = useFetching(
    async () => {
      const respons = await PostService.getArticleId(params.id);
      const respons1 = await PostService.getComents(params.id);
      setComments(respons1.data);
      setAuthor([respons.data[1]]);
      setCategory([respons.data[2]]);
      setArticle(respons.data[0]);
    }
  );

  const [fetchCom, isPostsLoading1, articleError1] = useFetching(async () => {
    const respons = await PostService.getComents(params.id);
    setComments(respons.data);
  });

  useEffect(() => {
    fetchArticleId();
  }, []);

  useEffect(() => {
    fetchCom();
  }, [newCom]);

  function createMarkup() {
    return { __html: `${article.article}` };
  }
  function deleteArt() {
    const responsDel = async () => await PostService.deleteArticle(params.id);
    responsDel(); 
  

    route(`/news`);
  }

  

  return (
    <>
      <div>
        {isPostsLoading && <Loader />}
        {articleError && (
          <h2 style={{ marginLeft: 20, color: "red" }}>
            Error: {articleError}
          </h2>
        )}

        <h2 className="article_id_title">{article.title}</h2>

        <div className="article_id_img">
          <img src={article.path_aticle_img} alt="Article img" />
        </div>
        <div
          className="article_id_text"
          dangerouslySetInnerHTML={createMarkup()}
        />

        <div className="article_id_footer">
          <div>{category}</div>
          <div>{author}</div>
        </div>

        <h3 className="article_id_title">Comments</h3>
        <div>
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}

          <CommentForm
            setNewCom={setNewCom}
            newCom={newCom}
            show={show}
            setShow={setShow}
            artId={params.id}
          />

          <Button
            className={show ? "disabled" : "button"}
            onClick={() => setShow(true)}
          >
            Add comment
          </Button>
          {isAuth.role == "master" && (
            <div className="admin">
              <Button
              style={{margin: '10px 0', backgroundColor: '#dd4328'}}
                className="button"
                onClick={deleteArt}
              >
                Delete atricle
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
