import styles from "../../styles/smileWork.module.scss";

import smileReworkRightDots from "../../assets/img/smileReworkRightDots.png";
import smileReworkLeftDots from "../../assets/img/smileReworkLeftDots.png";
import petShop from "../../assets/img/petShop.png";
import nex from "../../assets/img/nex.svg";
import bbs from "../../assets/img/bbs.png";
import nayla from "../../assets/img/nayla.svg";
import tokoKita from "../../assets/img/tokoKita.svg";
import burgerLobster from "../../assets/img/burgerLobster.png";
import groupOfCompanies from "../../assets/img/groupOfCompanies.svg";
import esTeh from "../../assets/img/esTeh.svg";
import gongCha from "../../assets/img/gongCha.png";
import khoPaKa from "../../assets/img/khoPaKa.svg";

export const SmileWork = () => {
    return (
        <div className={styles.smileWorkWrapper}>
            <div className={styles.smileWorkContainerTitle}>
                <h3 className={styles.smileWorkTitle}>We'll put a smile on your supply chain</h3>
            </div>
            <div className={styles.smileWorkMainBox}>
                <img src={smileReworkRightDots} alt="smileReworkRightDots" className={styles.smileReworkDots}
                     loading={"lazy"}/>
                <div className={styles.smileReworkBigGrey}></div>
                <div className={styles.smileReworkLeftBigGrey}></div>
                <div className={styles.smileReworkLeftBottomBigGrey}></div>
                <img src={smileReworkLeftDots} className={styles.smileReworkLeftDots} alt="smileReworkLeftDots"/>
                <div className={styles.smileReworkInner}>
                    <div className={styles.smileReworkGreyWrapper1}>
                        <div className={styles.smileReworkFadeInWrapper}>
                            <div className={styles.smileReworkGrey}></div>
                            <div className={styles.smileReworkGreyInner}></div>
                            <img src={petShop} loading={"lazy"} className={styles.smileReworkImage}
                                 alt="petShop"/>
                        </div>
                    </div>
                    <div className={styles.smileReworkTopFirstLine}>
                        <div className={styles.smileReworkGreyWrapper2}>
                            <div className={styles.smileReworkFadeInWrapper}>
                                <div className={styles.smileReworkGrey}></div>
                                <div className={styles.smileReworkGreyInner}></div>
                                <img src={nex} className={styles.smileReworkImage} alt="nex" loading={"lazy"}/>
                            </div>
                        </div>
                        <div className={styles.smileReworkGreyWrapper}>
                            <div className={styles.smileReworkFadeInWrapper}>
                                <div className={styles.smileReworkGrey}></div>
                                <div className={styles.smileReworkGreyInner}></div>
                                <img src={bbs} className={styles.smileReworkImage} loading={"lazy"} alt="bbs"/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.smileReworkTopSecondLine}>
                        <div className={styles.smileReworkGreyWrapper3}>
                            <div className={styles.smileReworkFadeInWrapper}>
                                <div className={styles.smileReworkGrey}></div>
                                <div className={styles.smileReworkGreyInner}></div>
                                <img src={nayla} className={styles.smileReworkImage} alt="nayla" loading={"lazy"}/>
                            </div>
                        </div>
                        <div className={styles.smileReworkGreyWrapper}>
                            <div className={styles.smileReworkFadeInWrapper}>
                                <div className={styles.smileReworkGrey}></div>
                                <div className={styles.smileReworkGreyInner}></div>
                                <img src={tokoKita} className={styles.smileReworkImage} loading={"lazy"}
                                     alt="tokoKita"/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.smileReworkFadeInWrapper}>
                        <div className={styles.smileReworkPinkWrapper}>
                            <div className={styles.smileReworkPinkBig}></div>
                            <div className={styles.smileReworkPinkSmall}></div>
                            <div className={styles.smileReworkRed}>
                                <div className={styles.smileReworkBardo}>
                                    <div className={styles.smileReworkContent}>
                                        <div className={styles.smileReworkTextWrapper}>
                                            <p className={styles.smileReworkText}>5000+</p>
                                            <p className={styles.smileReworkText}>happy businesses</p>
                                        </div>
                                        <div className={styles.smileReworkLine}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.smileReworkBotFirstLine}>
                        <div className={styles.smileReworkGreyWrapper3}>
                            <div className={styles.smileReworkFadeInWrapper}>
                                <div className={styles.smileReworkGrey}></div>
                                <div className={styles.smileReworkGreyInner}></div>
                                <img src={burgerLobster} className={styles.smileReworkImage} loading={"lazy"}
                                     alt="burgerLobster"/>
                            </div>
                        </div>
                        <div className={styles.smileReworkGreyWrapper}>
                            <div className={styles.smileReworkFadeInWrapper}>
                                <div className={styles.smileReworkGrey}></div>
                                <div className={styles.smileReworkGreyInner}></div>
                                <img src={groupOfCompanies} className={styles.smileReworkImage} loading={"lazy"}
                                     alt="groupOfCompanies"/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.smileReworkBotSecondLine}>
                        <div className={styles.smileReworkGreyWrapper2}>
                            <div className={styles.smileReworkFadeInWrapper}>
                                <div className={styles.smileReworkGrey}></div>
                                <div className={styles.smileReworkGreyInner}></div>
                                <img src={esTeh} className={styles.smileReworkImage} alt="esTeh" loading={"lazy"}/>
                            </div>
                        </div>
                        <div className={styles.smileReworkGreyWrapper}>
                            <div className={styles.smileReworkFadeInWrapper}>
                                <div className={styles.smileReworkGrey}></div>
                                <div className={styles.smileReworkGreyInner}></div>
                                <img src={gongCha} className={styles.smileReworkImage} loading={"lazy"} alt="gongCha"/>
                            </div>
                        </div>
                    </div>
                    <div className={styles.smileReworkGreyWrapper4}>
                        <div className={styles.smileReworkFadeInWrapper}>
                            <div className={styles.smileReworkGrey}></div>
                            <div className={styles.smileReworkGreyInner}></div>
                            <img src={khoPaKa} className={styles.smileReworkImage} loading={"lazy"} alt="khoPaKa"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}