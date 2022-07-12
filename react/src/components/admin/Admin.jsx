import "./admin.scss";
import React, { useContext} from "react";
import Button from "../button/button";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";

export default function Admin() {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const routeCreateArticle = useNavigate();
  
  return (
    <>
      {(isAuth.role == "author" || isAuth.role == "master") && (
        <div className="container">
          <div className="author_admin">
            <>
              <div className="author">
                <Button
                  className="button"
                  onClick={() => routeCreateArticle(`/news/article/create`)}
                >
                  Create article
                </Button>
              </div>
              {isAuth.role == "master" && (
                <div className="admin">
                  <Button
                    className="button"
                    onClick={() => routeCreateArticle(`/news/confirm`)}
                  >
                    Confirm pablic
                  </Button>
                </div>
              )}
            </>
          </div>
        </div>
      )}
    </>
  );
}
