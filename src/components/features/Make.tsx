import styles from "../../styles/feature/make.module.scss";

import makeDec1 from "../../assets/img/makeDec1.svg";
import makeDec2 from "../../assets/img/makeDec2.png";
import makeDec3 from "../../assets/img/makeDec3.png";
import makeDec4 from "../../assets/img/makeDec4.png";

export const Make = () => {
    return (
        <section className={styles.styledMake}>
            <div className={styles.containerFeaturesCon}>
                <div className={styles.makeCon}>
                    <div className={styles.makeInfo}>
                        <h2 className={styles.makeTitle}>Make collections fast, flexible, fun</h2>
                        <p className={styles.makeText}>Give customers a modern B2B payments experience,
                            with more ways to pay (including credit terms).
                            Zero setup or risk for you. They'll stay with you longer,
                            purchase more from you, and you'll get cash in your bank
                            so much faster!</p>
                    </div>
                    <div className={styles.makeFirst}>
                        <div className={styles.makeSecond}>
                            <div className={styles.makeStars}>
                                <div>
                                    <span className={styles.styledSpan}>
                                        <img src={makeDec1} alt="makeDec1" className={styles.styledImage}/>
                                    </span>
                                </div>
                            </div>
                            <div className={styles.leftImgWrap}>
                                <div className={styles.leftImg}>
                                    <span className={styles.styledSpan}>
                                        <img src={makeDec2} alt="makeDec2" className={styles.styledImage}/>
                                    </span>
                                </div>
                            </div>
                            <div className={styles.RightImgWrap}>
                                <div className={styles.RightImg}>
                                    <span className={styles.styledSpan}>
                                        <img src={makeDec3} alt="makeDec3" className={styles.styledImage}/>
                                    </span>
                                </div>
                            </div>
                            <div className={styles.dots}>
                                <div>
                                    <span className={styles.styledSpan}>
                                        <img src={makeDec4} alt="makeDec4" className={styles.styledImage}/>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}