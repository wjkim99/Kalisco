import React from "react";
import styles from "./hr.module.scss";
import firstTitle from "../../static/images/k-family-values-text.png";
import KValuesImage1 from "../../static/images/K-familyvalues-1.png";
import KValuesImage2 from "../../static/images/K-familyvalues-2.png";
import KValuesImage3 from "../../static/images/K-familyvalues-3.png";
import KValuesImage4 from "../../static/images/K-familyvalues-4.png";
import hrImage from "../../static/images/img-hr-asain.png";
import kaliscoRightPeopleTextImage from "../../static/images/kalisco-right-people-text.png";

function Talent() {
    return (
        <>
            <section className={styles.talentFirstSection}>
                <div className="container">
                    <div className={styles.titleWrapper}>
                        <img src={firstTitle} alt="First title" />
                    </div>
                    <div className={styles.gridWrapper}>
                        <div>
                            <div className={styles.imageWrapper}>
                                <img src={KValuesImage1} alt="k value first" />
                            </div>
                            <div className={styles.gridTitle}>제품가치</div>
                            <div className={styles.gridParagraph}>
                                정통과 진정성이 더해져
                                <br />
                                만들어낸 맛의 가치
                            </div>
                        </div>
                        <div>
                            <div className={styles.imageWrapper}>
                                <img src={KValuesImage2} alt="k value second" />
                            </div>
                            <div className={styles.gridTitle}>접근가치</div>
                            <div className={styles.gridParagraph}>
                                고객과 가까이 함께하며
                                <br />
                                특별한 경험을 제공
                            </div>
                        </div>
                        <div>
                            <div className={styles.imageWrapper}>
                                <img src={KValuesImage3} alt="k value third" />
                            </div>
                            <div className={styles.gridTitle}>공간가치</div>
                            <div className={styles.gridParagraph}>
                                맛, 향, 소리, 따뜻함으로
                                <br />
                                공간의 힐링을 전달
                            </div>
                        </div>
                        <div>
                            <div className={styles.imageWrapper}>
                                <img src={KValuesImage4} alt="k value 4th" />
                            </div>
                            <div className={styles.gridTitle}>참여가치</div>
                            <div className={styles.gridParagraph}>
                                고객과 항상 교감하여
                                <br />
                                즐겁고 행복한 경험을 제시
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.talentSecondSection}>
                <div className={styles.peopleBackgroundImageWrapper}>
                    <img src={hrImage} alt="banner" className="img-fill" />
                </div>
                <div className={styles.peopleBackgroundWrapper}>
                    <div className={styles.peopleTextImageWrapper}>
                        <img
                            src={kaliscoRightPeopleTextImage}
                            alt="kalisco right people text"
                        />
                    </div>
                    <div className={styles.peopleParagraph}>
                        회사의 전략을 위해 고민하고 아이디어를 제안하며,
                        실행하는 열정적인 프로의 모습을 가진사람
                    </div>
                    <div className={styles.peopleGridWrapper}>
                        <div>
                            <div className={styles.peopleCircle}>
                                소통과 수용
                            </div>
                            <div className={styles.peopleGridParagraph}>
                                자신의 know how를 내세우기보다는
                                <br />
                                항상 겸허한 자세로 타인의 아이디어를
                                <br />
                                배우고 포용하는 자세
                            </div>
                        </div>
                        <div>
                            <div className={styles.peopleCircle}>책임</div>
                            <div className={styles.peopleGridParagraph}>
                                자신의 맡은 R&amp;R에
                                <br />
                                최선을 다하는 책임감
                            </div>
                        </div>
                        <div>
                            <div className={styles.peopleCircle}>열의</div>
                            <div className={styles.peopleGridParagraph}>
                                다른 사람들과 소통을 통해
                                <br />
                                이해심을 바탕으로
                                <br />
                                상대방의 입장을 공감할 줄 아는 사람
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Talent;
