import {Header} from "./Header";
import {VideoModal} from "./VideoModal";

import styles from "../styles/home.module.scss";

import previewApp from "../assets/img/previewApp.png";
import phone2x from "../assets/img/phone2x.png";
import upperStars from "../assets/img/upperStars.svg";
import dotsUnderText from "../assets/img/dots-under-text.png";
import play from "../assets/img/play.svg";
import rightBottomDots from "../assets/img/rightBottomDots.png";
import chatIcon from "../assets/img/chatIcon.png";
import worksStars from "../assets/img/worksStars.svg";
import middleIcon from "../assets/img/middleIcon.svg";
import bottomStars from "../assets/img/bottomStars.svg";
import wallet from "../assets/img/wallet.png";
import paymentsStars from "../assets/img/paymentsStars.svg";
import twoStars from "../assets/img/twoStars.svg";
import leftBottomDots from "../assets/img/leftBottomDots.png";
import upperDirection from "../assets/img/upperDirection.svg";
import bottomDirection from "../assets/img/bottomDirection.svg";
import {useState} from "react";
import {MoreMoney} from "./MoreMoney";
import {FeaturedOn} from "./FeaturedOn";
import {WhyChoose} from "./WhyChoose";
import {SmileWork} from "./SmileWork";
import {FormFilling} from "./FormFilling";
import {Footer} from "./Footer";

const Home = () => {
    const [modalActive, setModalActive] = useState(false)

    return (
        <div className={styles.upperDiv}>
            <div className={styles.bigGreySquare}>
                <img src={dotsUnderText} className={styles.dotsUnderText} alt="bigGreySquare"/>
            </div>
            <div className={styles.redTopSquare}>
                <div className={styles.redTopSmallSquare}>
                    <div className={styles.redTopNullSquare}>
                        <img src={previewApp} className={styles.appImage} alt="previewApp"/>
                        <img src={phone2x} className={styles.phoneImage} alt="phone2x"/>
                        <div className={styles.dotsLeft}></div>
                        <div className={styles.dotsBottom}></div>
                    </div>
                </div>
            </div>
            <div className={styles.greySquare}></div>
            <main className={styles.main}>
                <Header/>
                <section>
                    <div className={styles.offerContainer}>
                        <div className={styles.previewInfo}>
                            <h2 className={styles.previewTitle}>
                                <img src={upperStars} className={styles.upperStars} alt={upperStars}/>
                                Collecting payments
                                <span className={styles.accent}> is easy, </span>
                                right?
                            </h2>
                            <p className={styles.previewText}>
                                Manage all your supply chain transactions in one dashboard.
                                Get paid faster, reconcile quicker, grow bigger.
                            </p>
                            <div className={styles.previewAction}>
                                <button className={styles.buttonGetStartedNow}>Get Started now</button>
                                <span className={styles.previewFootnote}>
                                    It's free to try!
                                    <div className={styles.previewSmile}></div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <section className={styles.howItWorksWrapper}>
                        <div className={styles.containerHowItWorks}>
                            <div className={styles.howItWorksInner}>
                                <div className={styles.howItWorksNull}>
                                    <div>
                                        <div className={styles.howItWorksCardTop}>
                                            <div className={styles.fadeInWrapper}>
                                                <div className={styles.howItWorksBox}>
                                                    <div className={styles.howItWorksCardContent}>
                                                        <p className={styles.howItWorksCardTitle}> Chats </p>
                                                        <p className={styles.howItWorksCardText}> Connect to anyone in
                                                            your
                                                            supply chain and exchange messages </p>
                                                    </div>
                                                </div>
                                                <div className={styles.howItWorksCardTopIcon}>
                                                    <div>
                                                        <span className={styles.spanImageChat}>
                                                            <img src={chatIcon} className={styles.imageChat}
                                                                 alt={chatIcon}/>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className={styles.howItWorksStars}>
                                                    <div>
                                                        <span className={styles.spanStars}>
                                                            <img src={worksStars} className={styles.starsImage}
                                                                 alt="worksStars"/>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <img className={styles.upperDirection} src={upperDirection}
                                                 alt="upperDirection"/>
                                        </div>
                                        <div className={styles.howItWorksMiddle}>
                                            <div className={styles.fadeInWrapper}>
                                                <div className={styles.howItWorksBox}>
                                                    <div className={styles.howItWorksCardContent}>
                                                        <p className={styles.howItWorksCardTitle}>Orders</p>
                                                        <p className={styles.howItWorksCardText}>Create or confirm
                                                            purchase
                                                            orders with tap of a button.</p>
                                                    </div>
                                                </div>
                                                <div className={styles.howItWorksCardMiddleIcon}>
                                                    <div>
                                                    <span>
                                                        <img src={middleIcon}
                                                             alt="middleIcon"/>
                                                    </span>
                                                    </div>
                                                </div>
                                                <div className={styles.howItWorksCardMiddleStars}>
                                                    <div>
                                                    <span>
                                                        <img src={bottomStars}
                                                             alt={bottomStars}/>
                                                    </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <img className={styles.bottomDirection} src={bottomDirection}
                                                 alt="bottomDirection"/>
                                        </div>
                                        <div className={styles.howItWorksCardBot}>
                                            <div className={styles.fadeInWrapper}>
                                                <div className={styles.howItWorksBox}>
                                                    <div className={styles.howItWorksCardContent}>
                                                        <p className={styles.howItWorksCardTitle}>Payments</p>
                                                        <p className={styles.howItWorksCardText}>Send invoices and
                                                            reconcile
                                                            payments in one dashboard</p>
                                                    </div>
                                                </div>
                                                <div className={styles.howItWorksCardBotIcon}>
                                                    <div>
                                                    <span>
                                                        <img src={wallet} alt="wallet"/>
                                                    </span>
                                                    </div>
                                                </div>
                                                <div className={styles.howItWorksCardBotStars}>
                                                    <div>
                                                    <span>
                                                        <img src={paymentsStars}
                                                             alt="twoStars"/>
                                                    </span>
                                                    </div>
                                                </div>
                                                <div className={styles.howItWorksCardBotStars2}>
                                                    <div>
                                                    <span>
                                                        <img src={twoStars} alt="twoStars"/>
                                                    </span>
                                                    </div>
                                                </div>
                                                <div className={styles.howItWorksDotsLeft}>
                                                    <div>
                                                    <span>
                                                        <img src={leftBottomDots}
                                                             alt="leftBottomDots"/>
                                                    </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div></div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.howItWorksInfo}>
                                    <h3 className={styles.howItWorksInfoTitle}>Tinvio in a heartbeat</h3>
                                    <p className={styles.howItWorksInfoText}>
                                        Exchange messages, create or confirm orders, send invoices,
                                        and collect payments across your supply chain -- all within one dashboard.
                                    </p>
                                    <button className={styles.howItWorksButton}
                                            onClick={() => setModalActive(true)}>
                                        <span>
                                            <img src={play} alt="play"/>
                                        </span>
                                        <p className={styles.howItWorksButtonText}>Play Video</p>
                                    </button>
                                    <div className={styles.dotsRight}>
                                        <div>
                                            <span>
                                                <img src={rightBottomDots} alt=""/>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <MoreMoney/>
                    <FeaturedOn/>
                    <WhyChoose/>
                    <SmileWork/>
                    <FormFilling/>
                    <Footer/>
                </section>
            </main>
            {
                modalActive ? <VideoModal onClose={() => setModalActive(false)}/> : ""
            }
        </div>
    )
}

export default Home;
