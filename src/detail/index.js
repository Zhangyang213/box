import { Route, Routes } from "react-router-dom";
import Home from "./home";
import AboutUsPages from "./AboutUsPages";
import News from "./News/News";
import TradeNews from "./News/TradeNews";
import CompanyNews from "./News/CompanyNews";
import CaseShow from "./CaseShow";
import CallMe from "./CallME";
import Problem from "./Problem";
import ProductDisplay from "./ProductDisplay/index";
import AFireBox from "./ProductDisplay/AFireBox";
import Dorm from "./ProductDisplay/Dorm";
import Office from "./ProductDisplay/Office";
import Toilet from "./ProductDisplay/toilet";
import { WhatsAppOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import { useState, useEffect } from "react";
// import Index from "../src/detail/index";
import { useNavigate, BrowserRouter, Link } from "react-router-dom";
const Index = () => {
  const [isHoveredA, setIsHoveredA] = useState(false);
  const [isHoveredB, setIsHoveredB] = useState(false);
  const [isHoveredC, setIsHoveredC] = useState(false);
  const [isHoveredD, setIsHoveredD] = useState(false);
  const [isHoveredE, setIsHoveredE] = useState(false);
  const [isHoveredF, setIsHoveredF] = useState(false);
  const [isHoveredG, setIsHoveredG] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <div className="wrapper">
          <div className="header_box">
            <div className="header_left">
              <div>
                <WhatsAppOutlined
                  className="header_icon"
                  style={{ fontSize: "16px" }}
                />
                <span style={{ fontSize: "16px" }}>咨询电话</span>
                <span style={{ fontSize: "28px", fontWeight: "800" }}>
                  18505605055
                </span>
              </div>
            </div>
            <div className="header_right" style={{ fontSize: "14px" }}>
              <a onClick={() => navigate("/home", { replace: true })}>网站首页</a>
              <a style={{ margin: "0 15px" }}>在线留言</a>
              <a>联系我们</a>
            </div>
          </div>
          <div className="headerTitle">
            <div>
              <span style={{ fontSize: "50px", fontWeight: "700" }}>
                品柜集装箱
              </span>
            </div>
            <div className="header_tab">
              <div
                className="tab"
                style={{
                  backgroundColor: isHoveredA ? "#356ac8" : "#ffffff",
                  color: isHoveredA ? "#ffffff" : "#000000",
                }}
                onMouseEnter={() => setIsHoveredA(true)}
                onMouseLeave={() => setIsHoveredA(false)}
                onClick={() => navigate("/home", { replace: true })}
              >
                <span>网站首页</span>
              </div>
              <div
                className="tab"
                style={{
                  backgroundColor: isHoveredB ? "#356ac8" : "#ffffff",
                  color: isHoveredB ? "#ffffff" : "#000000",
                }}
                onMouseEnter={() => setIsHoveredB(true)}
                onMouseLeave={() => setIsHoveredB(false)}
                onClick={() => navigate("/AboutUsPages", { replace: true })}
              >
                <span>关于我们</span>
              </div>
              <div
                className="tab paoduct_tab"
                style={{
                  backgroundColor: isHoveredC ? "#356ac8" : "#ffffff",
                  color: isHoveredC ? "#ffffff" : "#000000",
                }}
                onMouseEnter={() => setIsHoveredC(true)}
                onMouseLeave={() => setIsHoveredC(false)}
              >
                <span
                style={{display:"inline-block",width:"100%",height:"100%"}}
                onClick={() => navigate("/ProductDisplay", { replace: true })}
                >产品展示</span>
                <ul
                  className="paoduct_ul"
                  style={{
                    display: isHoveredC ? "block" : "none",
                    color: "#ffffff",
                    fontSize: "14px",
                    zIndex: 9,
                  }}
                >
                  <li
                    onClick={() => {
                      navigate("/ProductDisplay/AFireBox", { replace: true });
                    }}
                  >
                    A级防火箱
                  </li>
                  <li
                    onClick={() =>
                      navigate("/ProductDisplay/Toilet", { replace: true })
                    }
                  >
                    集装箱厕所
                  </li>
                  <li
                    onClick={() =>
                      navigate("/ProductDisplay/Office", { replace: true })
                    }
                  >
                    集装箱办公室
                  </li>
                  <li
                    onClick={() =>
                      navigate("/ProductDisplay/Dorm", { replace: true })
                    }
                  >
                    集装箱宿舍
                  </li>
                </ul>
              </div>
              <div
                className="tab news_tab"
                style={{
                  backgroundColor: isHoveredD ? "#356ac8" : "#ffffff",
                  color: isHoveredD ? "#ffffff" : "#000000",
                }}
                onMouseEnter={() => setIsHoveredD(true)}
                onMouseLeave={() => setIsHoveredD(false)}
              >
                <span style={{display:"inline-block",width:"100%",height:"100%"}}
                onClick={() => navigate("/News", { replace: true })}
                >新闻中心</span>
                <ul
                  className="paoduct_ul"
                  style={{
                    display: isHoveredD ? "block" : "none",
                    color: "#ffffff",
                    fontSize: "14px",
                    zIndex: 9,
                  }}
                >
                  <li onClick={() => navigate("/News/CompanyNews", { replace: true })}>公司新闻</li>
                  <li onClick={() => navigate("/News/TradeNews", { replace: true })}>行业动态</li>
                </ul>
              </div>
              <div
                className="tab"
                style={{
                  backgroundColor: isHoveredE ? "#356ac8" : "#ffffff",
                  color: isHoveredE ? "#ffffff" : "#000000",
                }}
                onMouseEnter={() => setIsHoveredE(true)}
                onMouseLeave={() => setIsHoveredE(false)}
                onClick={() => navigate("/CaseShow", { replace: true })}
              >
                <span>案例展示</span>
              </div>
              <div
                className="tab"
                style={{
                  backgroundColor: isHoveredF ? "#356ac8" : "#ffffff",
                  color: isHoveredF ? "#ffffff" : "#000000",
                }}
                onMouseEnter={() => setIsHoveredF(true)}
                onMouseLeave={() => setIsHoveredF(false)}
                onClick={() => navigate("/Problem", { replace: true })}
              >
                <span>常见问题</span>
              </div>
              <div
                className="tab"
                style={{
                  backgroundColor: isHoveredG ? "#356ac8" : "#ffffff",
                  color: isHoveredG ? "#ffffff" : "#000000",
                }}
                onMouseEnter={() => setIsHoveredG(true)}
                onMouseLeave={() => setIsHoveredG(false)}
                onClick={() => navigate("/CallME", { replace: true })}
              >
                <span>联系我们</span>
              </div>
            </div>
          </div>
        </div>
        <Carousel autoplay>
          <div className="img1 carousel">
            {/* <img alt="" src="../src/img/img1.jpg"/> */}
          </div>
          <div className="img2 carousel">
            {/* <img alt="" src="../src/img/img2.jpg"/> */}
          </div>
          <div className="img3 carousel">
            {/* <img alt="" src="../src/img/img3.jpg"/> */}
          </div>
        </Carousel>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/AboutUsPages" element={<AboutUsPages />} />
          <Route exact path="/ProductDisplay" element={<ProductDisplay />} />
          <Route exact path="/ProductDisplay/AFireBox" element={<AFireBox />} />
          <Route exact path="/ProductDisplay/Dorm" element={<Dorm />} />
          <Route exact path="/ProductDisplay/Office" element={<Office />} />
          <Route exact path="/ProductDisplay/Toilet" element={<Toilet />} />
          <Route exact path="/News" element={<News />} />
          <Route exact path="/News/TradeNews" element={<TradeNews />} />
          <Route exact path="/News/CompanyNews" element={<CompanyNews />} />
          <Route exact path="/CaseShow" element={<CaseShow />} />
          <Route exact path="/Problem" element={<Problem />} />
          <Route exact path="/CallME" element={<CallMe />} />

          {/* <Route path="/index/*" element={<Home />} /> */}
          {/*/!*全匹配，作为404页面使用*!/*/}
          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
      </div>
    </>
  );
};
export default Index;
