import styles from "../../styles/company/greetings.module.scss";

import greetingsDec768 from "../../assets/img/greetingsDec768.svg";
import chatIcon from "../../assets/img/chatIcon.svg";
import greetingsPhone from "../../assets/img/greetingsPhone.png";

export const Greetings = () => {
    return (
        <section className={styles.greetingsWrapper}>
            <div className={styles.containerFeaturesCon}>
                <div className={styles.titleDiv}>
                    <h1 className={styles.title}>
                        <picture className={styles.titleDec}>
                            <img src={greetingsDec768} alt="stars"/>
                        </picture>
                        Hi, we're
                        <span className={styles.accent}>Tinvio</span>
                        !
                    </h1>
                </div>
                <h2 className={styles.subTitle}>We're reimagining how merchants and suppliers transact</h2>
                <div className={styles.greetingsMain}>
                    <div className={styles.greetingsInfo}>
                        <p className={styles.greetingsText}>Tinvio is built for B2B transactions. It's an app,
                            dashboard,
                            checkout link, digital wallet, credit line, money in/out of
                            the bank, and so much more. Tradition meets modern in a
                            delightful chat-led user experience. The best part? We make it
                            fast, flexible, and fun.</p>
                        <p className={styles.greetingsText}>Why do we do it? It's painfully frustrating for businesses
                            to transact.
                            Our generation are about to colonize Mars, but in our supply chains,
                            businesses are still exchanging cold hard cash, writing checks, or
                            keying manual transfers. We're going to reimagine the status quo,
                            we're going to digitize the zillions of these offline receivables and
                            payables. One transaction at a time.</p>
                            <a href="#contact" style={{
                                textDecoration: "none"
                            }} className={styles.greetingsButton}>
                                <img src={chatIcon} alt="chatIcon" className={styles.contactImage}/>
                                Contact Us
                            </a>
                        <div className={styles.leftTopSquare}></div>
                        <div className={styles.leftBotSquare}></div>
                        <div className={styles.leftBotSquare2}></div>
                    </div>
                    <div className={styles.phoneWrapper}>
                        <img src={greetingsPhone} alt="greetingsPhone" className={styles.greetingsPhone}/>
                        <div className={styles.dec1}></div>
                        <div className={styles.rSquare}></div>
                    </div>
                </div>
            </div>
        </section>
    )
}