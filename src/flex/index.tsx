import React from "react";
import yellowStyles from "./yellow.module.less";
import greenStyles from "./green.module.css";
import "./green.css";
import "./yellow.less";
import Flex from "./Flex";

const Index = () => {
  return (
    <div>
      <div className="colorGreen" style={{ transform: "translateY(100px)" }}>
        green.css
      </div>
      <div className={greenStyles.colorGreen}>green.module.css</div>
      <div className="colorYellow">yellow.less</div>
      <div className={yellowStyles.colorYellow}>yellow.module.less</div>
      <Flex />
    </div>
  );
};

export default Index;
