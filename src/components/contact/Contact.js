import React, { useState, useMemo } from "react";
import ContactBanner from "./ContactBanner";
import styles from "./contact.module.scss";

function Contact() {
    const [description, setDescription] = useState("");
    const [fileName, setFileName] = useState("");
    const textLength = useMemo(() => description.length, [description]);
    return (
        <>
            <ContactBanner />
            <section className={styles.contactSection}>
                <div className="container">
                    <div className={styles.contactTitle}>문의 작성</div>
                    <div className={styles.contactFormPanel}>
                        <form encType="multipart/form-data">
                            <div className={styles.formWrapper}>
                                <div>
                                    <label
                                        htmlFor="writer"
                                        className={styles.commonFormLabel}
                                    >
                                        작성자
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    name="writer"
                                    id="writer"
                                    className={`${styles.commonFormInput} ${styles.writerFormInput}`}
                                />
                            </div>
                            <div className={styles.formWrapper}>
                                <div>
                                    <label
                                        htmlFor="mobile"
                                        className={styles.commonFormLabel}
                                    >
                                        휴대전화
                                    </label>
                                </div>
                                <div className="d-flex">
                                    <div>
                                        <select
                                            name="mobile"
                                            id="mobile"
                                            className={`${styles.commonSelectInput} ${styles.telSelectInput}`}
                                            defaultValue=""
                                        >
                                            <option value="82">+82</option>
                                        </select>
                                    </div>
                                    <div className="position-relative">
                                        <input
                                            type="tel"
                                            name="tel"
                                            id="tel"
                                            placeholder="휴대전화번호 입력"
                                            className={`${styles.commonFormInput} ${styles.telFormInput}`}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.formWrapper}>
                                <div className="d-flex">
                                    <div>
                                        <div>
                                            <label
                                                htmlFor="category"
                                                className={
                                                    styles.commonFormLabel
                                                }
                                            >
                                                분류
                                            </label>
                                        </div>
                                        <div>
                                            <select
                                                name="category"
                                                id="category"
                                                className={`${styles.commonSelectInput} ${styles.categorySelectInput}`}
                                                defaultValue=""
                                            >
                                                <option
                                                    value=""
                                                    hidden
                                                    disabled
                                                >
                                                    선택
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <label
                                                htmlFor="category_sub"
                                                className={
                                                    styles.commonFormLabel
                                                }
                                            >
                                                유형
                                            </label>
                                        </div>
                                        <div className="position-relative">
                                            <select
                                                name="category_sub"
                                                id="category_sub"
                                                className={`${styles.commonSelectInput} ${styles.categorySubInput}`}
                                                defaultValue=""
                                            >
                                                <option
                                                    value=""
                                                    hidden
                                                    disabled
                                                >
                                                    선택
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.formWrapper}>
                                <div className="d-flex">
                                    <div>
                                        <div>
                                            <label
                                                htmlFor="brand"
                                                className={
                                                    styles.commonFormLabel
                                                }
                                            >
                                                브랜드
                                            </label>
                                        </div>
                                        <div>
                                            <select
                                                name="brand"
                                                id="brand"
                                                className={`${styles.commonSelectInput} ${styles.categorySelectInput}`}
                                                defaultValue=""
                                            >
                                                <option
                                                    value=""
                                                    hidden
                                                    disabled
                                                >
                                                    선택
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <label
                                                htmlFor="store"
                                                className={
                                                    styles.commonFormLabel
                                                }
                                            >
                                                매장
                                            </label>
                                        </div>
                                        <div className="position-relative">
                                            <select
                                                name="store"
                                                id="store"
                                                className={`${styles.commonSelectInput} ${styles.categorySubInput}`}
                                                defaultValue=""
                                            >
                                                <option
                                                    value=""
                                                    hidden
                                                    disabled
                                                >
                                                    선택
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.formWrapper}>
                                <div>
                                    <label
                                        htmlFor="title"
                                        className={styles.commonFormLabel}
                                    >
                                        제목
                                    </label>
                                </div>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    className={`${styles.titleInput}`}
                                    placeholder="제목을 입력해주세요."
                                />
                            </div>
                            <div className={styles.formWrapper}>
                                <div>
                                    <label
                                        htmlFor="description"
                                        className={styles.commonFormLabel}
                                    >
                                        내용
                                    </label>
                                </div>
                                <div className={styles.descriptionPanel}>
                                    <div>
                                        <textarea
                                            name="description"
                                            id="description"
                                            placeholder="2000자 이내로 내용을 입력해주세요."
                                            onInput={(e) =>
                                                setDescription(e.target.value)
                                            }
                                            maxLength={2000}
                                            className={styles.description}
                                        ></textarea>
                                    </div>
                                    <div className={styles.countText}>
                                        {textLength} / 2,000자
                                    </div>
                                </div>
                            </div>
                            <div className={styles.formWrapper}>
                                <div>
                                    <label
                                        htmlFor="file"
                                        className={styles.commonFormLabel}
                                    >
                                        파일첨부
                                    </label>
                                </div>
                                <div className="d-flex">
                                    <div>
                                        <label
                                            htmlFor="file"
                                            className={styles.fileLabel}
                                        >
                                            {fileName === ""
                                                ? "이미지파일 최대 20M"
                                                : fileName}
                                        </label>
                                    </div>
                                    <div>
                                        <button
                                            type="button"
                                            className={styles.fileButton}
                                        >
                                            <label
                                                htmlFor="file"
                                                className={
                                                    styles.fileButtonLabel
                                                }
                                            >
                                                찾아보기
                                            </label>
                                        </button>
                                    </div>
                                    <input
                                        type="file"
                                        name="file"
                                        id="file"
                                        hidden
                                        accept="image/*"
                                        onInput={(e) => {
                                            if (e.target.files.length > 0) {
                                                setFileName(
                                                    e.target.files[0].name
                                                );
                                            } else {
                                                setFileName("");
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                            <div className={styles.formSubitButtonWrapper}>
                                <div>
                                    <button
                                        type="reset"
                                        className={styles.resetButton}
                                    >
                                        취소
                                    </button>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className={styles.submitButton}
                                    >
                                        완료
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
