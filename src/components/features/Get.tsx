import styles from "../../styles/feature/get.module.scss";

import getHidden from "../../assets/img/getHidden.svg";
import getDec1 from "../../assets/img/getDec1.svg";
import getDec2 from "../../assets/img/getDec2.png";
import getDec3 from "../../assets/img/getDec3.png";
import getDec4 from "../../assets/img/getDec4.png";

export const Get = () => {
    return (
        <section className={styles.styledGet}>
            <div className={styles.containerFeaturesCon}>
                <div className={styles.getCon}>
                    <h2 className={styles.getTitle}>Get smarter about all the little details</h2>
                    <p className={styles.getText}>Monitor your transactions activity on one dashboard.
                        Generate customized order, inventory, and payments reports.
                        Prevent fraud, improve operations, manage working capital,
                        and grow grow grow!</p>
                    <div className={styles.getFirst}>
                        <div className={styles.getSecond}>
                            <div className={styles.getStars}>
                                <div>
                                    <span className={styles.styledFirstSpan}>
                                        <span className={styles.styledSecondSpan}>
                                            <img src={getHidden} alt="getHidden" className={styles.styledHiddenImage}/>
                                        </span>
                                        <img src={getDec1} alt="getDec1" className={styles.styledImage}/>
                                    </span>
                                </div>
                            </div>
                            <div className={styles.getLeftImgWrap}>
                                <div className={styles.getLeftImg}>
                                    <span className={styles.aloneSpan}>
                                        <img src={getDec2} width={288} height={455} alt="getDec2" className={styles.aloneImage}/>
                                    </span>
                                </div>
                            </div>
                            <div className={styles.rightImgWrap}>
                                <div className={styles.rightImg}>
                                    <span className={styles.aloneSpan}>
                                        <img src={getDec3} width={498} height={641} alt="getDec3" className={styles.aloneImage}/>
                                    </span>
                                </div>
                            </div>
                            <div className={styles.dots}>
                                <div>
                                    <span className={styles.aloneSpan}>
                                        <img src={getDec4} alt="getDec4" className={styles.aloneImage}/>
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