import styles from "../../styles/formFilling.module.scss";

import bigMap from "../../assets/img/bigMap.png";
import flagcdn from "../../assets/img/flagcdn.png";
import hands from "../../assets/img/hands.svg";
import formFillingDots from "../../assets/img/formFillingDots.png";

export const FormFilling = () => {
    return (
        <div className={styles.formFillingWrapper}>
            <div className={styles.formFillingWrapperRotated}>
                <div className={styles.formFillingNull}>
                    <div className={styles.featuresCon}>
                        <div className={styles.formFillingInner}>
                            <div className={styles.formFillingTitleWrapper}>
                                <h3 className={styles.formFillingTitle}>
                                    Fill up the form and we'll get in touch within a few hours
                                </h3>
                                <div className={styles.formFillingMapBox}>
                                    <div className={styles.mapFlexWrapper}>
                                        <img src={bigMap} alt="bigMap"/>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.formFillingFormWrapper}>
                                <form className={styles.formFillingForm}>
                                    <p className={styles.formFillingFormTitle}>
                                        Hi, we're
                                        <span className={styles.FormTitleAccent}> Tinvio!</span>
                                        And you?
                                    </p>
                                    <label className={styles.FormInputStyled}>
                                        Name
                                        <input type="text" placeholder="John Appleseed" className={styles.formInput}/>
                                    </label>
                                    <label className={styles.FormInputStyled}>
                                        Business Name
                                        <input type="text" placeholder="Burgers & Boba (Singapore)"
                                               className={styles.formInput}/>
                                    </label>
                                    <label className={styles.FormInputStyled}>
                                        Phone
                                        <div className={styles.phoneInputContainer}>
                                            <div className={styles.phoneInputFlagContainer}>
                                                <img src={flagcdn} alt="flagcdn" className={styles.phoneInputFlag}/>
                                                <span className={styles.countryCode}>+65</span>
                                            </div>
                                            <input type="tel" placeholder="9123 4567" className={styles.formInput}/>
                                        </div>
                                    </label>
                                    <button className={styles.formFillingButton}>
                                        Submit
                                        <svg xmlns='http://www.w3.org/2000/svg' className={styles.formFillingSvg}>
                                            <g>
                                                <ellipse className={styles.firstEllipse} ry='23.5' rx='23.5' cy='24'
                                                         cx='24'></ellipse>
                                                <ellipse className={styles.secondEllipse} ry='23' rx='23' cy='24'
                                                         cx='24'></ellipse>
                                            </g>
                                        </svg>
                                    </button>
                                    <div className={styles.formFillingSpam}>
                                        No spam, promise
                                        <div className={styles.formFillingHands}>
                                            <span className={styles.formFillingHandsSpan}>
                                                <img src={hands} alt="hands" className={styles.formFillingHandsImage}/>
                                            </span>
                                        </div>
                                    </div>
                                </form>
                                <div className={styles.formFillingDots}>
                                    <span className={styles.formFillingDotsSpan}>
                                        <img src={formFillingDots} alt="formFillingDots"
                                             className={styles.formFillingDotsImage}/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}