import styles from "../../styles/company/teamvio.module.scss";

import teamvioHidden from "../../assets/img/teamvioHidden.svg";
import teamvioHidden1 from "../../assets/img/teamvioHidden1.svg";
import teamvioHidden2 from "../../assets/img/teamvioHidden2.svg";
import teamvioStars from "../../assets/img/teamvioStars.svg";
import teamvioRightDots from "../../assets/img/teamvioRightDots.png";
import teamvioLeftDots from "../../assets/img/teamvioLeftDots.png";
import joinDots from "../../assets/img/joinDots.png";
import teamvioPeople from "../../assets/img/teamvioPeople.jpg";
import teamvioWoman from "../../assets/img/teamvioWoman.jpg";
import teamvioBoss from "../../assets/img/teamvioBoss.jpg";
import teamvioCowork from "../../assets/img/teamvioCowork.jpg";

export const Teamvio = () => {
    return (
        <section className={styles.styledTeamvio}>
            <div className={styles.containerFeaturesCon}>
                <div className={styles.titleDiv}>
                    <h2 className={styles.title}>
                        <div className={styles.titleDec}>
                            <span className={styles.styledSpan}>
                                <span className={styles.styledBottomSpan}>
                                    <img src={teamvioHidden} alt='teamvioHidden' className={styles.styledHiddenImage}/>
                                </span>
                                <img src={teamvioStars} alt="teamvioStars" className={styles.styledImage}/>
                            </span>
                        </div>
                        Powered by
                        <span className={styles.accent}>Teamvio</span>
                    </h2>
                </div>
                <div className={styles.inner}>
                    <div className={styles.inner1}>
                        <div className={styles.squareLeft}></div>
                        <div className={styles.squareRightTop}></div>
                        <div className={styles.squareRightBot}></div>
                        <div className={styles.rightDots}>
                           <span className={styles.styledSpan}>
                                <span className={styles.styledBottomSpan}>
                                    <img src={teamvioHidden1} alt='teamvioHidden1' className={styles.styledHiddenImage}/>
                                </span>
                                <img src={teamvioRightDots} alt="teamvioRightDots" className={styles.styledImage}/>
                            </span>
                        </div>
                        <div className={styles.leftDots}>
                           <span className={styles.styledSpan}>
                                <span className={styles.styledBottomSpan}>
                                    <img src={teamvioHidden2} alt='teamvioHidden2' className={styles.styledHiddenImage}/>
                                </span>
                                <img src={teamvioLeftDots} alt="teamvioLeftDots" className={styles.styledImage}/>
                            </span>
                        </div>
                        <img src={teamvioPeople} alt="people" className={styles.img1} loading="lazy"/>
                        <img src={teamvioWoman} alt="people" className={styles.mobileImg} loading="lazy"/>
                        <img src={teamvioBoss} alt="people" className={styles.img3} loading="lazy"/>

                    </div>
                    <div className={styles.inner2}>
                        <img src={teamvioWoman} alt="people" className={styles.img2} loading="lazy"/>
                        <div className={styles.join}>
                            <div className={styles.joinSquareLeft}></div>
                            <div className={styles.joinSquareRight}></div>
                            <div className={styles.joinDots}>
                                <div>
                                    <span className={styles.aloneSpan}>
                                        <img src={joinDots} alt="dots" className={styles.aloneImage}/>
                                    </span>
                                </div>
                            </div>
                            <p className={styles.text}>Up for a challenge? We're always looking for the best</p>
                            <a href="https://www.linkedin.com/company/tinvio/jobs/" target="_blank" rel="noreferrer noopener" className={styles.link}>Join Us</a>
                        </div>
                        <img src={teamvioBoss} alt="people" className={styles.mobileImg} loading="lazy"/>
                        <img src={teamvioCowork} alt="people" className={styles.img4} loading="lazy"/>
                    </div>
                </div>
            </div>
        </section>
    )
}