import styles from "../styles/footer.module.scss";
import {Link} from "react-router-dom";
import littleOctopus from "../assets/img/littleOctopus.svg";
import tinvio from "../assets/img/tinvio.svg";
import linkedin from "../assets/img/linkedin.svg";
import instagram from "../assets/img/instagram.svg";
import googlePlay from "../assets/img/googlePlay.png";
import appStore from "../assets/img/appStore.png";

export const Footer = () => {
    return (
        <div className={styles.footerStyled}>
            <div className={styles.footerContainer}>
                <div className={styles.footerFirstLine}>
                    <div className={styles.firstLineHalf}>
                        <div className={styles.logoInner}>
                            <div className={styles.footerLogo}>
                                <Link to={'/'}>
                                    <img src={littleOctopus} alt="header octopus" width={43} height={42}/>
                                </Link>
                            </div>
                            <div className={styles.footerLogoText}>
                                <img src={tinvio} alt='tinvio' width={60} height={19}/>
                            </div>
                        </div>
                        <span className={styles.firstLineSeparate}></span>
                        <ul className={styles.footerUl}>
                            <li className={styles.footerLi}>
                                <Link to={'/Home'}>Home</Link>
                            </li>
                            <li className={styles.footerLi}>
                                <Link to={'/Features'}>Features</Link>
                            </li>
                            <li className={styles.footerLi}>
                                <Link to={'/Company'}>Company</Link>
                            </li>
                            <li className={styles.footerLi}>
                                <Link to={'http://dashboard.tinvio.com'}>Login</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.secondLineHalf}>
                        <div className={styles.footerLinks}>
                            <div className={styles.socialDiv}>
                                <Link to={"https://www.linkedin.com/company/tinvio"}>
                                    <img src={linkedin} alt="linkedin" className={styles.socialDivLdn}/>
                                </Link>
                                <Link to={"https://www.instagram.com/tinvioapp/?hl=en"}>
                                    <img src={instagram} alt="instagram" className={styles.socialDivInst}/>
                                </Link>
                            </div>
                            <span className={styles.firstLineSeparate}></span>
                            <div className={styles.footerStores}>
                                <Link
                                    to={"https://play.google.com/store/apps/details?id=com.tinvio.tinvio&hl=en&gl=US&pli=1"}>
                                    <img src={googlePlay} alt="googlePlay" className={styles.footerStoresGoogle}/>
                                </Link>
                                <Link to={"https://apps.apple.com/sg/app/tinvio/id1472428382"}>
                                    <img src={appStore} alt="appStore" className={styles.footerStoresApple}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.footerSecondLine}>
                    <p className={styles.footerSecondLineText}>
                        <Link to={"/privacy"} className={styles.footerSecondLineTextLink}>© Tinvio™ 2022. All Rights
                            Reserved</Link>
                    </p>
                    <span className={styles.footerSecondLineSeparate1}></span>
                    <div className={styles.footerSecondLineTextIcon}>
                        <p className={styles.footerSecondLineText}>
                            <Link to={"/privacy"} className={styles.footerSecondLineTextLink}>Privacy Policy</Link>
                        </p>
                        <span className={styles.footerSecondLineSeparate2}></span>
                        <p className={styles.footerSecondLineText}>
                            <Link to={"/terms"} className={styles.footerSecondLineTextLink}>Terms of Service</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}