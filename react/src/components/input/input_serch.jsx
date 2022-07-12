import "./input.scss";

import { ReactComponent as SearchIcon } from "../../iconsfont/search.svg";
import Button from "../button/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Input_search() {
  
  const routerSearch = useNavigate();
  const [search, setSearch] = useState("");

  const searchHendler = (e) => {
    e.preventDefault();      
 
    routerSearch(`/news/search/${search}`);
    setSearch('');
  };

 
  return (
    <form name="seach_form search" >
      <div className="search__body">
        <input
          name="search"
          type="text"
          className="search__input input"
          placeholder="Search for news.."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <Button
          type="submit"
          className="search__button"
          onClick={searchHendler}
        >
          <SearchIcon className="svg" />
        </Button>
      </div>
    </form>
  );
}
