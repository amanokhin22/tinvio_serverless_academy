import {useState} from "react";

import styles from "../../styles/superCharge.module.scss";
import ariaHiddenSC from "../../assets/img/ariaHiddenSC.svg";
import fdots from "../../assets/img/fdots.png";
import superChApp from "../../assets/img/superChApp.jpg";
import superCharge from "../../assets/img/superCharge.jpg";
import aaa from "../../assets/img/aaa.png";
import superChHiddenDots from "../../assets/img/superChHiddenDots.svg";

export interface possibilitiesItems {
    title: string;
    text: string;
}

export const possibilities: possibilitiesItems[] = [
    {
        title: "Chats",
        text: "Send messages, invoices, and payment links directly to " +
            "customers (even if they're not on Tinvio)"
    },
    {
        title: "Orders",
        text: "Manage all your orders, and magically " +
            "update inventory in a format designed to prevent mistakes"
    },
    {
        title: "Payments",
        text: "Collect payments and reconcile against invoices, without " +
            "ever checking bank statements"
    },
]
export const SuperCharge = () => {
    const [animationComplete, setAnimationComplete] = useState(false);

    return (
        <section className={styles.sectionSuperCharge}>
            <div className={styles.superChargeContainer}>
                <h2 className={styles.superChargeTitle}>Supercharge your business with Tinvio</h2>
            </div>
            <div className={styles.superChargeFlexCon}>
                <div className={styles.superChargeFullCon}>
                    <div className={styles.superChargeFullConDots}>
                                <span className={styles.superChargeFullConDotsSpan}>
                                    <span className={styles.superChargeFullConDotsSecondSpan}>
                                        <img src={ariaHiddenSC} alt="ariaHiddenSC"
                                             className={styles.superChargeFullConDotsHiddenImage}/>
                                    </span>
                                    <img src={fdots} alt="fdots" className={styles.superChargeFullConDotsImage}/>
                                </span>
                    </div>
                    <div className={styles.superChargeFullConDec1}>
                        <div className={styles.superChargeFullConApp}>
                                <span className={styles.superChargeFullConAppSpan}>
                                    <img src={superChApp} className={styles.superChargeFullConAppImage}
                                         alt="superChApp"/>
                                </span>
                        </div>
                    </div>
                </div>
                <div className={styles.superChargeFlexConInfo}>
                    <div className={styles.superChargeFlexConInfoDots}>
                                <span className={styles.superChargeFlexConInfoDotsSpan}>
                                    <span className={styles.superChargeFlexConInfoDotsSecondSpan}>
                                        <img src={superChHiddenDots} alt="superChHiddenDots"
                                             className={styles.superChargeFlexConInfoDotsHiddenImage}/>
                                    </span>
                                    <img src={aaa} className={styles.superChargeFlexConInfoDotsImage} alt="aaa"/>
                                </span>
                    </div>
                    <div className={styles.superChargeFlexConInfoContainer}>
                        <div className={styles.flexConGrid}>
                            {
                                possibilities.map((possibility, index) =>
                                    <div
                                        key={index}
                                        className={styles.flexConGridFadeInWrapper}
                                        style={{
                                            animationDelay: `${index * 1000}ms`,
                                            animationFillMode: animationComplete ? "forwards" : "",
                                            visibility: animationComplete ? "visible" : "hidden",
                                            opacity: animationComplete ? 1 : 0,
                                            display: "grid"
                                        }}
                                        onAnimationEnd={() => {
                                            if (index ===possibilities.length - 1) {
                                                setAnimationComplete(true);
                                            }
                                        }}
                                    >
                                        <div className={styles.superChargeElem}>
                                            <h3 className={styles.superChargeBottomTitle}>{possibility.title}</h3>
                                            <p className={styles.superChargeBottomText}>{possibility.text}</p>
                                        </div>
                                    </div>
                                )
                            }
                            <div className={styles.superChargeElemLast}>
                                <div className={styles.flexConGridFadeInWrapper}
                                     style={{
                                         animationDelay: '2600ms',
                                         animationFillMode: animationComplete ? "forwards" : "",
                                         visibility: animationComplete ? "visible" : "hidden",
                                         opacity: animationComplete ? 1 : 0,
                                         display: "grid"
                                     }}
                                >
                                    <h3 className={styles.superChargeBottomTitle}>And more in one dashboard...</h3>
                                    <p className={styles.superChargeBottomText}></p>
                                </div>
                            </div>
                            <img src={superCharge} className={styles.superChargeBottomMobileImage} alt="superCharge"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}