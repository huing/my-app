import React from "react";
import yellowStyles from "./yellow.module.less";
import greenStyles from "./green.module.css";
import "./green.css";
import "./yellow.less";

const Index = () => {
  return (
    <div>
      <div className="colorGreen">green.css</div>
      <div className={greenStyles.colorGreen}>green.module.css</div>
      <div className="colorYellow">yellow.less</div>
      <div className={yellowStyles.colorYellow}>yellow.module.less</div>
    </div>
  );
};

export default Index;
