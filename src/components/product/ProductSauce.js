import React, { useState } from "react";
import styles from "./product.module.scss";
import ProductDetailNavigator from "./ProductDetailNavigator";
//import sauceImage1 from "../../static/images/img-p-sauce3-1.png";
import sauceImage1 from "../../static/images/img-p-sauce-3-2.jpg";
import sauceSectionTextBG from "../../static/svg/sauce-section-text-bg.svg";
import iconKatsu from "../../static/images/icon-sauce-katsu.png";
import iconCitron from "../../static/images/icon-sauce-citron.png";
import iconSesame from "../../static/images/icon-sauce-sesame.png";
import iconSteak from "../../static/svg/steak.svg";
import iconSesameSecond from "../../static/svg/sesame.svg";
import iconTangerine from "../../static/svg/tangerine.svg";
import iconRice from "../../static/svg/rice.svg";
import sauceTop51Image from "../../static/images/sauce-top4-2.png";
import sauceTop52Image from "../../static/images/sauce-top4-4.png";
import sauceTop53Image from "../../static/images/sauce-top4-1.png";
import sauceTop54Image from "../../static/images/sauce-top4-3.png";
//import sauceTop55Image from "../../static/images/sauce-top5-5.jpg";
import curryImage from "../../static/images/img-newari-curry.png";
import { Link } from "react-router-dom";

function ProductSauce({ content }) {
  const [clickedSauce, setClickedSauce] = useState("citron");
  const sauceImageData = {
    "spicy-cream": {
      image: sauceTop51Image,
      link: "/products/homemade/sauce/spicy-creem",
    },
    "spring-onion": {
      image: sauceTop52Image,
      link: "/products/homemade/sauce/green-onion",
    },
    tonkatsu: {
      image: sauceTop51Image,
      link: "/products/homemade/sauce/donkatsu",
    },
    sesame: {
      image: sauceTop52Image,
      link: "/products/homemade/sauce/sesame",
    },
    citron: {
      image: sauceTop53Image,
      link: "/products/homemade/sauce/citron",
    },
    "rice-bowl": {
      image: sauceTop54Image,
      link: "/products/homemade/sauce/rice-bowl",
    },
  };

  return (
    <>
      <section className={styles.sauceFirstSection}>
        <ProductDetailNavigator content={content} />
        <div className={styles.sauceTitle}>?????? 3??? ??????</div>
        <div className="row">
          <div className="col">
            <img src={sauceImage1} alt="sauce" className="img-fill" />
          </div>
          <div className={`col ${styles.sauceListWrapper}`}>
            <div className={styles.sauceListBackgroundWrapper}>
              <img
                src={sauceSectionTextBG}
                alt="background"
                className="img-fluid"
              />
            </div>
            <div className={styles.sauceList}>
              <div className={styles.sauceBox}>
                <div className={styles.sauceImageWrapper}>
                  <img src={iconKatsu} alt="katsu icon" className="img-fluid" />
                </div>
                <div className={styles.sauceTitle}>????????? ??????</div>
                <div className={styles.sauceDescription}>
                  ?????? ????????? ??? ?????? ??????????????? ???????????? ??????
                </div>
              </div>
              <div className={styles.sauceBox}>
                <div className={styles.sauceImageWrapper}>
                  <img
                    src={iconCitron}
                    alt="citron icon"
                    className="img-fluid"
                  />
                </div>
                <div className={styles.sauceTitle}>?????? ??????</div>
                <div className={styles.sauceDescription}>
                  ???????????? ????????? ???????????? ?????????C ????????? ????????? ???
                </div>
              </div>
              <div className={styles.sauceBox}>
                <div className={styles.sauceImageWrapper}>
                  <img
                    src={iconSesame}
                    alt="sesame icon"
                    className="img-fluid"
                  />
                </div>
                <div className={styles.sauceTitle}>?????? ??????</div>
                <div className={styles.sauceDescription}>
                  ???????????? ????????? ????????? ?????? ?????? ??????
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.sauceSecondSection}>
        <div className={styles.sauceSecondTitle}>?????? 4??? ??????</div>
        <div className={styles.sauceSecondNavigatorWrapper}>
          {/* <button
                        type="button"
                        className={`${styles.sauceSecondNavigator} ${
                            clickedSauce === "spicy-cream"
                                ? styles.sauceSecondNavigatorActive
                                : ""
                        }`}
                        onMouseEnter={() => setClickedSauce("spicy-cream")}
                    >
                        <img
                            src={iconChili}
                            alt="Chili icon"
                            style={{ paddingRight: "6px" }}
                        />
                        ??????????????????
                    </button>
                    <button
                        type="button"
                        className={`${styles.sauceSecondNavigator} ${
                            clickedSauce === "spring-onion"
                                ? styles.sauceSecondNavigatorActive
                                : ""
                        }`}
                        onMouseEnter={() => setClickedSauce("spring-onion")}
                    >
                        <img
                            src={iconSpringOnion}
                            alt="Spring Onion icon"
                            style={{ paddingRight: "6px" }}
                        />
                        ?????????
                    </button> */}
          <button
            type="button"
            className={`${styles.sauceSecondNavigator} ${
              clickedSauce === "citron" ? styles.sauceSecondNavigatorActive : ""
            }`}
            onMouseEnter={() => setClickedSauce("citron")}
            onClick={() =>
              window.location.assign(sauceImageData["citron"]["link"])
            }
          >
            <img
              src={iconTangerine}
              alt="Tangerine icon"
              style={{ paddingRight: "6px" }}
            />
            ????????????
          </button>
          <button
            type="button"
            className={`${styles.sauceSecondNavigator} ${
              clickedSauce === "tonkatsu"
                ? styles.sauceSecondNavigatorActive
                : ""
            }`}
            onMouseEnter={() => setClickedSauce("tonkatsu")}
            onClick={() =>
              window.location.assign(sauceImageData["tonkatsu"]["link"])
            }
          >
            <img
              src={iconSteak}
              alt="Steak icon"
              style={{ paddingRight: "6px" }}
            />
            ???????????????
          </button>
          <button
            type="button"
            className={`${styles.sauceSecondNavigator} ${
              clickedSauce === "rice-bowl"
                ? styles.sauceSecondNavigatorActive
                : ""
            }`}
            onMouseEnter={() => setClickedSauce("rice-bowl")}
            onClick={() =>
              window.location.assign(sauceImageData["rice-bowl"]["link"])
            }
          >
            <img
              src={iconRice}
              alt="rice bowl icon"
              style={{ paddingRight: "6px" }}
            />
            ????????????
          </button>
          <button
            type="button"
            className={`${styles.sauceSecondNavigator} ${
              clickedSauce === "sesame" ? styles.sauceSecondNavigatorActive : ""
            }`}
            onMouseEnter={() => setClickedSauce("sesame")}
            onClick={() =>
              window.location.assign(sauceImageData["sesame"]["link"])
            }
          >
            <img
              src={iconSesameSecond}
              alt="Sesame icon"
              style={{ paddingRight: "6px" }}
            />
            ????????????
          </button>
        </div>
        <div className="container text-center">
          <Link
            className="d-inline-block"
            to={
              !!sauceImageData[clickedSauce] &&
              sauceImageData[clickedSauce]["link"]
            }
          >
            <img
              src={
                !!sauceImageData[clickedSauce] &&
                sauceImageData[clickedSauce]["image"]
              }
              alt="Sauce"
              className="img-fluid"
            />
          </Link>
        </div>
      </section>
      <section className={styles.sauceThirdSection}>
        <div className={styles.sauceThirdImageWrapper}>
          <img src={curryImage} alt="curry" className="img-fill" />
        </div>
        <div className={`${styles.sourceThirdContentWrapper} container`}>
          <div className={styles.sourceThirdContent}>
            ?????????
            <br />
            <br />
            <b>???????????? ?????? ?????????</b>
          </div>
          <div>
            <Link
              className={styles.sourceThirdLink}
              to="/products/homemade/sauce/curry"
            >
              ???????????? ???????????? &gt;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductSauce;
