import React from "react";
import ProductDetailNavigator from "./ProductDetailNavigator";
import styles from "./product.module.scss";
import { useParams, Redirect } from "react-router-dom";
import SauceNavigator from "./SauceNavigator";
import imgCurry1 from "../../static/images/img-p-sauce-curry-1.png";
import imgCurry2 from "../../static/images/img-p-sauce-curry-2.png";
import imgCitron1 from "../../static/images/img-sauce-citron.png";
import imgCitron2 from "../../static/images/img-p-sauce-yuzu-2.png";
import imgCitronRec from "../../static/images/img-sauce-citron-rec.png";
import imgSesame1 from "../../static/images/img-sauce-sesame.png";
import imgSesame2 from "../../static/images/img-p-sauce-sesame-2.png";
import imgSesameRec from "../../static/images/img-sauce-sesame-rec.png";
import imgKatsu1 from "../../static/images/img-sauce-kastu.png";
import imgKatsu2 from "../../static/images/img-p-sauce-don-2.png";
import imgKatsuRec from "../../static/images/img-sauce-katsu-rec.png";
import imgRice1 from "../../static/images/img-sauce-rice.png";
import imgRice2 from "../../static/images/img-p-sauce-rice-bowl-2.jpg";

function ProductSauceDetail({ content }) {
    const { sauce } = useParams();
    const sauceData = {
        donkatsu: {
            firstImage: imgKatsu1,
            secondImage: imgKatsu2,
            recipeImage: imgKatsuRec,
            firstTitle: "[20주년 에디션] 사보텐 돈카츠 소스 220g",
            priceText: (
                <>
                    <b>4,500</b>원(VAT포함)
                </>
            ),
            firstDescription: (
                <>
                    대추, 토마토, 사과당밀, 레드와인 등 엄선된 재료로 위생적이고
                    <br />
                    엄격한 품질 관리하에 만든 Chef made 제품
                    <br />
                    <br />
                    단시간 고열 추출법으로 제품 본연의 풍미를 한층 살림
                    <br />
                    <br />
                    16년간 정통 돈카츠 전문점 사보텐을 운영한 캘리스코의
                    노하우로 만든 전통 일본식 돈카츠 소스
                </>
            ),
            secondDescription: (
                <>
                    레벤우스타소스[혼합간장], 정제수, 간장맛 양념,
                    토마토페이스트(중국산),
                    <br />
                    레드와인, 화이트식초, 대추퓨레, 사과농축액 등
                </>
            ),
            thirdDescription: (
                <>
                    튀김, 돈카츠, 탕수육
                    <br />
                    밥류/면류 : 오므라이스, 볶음밥, 야끼우동/누들
                    <br />
                    스테이크, 함박스테이크, 폭립, 폭찹, 오꼬노미야끼
                    <br />
                    샌드위치, 햄버거 소스
                </>
            ),
        },
        sesame: {
            firstImage: imgSesame1,
            secondImage: imgSesame2,
            recipeImage: imgSesameRec,
            firstTitle: "[20주년 에디션] 사보텐 참깨소스 200g",
            priceText: (
                <>
                    <b>4,500</b>원(VAT포함)
                </>
            ),
            firstDescription: (
                <>
                    참깨 함유량 10%, 경쟁제품 중 참깨함유량이 가장 높고,
                    <br />
                    고온에 볶은 참깨를 사용해서 맛과 향이 풍부
                    <br />
                    엄선된 재료로 위생적이고 엄격한 품질 관리하에 만든Chef made
                    제품
                    <br />
                    16년간 정통 돈카츠 전문점 사보텐을 운영한 캘리스코의 소스
                    노하우
                </>
            ),
            secondDescription: (
                <>
                    레벤우스타소스[혼합간장], 정제수, 간장맛 양념,
                    토마토페이스트(중국산),
                    <br />
                    레드와인, 화이트식초, 대추퓨레, 사과농축액 등
                </>
            ),
            thirdDescription: (
                <>
                    튀김, 돈카츠, 탕수육
                    <br />
                    밥류/면류 : 오므라이스, 볶음밥, 야끼우동/누들
                    <br />
                    스테이크, 함박스테이크, 폭립, 폭찹, 오꼬노미야끼
                    <br />
                    샌드위치, 햄버거 소스
                </>
            ),
        },
        citron: {
            firstImage: imgCitron1,
            secondImage: imgCitron2,
            firstTitle: "[20주년 에디션] 사보텐 유자소스 210g",
            priceText: (
                <>
                    <b>4,500</b>원(VAT포함)
                </>
            ),
            firstDescription: (
                <>
                    비타민C가 풍부해서, 노화와 피로 회복에 효과가 있는 국내산
                    전라도 황유자 사용
                    <br />
                    50℃ 저온추출공법으로 유자 본연의 맛을 구현,
                    <br />
                    엄선된 재료로 위생적이고 엄격한 품질 관리하에 만든Chef made
                    제품
                    <br />
                    16년간 정통 돈카츠 전문점 사보텐을 운영한 캘리스코의 소스
                    노하우
                </>
            ),
            secondDescription: (
                <>
                    양조식초, 양조간장[탈지대두(인도산)],
                    유자청징농축액[유자청(국산)],
                    <br />
                    야채액기스, 정제염, 가쓰오조미액, 유산균발효액
                </>
            ),
            thirdDescription: (
                <>
                    각종 샐러드 드레싱
                    <br />
                    유자소스 + 참깨소스 섞어서 샐러드 및 고기소스
                    <br />
                    샤브샤브 소스
                    <br />
                    생선구이 소스(고등어, 연어, 삼치, 메로구이 등)
                    <br />
                    튀김, 유린기, 탕수육
                </>
            ),
            recipeImage: imgCitronRec,
        },
        "rice-bowl": {
            firstImage: imgRice1,
            secondImage: imgRice2,
            firstTitle:
                "[20주년 에디션] 사보텐 일식 덮밥 소스 (셰프의 만능 치트키)",
            priceText: (
                <>
                    <b>4,500</b>원(VAT포함)
                </>
            ),
            // firstDescription: (
            //     <>
            //         비타민C가 풍부해서, 노화와 피로 회복에 효과가 있는 국내산
            //         전라도 황유자 사용
            //         <br />
            //         50℃ 저온추출공법으로 유자 본연의 맛을 구현,
            //         <br />
            //         엄선된 재료로 위생적이고 엄격한 품질 관리하에 만든Chef made
            //         제품
            //         <br />
            //         16년간 정통 돈카츠 전문점 사보텐을 운영한 캘리스코의 소스
            //         노하우
            //     </>
            // ),
            // secondDescription: (
            //     <>
            //         양조식초, 양조간장[탈지대두(인도산)],
            //         유자청징농축액[유자청(국산)],
            //         <br />
            //         야채액기스, 정제염, 가쓰오조미액, 유산균발효액
            //     </>
            // ),
            // thirdDescription: (
            //     <>
            //         각종 샐러드 드레싱
            //         <br />
            //         유자소스 + 참깨소스 섞어서 샐러드 및 고기소스
            //         <br />
            //         샤브샤브 소스
            //         <br />
            //         생선구이 소스(고등어, 연어, 삼치, 메로구이 등)
            //         <br />
            //         튀김, 유린기, 탕수육
            //     </>
            // ),
            //recipeImage: imgCitronRec,
        },
        curry: {
            firstImage: imgCurry1,
            secondImage: imgCurry2,
            firstTitle: "커리소스",
            priceText: (
                <>
                    <b>4,500</b>원(VAT포함)
                </>
            ),
            firstDescription: (
                <>
                    일본 전통 방식으로 깊은 맛 가득
                    <br />
                    위생적 품질관리 하에 만든 Chef made 제품
                    <br />
                    100% 완조리
                    <br />
                    3일 숙성된 커리 소스
                    <br />
                    9% 발표 강황 함유
                </>
            ),
        },
    };

    switch (sauce) {
        case "spicy-creem":
        case "green-onion":
            window.alert("레시피 준비중 입니다!");
            return <Redirect to="/products/homemade/sauce" />;
        case "donkatsu":
        case "sesame":
        case "citron":
        case "curry":
        case "rice-bowl":
            return (
                <>
                    <section className={styles.sauceDetailFristSection}>
                        <ProductDetailNavigator content={content} />
                        <SauceNavigator sauce={sauce} />
                        <div className="row">
                            <div className="col">
                                <img
                                    src={
                                        sauceData[sauce] &&
                                        sauceData[sauce]["firstImage"]
                                    }
                                    alt="product example"
                                    className="img-fill"
                                />
                            </div>
                            <div
                                className={`col ${styles.sauceDetailTextWrapper}`}
                            >
                                <div className={styles.sauceDetailSpaceWrapper}>
                                    <div
                                        className={
                                            styles.sauceDetailTextTitleWrapper
                                        }
                                    >
                                        <div
                                            className={
                                                styles.sauceDetailTextTitle
                                            }
                                        >
                                            {sauceData[sauce] &&
                                                sauceData[sauce]["firstTitle"]}
                                        </div>
                                        <div
                                            className={
                                                styles.sauceDetailPriceText
                                            }
                                        >
                                            {sauceData[sauce] &&
                                                sauceData[sauce]["priceText"]}
                                        </div>
                                    </div>
                                    <div
                                        className={
                                            styles.sauceDetailTextSubTitle
                                        }
                                    >
                                        설명
                                    </div>
                                    <div
                                        className={
                                            styles.sauceDetailTextDescription
                                        }
                                    >
                                        {sauceData[sauce] &&
                                            sauceData[sauce][
                                                "firstDescription"
                                            ]}
                                    </div>
                                    <div
                                        className={
                                            styles.sauceDetailTextSubTitle
                                        }
                                    >
                                        재료
                                    </div>
                                    <div
                                        className={
                                            styles.sauceDetailTextDescription
                                        }
                                    >
                                        {sauceData[sauce] &&
                                            sauceData[sauce][
                                                "secondDescription"
                                            ]}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div
                                className={`col ${styles.sauceDetailTextWrapper} ${styles.sauceDetailTextSecondWrapper}`}
                            >
                                <div className={styles.sauceDetailSpaceWrapper}>
                                    <div
                                        className={`${styles.sauceDetailTextTitleWrapper} ${styles.sauceDetailTextTitleWrapperReverse}`}
                                    >
                                        <div
                                            className={`${styles.sauceDetailTextTitle}`}
                                        >
                                            어울리는 음식
                                        </div>
                                    </div>
                                    <div
                                        className={`${styles.sauceDetailTextDescription} ${styles.sauceDetailTextDescriptionReverse}`}
                                    >
                                        {sauceData[sauce] &&
                                            sauceData[sauce][
                                                "thirdDescription"
                                            ]}
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <img
                                    src={
                                        sauceData[sauce] &&
                                        sauceData[sauce]["secondImage"]
                                    }
                                    alt="product example"
                                    className="img-fill"
                                />
                            </div>
                        </div>
                    </section>
                    {sauceData[sauce]["recipeImage"] && (
                        <section className={styles.sauceDetailRecipeSection}>
                            <div className="text-center">
                                <img
                                    src={sauceData[sauce]["recipeImage"]}
                                    alt="recipe"
                                    className="img-fluid"
                                />
                            </div>
                        </section>
                    )}
                </>
            );
        default:
            return <Redirect to="/products/homemade/sauce" />;
    }
}

export default ProductSauceDetail;
