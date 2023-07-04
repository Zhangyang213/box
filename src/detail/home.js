import { useState } from "react";
const Home = () => {
  const [isHoveredH, setIsHoveredH] = useState(false);
  const [isHoveredI, setIsHoveredI] = useState(false);
  const [isHoveredJ, setIsHoveredJ] = useState(false);
  const [isHoveredK, setIsHoveredK] = useState(false);
  const [isHoveredL, setIsHoveredL] = useState(false);
  const [isHoveredM, setIsHoveredM] = useState(false);
  const [isHoveredN, setIsHoveredN] = useState(false);
  const [isHoveredO, setIsHoveredO] = useState(false);
  const [isHoveredP, setIsHoveredP] = useState(false);
  const [isHoveredQ, setIsHoveredQ] = useState(false);
  return (
    <>
      <div className="main1">
        <div className="title clear">
          <span style={{ marginTop: "20PX" }}>产品分类</span>
          <span className="title-1">PRODUCT SHOW</span>
        </div>
        <div className="wrapper" style={{ position: "relative" }}>
          <div className="left1">
            <div className="title-2 clear">
              <span></span>
            </div>
            <ul className="subnav1 clear">
              <div className="title-3 clear">
                <span>产品分类</span>
              </div>
              <li
                onMouseEnter={() => setIsHoveredH(true)}
                onMouseLeave={() => setIsHoveredH(false)}
              >
                <a
                  style={{
                    backgroundColor: isHoveredH ? "#356ac8" : "#ededed",
                    color: isHoveredH ? "#ffffff" : "#3d3d3d",
                  }}
                  title="A级防火箱"
                >
                  A级防火箱
                </a>
              </li>
              <li
                onMouseEnter={() => setIsHoveredI(true)}
                onMouseLeave={() => setIsHoveredI(false)}
              >
                <a
                  style={{
                    backgroundColor: isHoveredI ? "#356ac8" : "#ededed",
                    color: isHoveredI ? "#ffffff" : "#3d3d3d",
                  }}
                  title="A级防火箱"
                >
                  集装箱厕所
                </a>
              </li>
              <li
                onMouseEnter={() => setIsHoveredJ(true)}
                onMouseLeave={() => setIsHoveredJ(false)}
              >
                <a
                  style={{
                    backgroundColor: isHoveredJ ? "#356ac8" : "#ededed",
                    color: isHoveredJ ? "#ffffff" : "#3d3d3d",
                  }}
                  title="A级防火箱"
                >
                  集装箱办公室
                </a>
              </li>
              <li
                onMouseEnter={() => setIsHoveredK(true)}
                onMouseLeave={() => setIsHoveredK(false)}
              >
                <a
                  style={{
                    backgroundColor: isHoveredK ? "#356ac8" : "#ededed",
                    color: isHoveredK ? "#ffffff" : "#3d3d3d",
                  }}
                  title="A级防火箱"
                >
                  集装箱宿舍
                </a>
              </li>
            </ul>
          </div>
          <div className="product">
            <div className="img_Big_Box" style={{ marginBottom: "35px" }}>
              <div className="imgBox">
                <div className="imgList">
                  <div className="img_list">
                    <div className="img_1"></div>
                    <div
                      style={{
                        backgroundColor: isHoveredL ? "#2f68ca" : "#ffffff",
                        paddingBottom: "10px",
                        paddingTop: "10px",
                      }}
                    >
                      <div
                        className="img_title"
                        style={{
                          color: isHoveredL ? "#ffffff" : "hsl(0, 0%, 56%)",
                        }}
                      >
                        集装箱厕所
                      </div>
                      <div
                        className="img_btn_box"
                        onMouseEnter={() => setIsHoveredL(true)}
                        onMouseLeave={() => setIsHoveredL(false)}
                      >
                        <div
                          className="img_btn"
                          style={{
                            backgroundColor: isHoveredL ? "#ffffff" : "#d5d5d5",
                            color: isHoveredL ? "#023085" : "#7c7c7c",
                          }}
                        >
                          查看详情
                        </div>
                        <div className="img_btn img_btn_right">咨询我们</div>
                      </div>
                    </div>
                  </div>
                  <div className="img_list">
                    <div className="img_2"></div>
                    <div
                      style={{
                        backgroundColor: isHoveredM ? "#2f68ca" : "#ffffff",
                        paddingBottom: "10px",
                        paddingTop: "10px",
                      }}
                    >
                      <div
                        className="img_title"
                        style={{
                          color: isHoveredM ? "#ffffff" : "hsl(0, 0%, 56%)",
                        }}
                      >
                        集装箱宿舍
                      </div>
                      <div
                        className="img_btn_box"
                        onMouseEnter={() => setIsHoveredM(true)}
                        onMouseLeave={() => setIsHoveredM(false)}
                      >
                        <div
                          className="img_btn"
                          style={{
                            backgroundColor: isHoveredM ? "#ffffff" : "#d5d5d5",
                            color: isHoveredM ? "#023085" : "#7c7c7c",
                          }}
                        >
                          查看详情
                        </div>
                        <div className="img_btn img_btn_right">咨询我们</div>
                      </div>
                    </div>
                  </div>
                  <div className="img_list">
                    <div className="img_3"></div>
                    <div
                      style={{
                        backgroundColor: isHoveredN ? "#2f68ca" : "#ffffff",
                        paddingBottom: "10px",
                        paddingTop: "10px",
                      }}
                    >
                      <div
                        className="img_title"
                        style={{
                          color: isHoveredN ? "#ffffff" : "hsl(0, 0%, 56%)",
                        }}
                      >
                        品柜集装箱
                      </div>
                      <div
                        className="img_btn_box"
                        onMouseEnter={() => setIsHoveredN(true)}
                        onMouseLeave={() => setIsHoveredN(false)}
                      >
                        <div
                          className="img_btn"
                          style={{
                            backgroundColor: isHoveredN ? "#ffffff" : "#d5d5d5",
                            color: isHoveredN ? "#023085" : "#7c7c7c",
                          }}
                        >
                          查看详情
                        </div>
                        <div className="img_btn img_btn_right">咨询我们</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="imgList">
                  <div className="img_list">
                    <div className="img_1"></div>
                    <div
                      style={{
                        backgroundColor: isHoveredL ? "#2f68ca" : "#ffffff",
                        paddingBottom: "10px",
                        paddingTop: "10px",
                      }}
                    >
                      <div
                        className="img_title"
                        style={{
                          color: isHoveredL ? "#ffffff" : "hsl(0, 0%, 56%)",
                        }}
                      >
                        集装箱厕所
                      </div>
                      <div
                        className="img_btn_box"
                        onMouseEnter={() => setIsHoveredL(true)}
                        onMouseLeave={() => setIsHoveredL(false)}
                      >
                        <div
                          className="img_btn"
                          style={{
                            backgroundColor: isHoveredL ? "#ffffff" : "#d5d5d5",
                            color: isHoveredL ? "#023085" : "#7c7c7c",
                          }}
                        >
                          查看详情
                        </div>
                        <div className="img_btn img_btn_right">咨询我们</div>
                      </div>
                    </div>
                  </div>
                  <div className="img_list">
                    <div className="img_2"></div>
                    <div
                      style={{
                        backgroundColor: isHoveredM ? "#2f68ca" : "#ffffff",
                        paddingBottom: "10px",
                        paddingTop: "10px",
                      }}
                    >
                      <div
                        className="img_title"
                        style={{
                          color: isHoveredM ? "#ffffff" : "hsl(0, 0%, 56%)",
                        }}
                      >
                        集装箱宿舍
                      </div>
                      <div
                        className="img_btn_box"
                        onMouseEnter={() => setIsHoveredM(true)}
                        onMouseLeave={() => setIsHoveredM(false)}
                      >
                        <div
                          className="img_btn"
                          style={{
                            backgroundColor: isHoveredM ? "#ffffff" : "#d5d5d5",
                            color: isHoveredM ? "#023085" : "#7c7c7c",
                          }}
                        >
                          查看详情
                        </div>
                        <div className="img_btn img_btn_right">咨询我们</div>
                      </div>
                    </div>
                  </div>
                  <div className="img_list">
                    <div className="img_3"></div>
                    <div
                      style={{
                        backgroundColor: isHoveredN ? "#2f68ca" : "#ffffff",
                        paddingBottom: "10px",
                        paddingTop: "10px",
                      }}
                    >
                      <div
                        className="img_title"
                        style={{
                          color: isHoveredN ? "#ffffff" : "hsl(0, 0%, 56%)",
                        }}
                      >
                        品柜集装箱
                      </div>
                      <div
                        className="img_btn_box"
                        onMouseEnter={() => setIsHoveredN(true)}
                        onMouseLeave={() => setIsHoveredN(false)}
                      >
                        <div
                          className="img_btn"
                          style={{
                            backgroundColor: isHoveredN ? "#ffffff" : "#d5d5d5",
                            color: isHoveredN ? "#023085" : "#7c7c7c",
                          }}
                        >
                          查看详情
                        </div>
                        <div className="img_btn img_btn_right">咨询我们</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="img_Big_Box">
              <div className="imgBox">
                <div className="imgList">
                  <div className="img_list">
                    <div className="img_4"></div>
                    <div
                      style={{
                        backgroundColor: isHoveredO ? "#2f68ca" : "#ffffff",
                        paddingBottom: "10px",
                        paddingTop: "10px",
                      }}
                    >
                      <div
                        className="img_title"
                        style={{
                          color: isHoveredO ? "#ffffff" : "hsl(0, 0%, 56%)",
                        }}
                      >
                        集装箱宿舍
                      </div>
                      <div
                        className="img_btn_box"
                        onMouseEnter={() => setIsHoveredO(true)}
                        onMouseLeave={() => setIsHoveredO(false)}
                      >
                        <div
                          className="img_btn"
                          style={{
                            backgroundColor: isHoveredO ? "#ffffff" : "#d5d5d5",
                            color: isHoveredO ? "#023085" : "#7c7c7c",
                          }}
                        >
                          查看详情
                        </div>
                        <div className="img_btn img_btn_right">咨询我们</div>
                      </div>
                    </div>
                  </div>
                  <div className="img_list">
                    <div className="img_5"></div>
                    <div
                      style={{
                        backgroundColor: isHoveredP ? "#2f68ca" : "#ffffff",
                        paddingBottom: "10px",
                        paddingTop: "10px",
                      }}
                    >
                      <div
                        className="img_title"
                        style={{
                          color: isHoveredP ? "#ffffff" : "hsl(0, 0%, 56%)",
                        }}
                      >
                        品柜集装箱
                      </div>
                      <div
                        className="img_btn_box"
                        onMouseEnter={() => setIsHoveredP(true)}
                        onMouseLeave={() => setIsHoveredP(false)}
                      >
                        <div
                          className="img_btn"
                          style={{
                            backgroundColor: isHoveredP ? "#ffffff" : "#d5d5d5",
                            color: isHoveredP ? "#023085" : "#7c7c7c",
                          }}
                        >
                          查看详情
                        </div>
                        <div className="img_btn img_btn_right">咨询我们</div>
                      </div>
                    </div>
                  </div>
                  <div className="img_list">
                    <div className="img_6"></div>
                    <div
                      style={{
                        backgroundColor: isHoveredQ ? "#2f68ca" : "#ffffff",
                        paddingBottom: "10px",
                        paddingTop: "10px",
                      }}
                    >
                      <div
                        className="img_title"
                        style={{
                          color: isHoveredQ ? "#ffffff" : "hsl(0, 0%, 56%)",
                        }}
                      >
                        集装箱宿舍
                      </div>
                      <div
                        className="img_btn_box"
                        onMouseEnter={() => setIsHoveredQ(true)}
                        onMouseLeave={() => setIsHoveredQ(false)}
                      >
                        <div
                          className="img_btn"
                          style={{
                            backgroundColor: isHoveredQ ? "#ffffff" : "#d5d5d5",
                            color: isHoveredQ ? "#023085" : "#7c7c7c",
                          }}
                        >
                          查看详情
                        </div>
                        <div className="img_btn img_btn_right">咨询我们</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="imgList">
                  <div className="img_list">
                    <div className="img_4"></div>
                    <div
                      style={{
                        backgroundColor: isHoveredO ? "#2f68ca" : "#ffffff",
                        paddingBottom: "10px",
                        paddingTop: "10px",
                      }}
                    >
                      <div
                        className="img_title"
                        style={{
                          color: isHoveredO ? "#ffffff" : "hsl(0, 0%, 56%)",
                        }}
                      >
                        集装箱宿舍
                      </div>
                      <div
                        className="img_btn_box"
                        onMouseEnter={() => setIsHoveredO(true)}
                        onMouseLeave={() => setIsHoveredO(false)}
                      >
                        <div
                          className="img_btn"
                          style={{
                            backgroundColor: isHoveredO ? "#ffffff" : "#d5d5d5",
                            color: isHoveredO ? "#023085" : "#7c7c7c",
                          }}
                        >
                          查看详情
                        </div>
                        <div className="img_btn img_btn_right">咨询我们</div>
                      </div>
                    </div>
                  </div>
                  <div className="img_list">
                    <div className="img_5"></div>
                    <div
                      style={{
                        backgroundColor: isHoveredP ? "#2f68ca" : "#ffffff",
                        paddingBottom: "10px",
                        paddingTop: "10px",
                      }}
                    >
                      <div
                        className="img_title"
                        style={{
                          color: isHoveredP ? "#ffffff" : "hsl(0, 0%, 56%)",
                        }}
                      >
                        品柜集装箱
                      </div>
                      <div
                        className="img_btn_box"
                        onMouseEnter={() => setIsHoveredP(true)}
                        onMouseLeave={() => setIsHoveredP(false)}
                      >
                        <div
                          className="img_btn"
                          style={{
                            backgroundColor: isHoveredP ? "#ffffff" : "#d5d5d5",
                            color: isHoveredP ? "#023085" : "#7c7c7c",
                          }}
                        >
                          查看详情
                        </div>
                        <div className="img_btn img_btn_right">咨询我们</div>
                      </div>
                    </div>
                  </div>
                  <div className="img_list">
                    <div className="img_6"></div>
                    <div
                      style={{
                        backgroundColor: isHoveredQ ? "#2f68ca" : "#ffffff",
                        paddingBottom: "10px",
                        paddingTop: "10px",
                      }}
                    >
                      <div
                        className="img_title"
                        style={{
                          color: isHoveredQ ? "#ffffff" : "hsl(0, 0%, 56%)",
                        }}
                      >
                        集装箱宿舍
                      </div>
                      <div
                        className="img_btn_box"
                        onMouseEnter={() => setIsHoveredQ(true)}
                        onMouseLeave={() => setIsHoveredQ(false)}
                      >
                        <div
                          className="img_btn"
                          style={{
                            backgroundColor: isHoveredQ ? "#ffffff" : "#d5d5d5",
                            color: isHoveredQ ? "#023085" : "#7c7c7c",
                          }}
                        >
                          查看详情
                        </div>
                        <div className="img_btn img_btn_right">咨询我们</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bar2 w-1">
        <div className="w"></div>
      </div>

      <div className="youshi w-1">
        <div className="w" style={{ position: "relative" }}>
          <div className="wen1">选择我们四大理由</div>
          <div className="wen2">《安全 经济 省心 环保》</div>
          <div className="wen3">专注　　　 　 　专业　　　　 &nbsp;　专心</div>
          <div className="wen4">
            <strong style={{ color: "#ff9100" }}>专注—</strong>
            快速打造一体化集装箱解决方案
          </div>
          <div className="wen5">
            品柜集装箱始终坚持"团结、务实、创新、高效"的理念，严把
            <br />
            质量关口，全方位的服务跟踪，坚持做出高品质产品。我们
            <br />
            以质量为生命、时间为信誉、价格为竞争力的经营信念立足
            <br />
            中原。
          </div>
          <div className="wen6">专注　　 　 　　专业　　　　 　专心</div>
          <div className="wen7">
            <strong style={{ color: "#ff9100" }}>质量—</strong>严格质量管理体系
            保证集装箱质量
          </div>
          <div className="wen8">
            品柜集装箱材料选用A级防火岩棉材料，从材料供应商的选择、
            <br />
            集装箱的生产、集装箱的调运及最后集装箱的安装都经过多重检测、层
            <br />
            层把控集装箱质量，保证每个箱子的安全和高质量。
          </div>
          <div className="wen9">咨询热线：18505605055</div>
          <div className="wen10">专注　　 　 　 　专业　　 　　 　专心</div>
          <div className="wen11">
            <strong style={{ color: "#ff9100" }}>专业—</strong>
            质量靠技术，效益靠口碑
          </div>
          <div className="wen12">
            公司服务于各大小企业，提供集装箱设计生产制作安装，推广营
            <br />
            销于一体的专业服务减少集装箱空置期，实现资源合理利用。公司以"专注
            <br />
            产品，用心服务"为核心价值，希望通过我们的专业水平和不懈努力，为各
            <br />
            企业客户生产建设经营提供服务。
          </div>
          <div className="wen13">专注　　 　 　 　专业　　 　　 　专心</div>
          <div className="wen14">
            <strong style={{ color: "#ff9100" }}>服务—</strong>
            完善的售后服务体系
          </div>
          <div className="wen15">
            公司不仅仅提供专业的调运安装服务，同时还建立了完善的售
            <br />
            后服务体系，帮助客户解决使用中遇到的问题，以及解决后期集装箱的。
            <br />
            回收问题我们相信，通过我们的不断努力和追求，一定能够实现与客户
            <br />
            企业的互利共赢！
          </div>
        </div>
      </div>
      <div className="title clear">
        <div className="titleFont">可租/可售/每间房子200元</div>
      </div>

      <div className="main2 w-1">
        <div className="w clear">
          <div className="title-4 clear">
            <span>
              <strong style={{ color: "#277bce" }}>公司</strong>简介
            </span>
            <span className="title_1">《免费测量 免费设计 免费安装》</span>
          </div>
        </div>

        <div className="about clear">
          <div className="w">
            <p>
              <span>合肥品柜集装箱有限公司</span>
              合肥品柜集装箱有限公司是一家专业生产、设计、制作、安装、销售、租赁、住人集装箱住人集装箱的企业。公司秉承“质量为先、信誉为重、管理为本、服务为诚”的宗旨，以先进的企业管理制度和最新的国内外住人集装箱生产技术，为客户提供最优质的产品和服务！…
              <a
                title="more"
                className="more"
                href="/aspcms/about/about-19.html"
              ></a>
            </p>
          </div>
        </div>

        <div className="bar4">
          <div className="w">
            <div className="img_Big_Box">
              <div className="imgBox">
                <div
                  className="imgList"
                  style={{ height: "221px", alignItems: "center" }}
                >
                  <div
                    className="img_list"
                    style={{
                      width: "225px",
                      height: "160px",
                      border: "5px solid #fff",
                    }}
                  >
                    <div
                      className="img_8"
                      style={{ width: "225px", height: "160px" }}
                    ></div>
                  </div>
                  <div
                    className="img_list"
                    style={{
                      width: "225px",
                      height: "160px",
                      border: "5px solid #fff",
                    }}
                  >
                    <div
                      className="img_9"
                      style={{ width: "225px", height: "160px" }}
                    ></div>
                  </div>
                  <div
                    className="img_list"
                    style={{
                      width: "225px",
                      height: "160px",
                      border: "5px solid #fff",
                    }}
                  >
                    <div
                      className="img_10"
                      style={{ width: "225px", height: "160px" }}
                    ></div>
                  </div>
                  <div
                    className="img_list"
                    style={{
                      width: "225px",
                      height: "160px",
                      border: "5px solid #fff",
                    }}
                  >
                    <div
                      className="img_11"
                      style={{ width: "225px", height: "160px" }}
                    ></div>
                  </div>
                </div>
                <div
                  className="imgList"
                  style={{ height: "221px", alignItems: "center" }}
                >
                  <div
                    className="img_list"
                    style={{
                      width: "225px",
                      height: "160px",
                      border: "5px solid #fff",
                    }}
                  >
                    <div
                      className="img_8"
                      style={{ width: "225px", height: "160px" }}
                    ></div>
                  </div>
                  <div
                    className="img_list"
                    style={{
                      width: "225px",
                      height: "160px",
                      border: "5px solid #fff",
                    }}
                  >
                    <div
                      className="img_9"
                      style={{ width: "225px", height: "160px" }}
                    ></div>
                  </div>
                  <div
                    className="img_list"
                    style={{
                      width: "225px",
                      height: "160px",
                      border: "5px solid #fff",
                    }}
                  >
                    <div
                      className="img_10"
                      style={{ width: "225px", height: "160px" }}
                    ></div>
                  </div>
                  <div
                    className="img_list"
                    style={{
                      width: "225px",
                      height: "160px",
                      border: "5px solid #fff",
                    }}
                  >
                    <div
                      className="img_11"
                      style={{ width: "225px", height: "160px" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main3 w-1">
        <div className="w clear">
          <div className="title-4 clear">
            <span>
              <strong style={{ color: "#277bce" }}>新闻</strong>中心
            </span>
            <span className="title-4-1"></span>
          </div>
          <ul className="ul-news1 clear">
            <li className="li-1">
              <div className="fl">
                74
                <br />
                <strong className="titleStrong">10-25</strong>
              </div>
              <div className="fr">
                <a
                  title="热烈祝贺合肥品柜集装箱有限公司网站上线！"
                  href="/aspcms/news/2018-10-25/222.html"
                >
                  热烈祝贺合肥品柜集装箱有限公司网站上线！
                </a>
                <br />
                <a
                  title="热烈祝贺合肥品柜集装箱有限公司网站上线！"
                  href="/aspcms/news/2018-10-25/222.html"
                >
                  <span>
                    热烈祝贺合肥品柜集装箱有限公司网站上线！品柜集装箱有限是一家专业的南京集装箱厂，公司集南京集装箱生产
                  </span>
                </a>
              </div>
            </li>
            <li className="li-1">
              <div className="fl">
                110
                <br />
                <strong className="titleStrong">10-25</strong>
              </div>
              <div className="fr">
                <a
                  title="集装箱活动房相对于普通建筑优势："
                  href="/aspcms/news/2018-10-25/221.html"
                >
                  集装箱活动房相对于普通建筑优势：
                </a>
                <br />
                <a
                  title="集装箱活动房相对于普通建筑优势："
                  href="/aspcms/news/2018-10-25/221.html"
                >
                  <span>
                    1、坚固耐用、移动方便、保暖性能好、对地面要求低　　2、可随意摆放，弥补了彩钢房和砖结构房不能移动的
                  </span>
                </a>
              </div>
            </li>
            <li className="li-1">
              <div className="fl">
                72
                <br />
                <strong className="titleStrong">10-25</strong>
              </div>
              <div className="fr">
                <a
                  title="选择集装箱活动房性价比就是高"
                  href="/aspcms/news/2018-10-25/220.html"
                >
                  选择集装箱活动房性价比就是高
                </a>
                <br />
                <a
                  title="选择集装箱活动房性价比就是高"
                  href="/aspcms/news/2018-10-25/220.html"
                >
                  <span>
                    如今，建筑业的飞速发展带动了临时住房的发展，工地上的集装箱活动房房屋，雅致型活动板房等等。由于市场的
                  </span>
                </a>
              </div>
            </li>
            <li className="li-1">
              <div className="fl">
                70
                <br />
                <strong className="titleStrong">10-25</strong>
              </div>
              <div className="fr">
                <a
                  title="住人集装箱的抗震性为什么比活动板房好？"
                  href="/aspcms/news/2018-10-25/219.html"
                >
                  住人集装箱的抗震性为什么比活动板房好？
                </a>
                <br />
                <a
                  title="住人集装箱的抗震性为什么比活动板房好？"
                  href="/aspcms/news/2018-10-25/219.html"
                >
                  <span>
                    住人集装箱的抗震性为什么比活动板房要好得多呢？以前我们很少去关注这个问题，总觉得地震离我们很远，但是
                  </span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="main4 w-1">
	<div className="w clear">
        <ul className="ul-news2 clear">
        	<div style={{paddingLeft:"220px", paddingTop:"25px"}}>
			
                <li><a title="如何才能给这些工人们提供更好的居住环境呢？" className="spe" href="/aspcms/news/2017-5-16/139.html">如何才能给这些工人们提供更好的居住环境呢？</a>
                    <a title="如何才能给这些工人们提供更好的居住环境呢？" href="/aspcms/news/2017-5-16/139.html">住人集装箱是现在普遍使用的解决方法，并且随着制作搭建技术的不</a>
                </li>
			
                <li><a title="集装箱式活动房可以使用多长时间？" className="spe" href="/aspcms/news/2017-5-16/138.html">集装箱式活动房可以使用多长时间？</a>
                    <a title="集装箱式活动房可以使用多长时间？" href="/aspcms/news/2017-5-16/138.html">正宇集装箱在质量上层层把关，集装箱式活动房可以使用10-20</a>
                </li>
			
                <li><a title="活动房的安装及注意事项：" className="spe" href="/aspcms/news/2017-5-16/137.html">活动房的安装及注意事项：</a>
                    <a title="活动房的安装及注意事项：" href="/aspcms/news/2017-5-16/137.html">彩钢夹芯板板型的选用除了考虑装饰效果外，还应考虑其抗风变形能</a>
                </li>
			
                <li><a title="住人集装箱的优点有哪些？" className="spe" href="/aspcms/news/2017-5-16/136.html">住人集装箱的优点有哪些？</a>
                    <a title="住人集装箱的优点有哪些？" href="/aspcms/news/2017-5-16/136.html">集装箱房屋在改造成能够居住人的时候，它就拥有了这些优点：坚固</a>
                </li>
			
                <li><a title="集装箱活动房还可做办公室？" className="spe" href="/aspcms/news/2017-5-16/135.html">集装箱活动房还可做办公室？</a>
                    <a title="集装箱活动房还可做办公室？" href="/aspcms/news/2017-5-16/135.html">&nbsp;集装箱活动房可以当做住房，那你有没有听过集装箱活</a>
                </li>
			
                <li><a title="住人集装箱如何预防火灾安全隐患？" className="spe" href="/aspcms/news/2017-5-16/120.html">住人集装箱如何预防火灾安全隐患？</a>
                    <a title="住人集装箱如何预防火灾安全隐患？" href="/aspcms/news/2017-5-16/120.html">要预防火灾，就要从以下几方面做起：1.认真落实消防安全责任制</a>
                </li>
			
            </div>
        </ul>
        <div className="friend"><span>友情链接：</span><a href="http://2baidu.net/" target="_blank">南京百度公司</a>  </div>
    </div>
</div>
    </>
  );
};
export default Home;
