import React from "react";
import classes from "./Modal.module.css";


export default function Modal({children, visible, setVisible, setIsLogin}) {
 
  const rootClasses = [classes.myModal]

  if(visible) {
    rootClasses.push(classes.active)
  }

  function visibleLogin(params) {
    setVisible(false);
    setIsLogin(false);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={visibleLogin}>
        <div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
            {children}
        </div>
    </div>
  );
}
