import {FC} from "react";

import styles from "../../styles/company/contact.module.scss";

import contactHidden from "../../assets/img/contactHidden.svg";
import contactHidden1 from "../../assets/img/contactHidden1.svg";
import contactHidden2 from "../../assets/img/contactHidden2.svg";
import contactHidden3 from "../../assets/img/contactHidden3.svg";
import contactDotsLeft from "../../assets/img/contactDotsLeft.png";
import contactLeftDots from "../../assets/img/contactLeftDots.png";
import contactMidDots from "../../assets/img/contactMidDots.png";
import contactRightDots from "../../assets/img/contactRightDots.png";

export interface propsTypeModal {
    handleOpenModal: () => void;
}

export const Contact: FC<propsTypeModal> = ({handleOpenModal}) => {

    return (
        <section id='contact' className={styles.contactWrapper}>

            <div className={styles.containerFeaturesCon}>
                <div className={styles.squareRight}></div>
                <div className={styles.squareLeft}></div>
                <div className={styles.dotsLeft}>
                        <span className={styles.styledSpan}>
                            <span className={styles.styledBottomSpan}>
                                <img src={contactHidden} alt="hidden" className={styles.styledHiddenImage}/>
                            </span>
                            <img src={contactDotsLeft} alt="dots" className={styles.styledImage}/>
                        </span>
                </div>
                <h2 className={styles.title}>Contact us</h2>
                <div className={styles.inner}>
                    <div className={styles.block}>
                        <div className={styles.leftSquareLeft}></div>
                        <div className={styles.leftSquareBottom}></div>
                        <div className={styles.leftDots}>
                                <span className={styles.styledSpan}>
                                    <span className={styles.styledBottomSpan}>
                                        <img src={contactHidden1} alt="hidden" className={styles.styledHiddenImage}/>
                                    </span>
                                    <img src={contactLeftDots} alt="dots" className={styles.styledImage}/>
                                </span>
                        </div>
                        <p className={styles.heading}>Product Support</p>
                        <p className={styles.content}>Need help? Live chat with "Team Tinvio" in the app or
                            dashboard</p>
                        <a href="http://dashboard.tinvio.com"
                           className={styles.styledLink}
                           target="_blank"
                           rel="noreferrer noopener">Get Help</a>
                    </div>
                    <div className={styles.darkBlock}>
                        <div className={styles.middleSquareLeft}></div>
                        <div className={styles.middleSquareBottom}></div>
                        <div className={styles.middleDots}>
                                <span className={styles.styledSpan}>
                                    <span className={styles.styledBottomSpan}>
                                        <img src={contactHidden2} alt="hidden" className={styles.styledHiddenImage}/>
                                    </span>
                                    <img src={contactMidDots} alt="dots" className={styles.styledImage}/>
                                </span>
                        </div>
                        <p className={styles.lightHeading}>Business & Partnerships</p>
                        <p className={styles.lightContent}>Interested in collaborating or partnering with Tinvio</p>
                        <button
                            className={styles.styledButton}
                            onClick={handleOpenModal}>Contact Us
                        </button>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.rightSquareLeft}></div>
                        <div className={styles.rightSquareBottom}></div>
                        <div className={styles.rightDots}>
                                <span className={styles.styledSpan}>
                                    <span className={styles.styledBottomSpan}>
                                        <img src={contactHidden3} alt="hidden" className={styles.styledHiddenImage}/>
                                    </span>
                                    <img src={contactRightDots} alt="dots" className={styles.styledImage}/>
                                </span>
                        </div>
                        <p className={styles.heading}>Media Relations</p>
                        <p className={styles.content}>Working on a story? We're happy to share more about Tinvio</p>
                        <a href="https://calendly.com/tinvio/media-get-coffee" target="_blank"
                           rel="noreferrer noopener"
                           className={styles.styledLink}
                        >Get Help</a>
                    </div>
                </div>
            </div>
        </section>
    )
}