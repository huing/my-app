import React, { Component } from "react";
// import flexDemo from '../assets/flex-demo.png'
import "./flex.less";

class PageCssFlex extends Component {
  render() {
    return (
      <div className="page-css-flex">
        <div className="uikit black fs16">
          <div className="FBH FBAC lightgray">
            <div className="div1 FBH FBAC FBJC gray">@</div>
            <div className="FBV FBJC ml16 FB1">
              <div className="fs16">标题文字</div>
              <div className="fs12">描述文字描述文字描述文字</div>
            </div>

            <div className="div2 green mr16" />
            <div className="div3 green mr16 FBH FBAC">多个文字的按钮</div>
            <div className="div4 green mr16 FBH FBAC FBJC">按钮</div>
          </div>

          <div className="FBH mt16 ml16 mr16 gray">
            <div className="div5 red FBV FBAC FBJC">
              <div className="div51 pink mb16" />
              <div className="div52 pink" />
            </div>
            <div className="div6 pink FB1 FBV pt16 pr16 pl16">
              <div className="div7 FB1 blue" />
              <div className="div8 FBH FBJB FBAC green">
                <div className="gray fs16">图片标题</div>
                <div className="gray fs16">图片分类</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PageCssFlex;
