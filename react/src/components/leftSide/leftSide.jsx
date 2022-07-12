import "./left.scss";

import React, { useEffect, useState } from "react";
import Button from "../button/button";
import { ReactComponent as IconNavTop } from "../../iconsfont/nav-top.svg";
import { ReactComponent as IconNavWorld } from "../../iconsfont/nav-world.svg";
import { ReactComponent as IconNavBusiness } from "../../iconsfont/nav-business.svg";
import { ReactComponent as IconNavHealth } from "../../iconsfont/nav-health.svg";
import { ReactComponent as IconNavCovid } from "../../iconsfont/nav-covid.svg";
import { ReactComponent as IconNavPlay } from "../../iconsfont/nav-play.svg";
import { ReactComponent as IconNavSports } from "../../iconsfont/nav-sports.svg";
import { ReactComponent as IconNavDisc } from "../../iconsfont/nav-disc.svg";
import { ReactComponent as IconNavNotifi } from "../../iconsfont/nav-notifi.svg";
import { ReactComponent as IconNavSettings } from "../../iconsfont/nav-settings.svg";
import { useNavigate } from "react-router-dom";

export default function LeftSide() {
  
 

  const liItem = [
    {
      id:'1',
      title: "Top Stories",
      icon: <IconNavTop className="icon_nav" />,
    },
    {
      id:'2',
      title: "Around the World",
      icon: <IconNavWorld className="icon_nav" />,
    },
    {
      id:'3',
      title: "Business",
      icon: <IconNavBusiness className="icon_nav" />,
    },
    {
      id:'4',
      title: "Health",
      icon: <IconNavHealth className="icon_nav" />,
    },
    {
      id:'5',
      title: "Covid 19",
      icon: <IconNavCovid className="icon_nav" />,
    },
    {
      id:'6',
      title: "Entertainment",
      icon: <IconNavPlay className="icon_nav" />,
    },
    {
      id:'7',
      title: "Sports",
      icon: <IconNavSports className="icon_nav" />,
    },
    {
      id:'8',
      title: "Discussion",
      icon: <IconNavDisc className="icon_nav" />,
    },
    // {
    //   id:'9',
    //   title: "News Feed Settings",
    //   icon: <IconNavSettings className="icon_nav" />,
    // },
  ];

  
  const [activeLi, setActiveLi] = useState('1');
  const [category, setCategory] = useState('');

  const linkCategory = (id, category) => {
    setActiveLi(id);
    setCategory(category);
  }

  const routerCategory = useNavigate();
  
  useEffect(() => {
    routerCategory(`/news/category/${category}`);
  }, [category]);


  return (
    <div className="page__left-side left-side">
      <div className="left-side__content">
        <div className="left-side__menu menu">
          <nav className="menu__body">
            <ul className="menu__list">
              {liItem.map((item) => (
                <li key={item.id} 
                    id={item.id}
                    className={activeLi == item.id ? 
                                'menu__item  menu__item_active' 
                                : 
                                'menu__item'
                              } 
                    onClick={() => linkCategory(item.id, item.title)}
                >
                <div className="menu__link ">
                  {item.icon}
                  {item.title}                  
                </div>
              </li>               
              ))}
            </ul>           
          </nav>
        </div>
        <div className="left-side__premium premium">
          <h4 className="premium__title _icon-gift icon-title icon-title_white">
            Subscribe to Premium
          </h4>
          <div className="premium__body">
            <div className="premium__price">
              $8<small>/m</small>
            </div>
            <Button className="premium__button button button_dark">
              Upgrade
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
