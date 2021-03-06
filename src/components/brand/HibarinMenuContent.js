import React, { useState } from "react";
import Footer from "../Footer";
import styles from "./hibarin.module.scss";
import HibarinBanner from "./HibarinBanner";
import { useParams } from "react-router-dom";
import CategoryLink from "../categoryButton/CategoryLink";
import ModalProvider from "./modal/modal-provider";
import Fab from "./fab/Fab";
import { newData, newBannerData } from "./HibarinMenuData";

function HibarinMenuContent() {
  const params = useParams();
  const categoryData = [
    {
      text: "Katsu",
      type: "katsu",
      link: "/brand/hibarin/menu/katsu",
    },
    {
      text: "& Friends",
      type: "friends",
      link: "/brand/hibarin/menu/friends",
    },
    {
      text: "drink",
      type: "drink",
      link: "/brand/hibarin/menu/drink",
    },
    /*{
            text: "Side",
            type: "side",
            link: "/brand/hibarin/menu/side",
        },*/
  ];
  const [category, setCategory] = useState(params.menu ? params.menu : "katsu");

  return (
    <ModalProvider>
      <HibarinBanner subject={params.subject} />
      <section className={styles.menuDetailSection}>
        <div className={styles.categoryButtonListWrapper}>
          {categoryData.map((d, i) => (
            <CategoryLink
              key={i}
              {...d}
              parentType={category}
              clickEvent={() => setCategory(d.type)}
            />
          ))}
        </div>
        {/* <div className="container">
                    <div className={styles.menuDetailPanelWrapper}>
                        {HibarnMenuData[category] &&
                            HibarnMenuData[category].map((d, i) => (
                                <MenuPanel key={i} {...d} />
                            ))}
                    </div>
                </div> */}
        <div className={`row ${styles.fixedMenuListFlexWrapper}`}>
          <div className="col">
            <img
              src={newBannerData[category] && newBannerData[category]}
              alt="hibarin"
              className="img-fill"
            />
          </div>
          <div className={`col ${styles.menuListFlexColumnWrapper}`}>
            {newData[category] &&
              newData[category].map((d, i) => (
                <div
                  className={`${styles.menuListFlexColumn} animate__animated animate__fadeInUp`}
                  style={{
                    animationDelay: `${0.25 * (i + 1)}s`,
                  }}
                  key={i}
                >
                  <div className={styles.menuListNumber}>{d.no}</div>
                  <div className={styles.menuListRecipeImageWrapper}>
                    <img src={d.image} alt="katsu1" className="img-fluid" />
                  </div>
                  <div>
                    <div className={styles.menuListEnTitle}>{d.enTitle}</div>
                    <div className={styles.menuListTitle}>{d.title}</div>
                    <div className={styles.menuListDescription}>
                      {d.description}
                    </div>
                    <div className={styles.menuListPrice}>{d.price}</div>
                  </div>
                </div>
              ))}
            {category === "katsu" && (
              <div className={styles.sideMenuWrapper}>
                <div>
                  <div className={styles.sideMenuEnTitle}>CURRY SAUCE</div>
                  <div className={styles.sideMenuTitle}>?????? ??????</div>
                </div>
                <div className={styles.sideMenuPrice}>2.5</div>
                <div>
                  <div className={styles.sideMenuEnTitle}>RICE</div>
                  <div className={styles.sideMenuTitle}>??? ??????</div>
                </div>
                <div className={styles.sideMenuPrice}>1.2</div>
                <div>
                  <div className={styles.sideMenuEnTitle}>SIDE UDON/SOBA</div>
                  <div className={styles.sideMenuTitle}>????????? ??????/??????</div>
                </div>
                <div className={styles.sideMenuPrice}>3.8</div>
                <div>
                  <div className={styles.sideMenuEnTitle}>SIDE DISH</div>
                  <div className={styles.sideMenuTitle}>????????? ??????</div>
                </div>
                <div className={styles.sideMenuPrice}>2.0</div>
              </div>
            )}
            {category === "drink" && (
              <div className={styles.drinkMenuWrapper}>
                <div className={styles.drinkMenuFlexWrapper}>
                  <div>
                    <div className={styles.drinkMenuEnTitle}>
                      MATCHA LEMONADE
                    </div>
                    <div className={styles.drinkMenuTitle}>?????? ???????????????</div>
                  </div>
                  <div className={styles.drinkMenuPrice}>8.5</div>
                </div>
                <div className={styles.drinkMenuFlexWrapper}>
                  <div>
                    <div className={styles.drinkMenuEnTitle}>LEMON MOJITO</div>
                    <div className={styles.drinkMenuTitle}>
                      ?????? ????????? (NON-ALCOHOL)
                    </div>
                  </div>
                  <div className={styles.drinkMenuPrice}>8.5</div>
                </div>
                <div className={styles.drinkMenuFlexWrapper}>
                  <div>
                    <div className={styles.drinkMenuEnTitle}>
                      DRINKS (COKE/SPRITE)
                    </div>
                    <div className={styles.drinkMenuTitle}>
                      ???????????? (??????/???????????????)
                    </div>
                  </div>
                  <div className={styles.drinkMenuPrice}>3.5</div>
                </div>
                <div className={styles.drinkMenuFlexWrapper}>
                  <div>
                    <div className={styles.drinkMenuEnTitle}>KIDS' DRINK</div>
                    <div className={styles.drinkMenuTitle}>
                      ????????? ?????? (??????/??????/??????)
                    </div>
                  </div>
                  <div className={styles.drinkMenuPrice}>2.5</div>
                </div>
                <div className={styles.drinkMenuFlexWrapper}>
                  <div>
                    <div className={styles.drinkMenuEnTitle}>DRAFT BEER</div>
                    <div className={styles.drinkMenuTitle}>
                      ????????? (425ml) ??????
                    </div>
                  </div>
                  <div className={styles.drinkMenuPrice}>5.0</div>
                </div>
                <div className={styles.drinkMenuFlexWrapper}>
                  <div>
                    <div className={styles.drinkMenuEnTitle}>BOTTLED BEER</div>
                    <div className={styles.drinkMenuTitle}>
                      ????????? (330ml) ????????????
                    </div>
                  </div>
                  <div className={styles.drinkMenuPrice}>5.5</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer />
      <Fab subject="hibarin" />
    </ModalProvider>
  );
}

export default HibarinMenuContent;
