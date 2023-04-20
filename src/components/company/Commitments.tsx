import styles from "../../styles/company/commitments.module.scss";

import commitmentsHidden from "../../assets/img/commitmentsHidden.svg";
import commitmentsHidden1 from "../../assets/img/commitmentsHidden1.svg";
import commitmentsHidden2 from "../../assets/img/commitmentsHidden3.svg";
import commitmentsHidden3 from "../../assets/img/commitmentsHidden4.svg";
import commitmentsHidden4 from "../../assets/img/commitmentsHidden2.svg";
import commitmentsDotsRight from "../../assets/img/commitmentsDotsRight.png";
import commitmentsDotsLeft from "../../assets/img/commitmentsDotsLeft.png";
import pen from "../../assets/img/pen.svg";
import message from "../../assets/img/message.svg";
import rocket from "../../assets/img/rocket.svg";

export const Commitments = () => {
    return (
        <section className={styles.comWrapper}>
            <div className={styles.comFlexConInfo}>
                <div className={styles.squareRight}></div>
                <div className={styles.squareLeft}></div>
                <div className={styles.dotsRight}>
                    <span className={styles.styledSpan}>
                        <span className={styles.styledBottomSpan}>
                            <img src={commitmentsHidden} alt="hiddenImage" className={styles.styledHiddenImage}/>
                        </span>
                        <img src={commitmentsDotsRight} alt="dots" className={styles.styledImage}/>
                    </span>
                </div>
                <div className={styles.dotsLeft}>
                    <span className={styles.styledSpan}>
                        <span className={styles.styledBottomSpan}>
                            <img src={commitmentsHidden1} alt="hiddenImage" className={styles.styledHiddenImage}/>
                        </span>
                        <img src={commitmentsDotsLeft} alt="dots" className={styles.styledImage}/>
                    </span>
                </div>
                <div className={styles.containerFeaturesCon}>
                    <div className={styles.content}>
                        <p className={styles.heading}>Our Core Commitments</p>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <span className={styles.styledSpan}>
                                    <span className={styles.styledBottomSpan}>
                                        <img src={commitmentsHidden2} alt="hiddenImage"
                                             className={styles.styledHiddenImage}/>
                                    </span>
                                    <img src={pen} alt="pen" className={styles.styledImage}/>
                                </span>
                                <p className={styles.title}>Every pixel matters</p>
                                <p className={styles.subTitle}>Biased towards perfection</p>
                            </li>
                            <li className={styles.item}>
                                <span className={styles.styledSpan}>
                                    <span className={styles.styledBottomSpan}>
                                        <img src={commitmentsHidden3} alt="hiddenImage"
                                             className={styles.styledHiddenImage}/>
                                    </span>
                                    <img src={message} alt="message" className={styles.styledImage}/>
                                </span>
                                <p className={styles.title}>Shut the fluff</p>
                                <p className={styles.subTitle}>Clear and direct communication</p>
                            </li>
                            <li className={styles.item}>
                                <span className={styles.styledSpan}>
                                    <span className={styles.styledBottomSpan}>
                                        <img src={commitmentsHidden4} alt="hiddenImage"
                                             className={styles.styledHiddenImage}/>
                                    </span>
                                    <img src={rocket} alt="rocket" className={styles.styledImage}/>
                                </span>
                                <p className={styles.title}>Break things fast</p>
                                <p className={styles.subTitle}>Ownership with ruthless agility</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}