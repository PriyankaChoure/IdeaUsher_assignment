import React, { useEffect, useState } from "react";
import styles from "./BlockComponent.module.css";
const BlockComponent = ({ color }) => {
  const [bgColor, setBgColor] = useState("black");
  useEffect(() => {
    setBgColor(color);
    console.log(color);
  }, []);
  const handleClick = () => {
    //alert("");
    setBgColor("changeRed");
  };
  return (
    <div
      className={`${styles.block} ${styles[bgColor]}`}
      onClick={handleClick}
    ></div>
  );
};

export default BlockComponent;
