import styles from "../../styles/company/done.module.scss";

import doneHidden from "../../assets/img/doneHidden.svg";
import redHidden from "../../assets/img/redHidden.svg";
import dotsRBHidden from "../../assets/img/dotsRBHidden.svg";
import dotsGHidden from "../../assets/img/dotsGHidden.svg";
import blackDotsHidden from "../../assets/img/blackDotsHidden.svg";
import redSideDotsHidden from "../../assets/img/redSideDotsHidden.svg";
import redDotsHidden from "../../assets/img/redDotsHidden.svg";
import greyHiddenDots from "../../assets/img/greyHiddenDots.svg";
import dotsBHidden from "../../assets/img/dotsBHidden.svg";
import doneDotsT from "../../assets/img/doneDotsT.png";
import dotsRT from "../../assets/img/dotsRT.svg";
import ipad from "../../assets/img/ipad.png";
import dotsRB from "../../assets/img/dotsRB.svg";
import dotsG from "../../assets/img/dotsG.png";
import blackDots from "../../assets/img/blackDots.png";
import redPhone375 from "../../assets/img/redPhone375.png";
import dotsGrey from "../../assets/img/dotsGrey.png";
import greydDotsB from "../../assets/img/greydDotsB.png";
import dotsRed from "../../assets/img/dotsRed.png";

export const Done = () => {
    return (
        <section className={styles.styledDone}>
            <div className={styles.containerFeaturesCon}>
                <h2 className={styles.topTitle}>What we've done</h2>
            </div>
            <section className={styles.wrapper}>
                <div className={styles.topWrapper}>
                    <div className={styles.dotsT}>
                        <span className={styles.styledSpan}>
                            <span className={styles.styledBottomSpan}>
                                <img src={doneHidden} alt="doneHidden" className={styles.styledHiddenImage}/>
                            </span>
                            <img src={doneDotsT} alt="doneDotsT" className={styles.styledImage}/>
                        </span>
                    </div>
                    <div className={styles.topSquareT}></div>
                    <div className={styles.greyTopBlock}>
                        <div className={styles.squareG1}></div>
                        <div className={styles.content1}>
                            <div className={styles.year}>2021</div>
                            <ul className={styles.list}>
                                <li className={styles.item}>
                                    Launch supplier web dashboard, Tinvio Checkout™
                                    for on-platform payments, and more
                                </li>
                                <li className={styles.item}>
                                    Series A funding to launch embedded finance
                                    capabilities for merchants and suppliers
                                </li>
                                <li className={styles.item}>
                                    Expand into new verticals.
                                    Close the year with 150 team members and 4000+ active businesses
                                    across the region
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.redSide}>
                        <div className={styles.squareR}></div>
                        <div className={styles.dotsRT}>
                            <span className={styles.styledSpan}>
                                <span className={styles.styledBottomSpan}>
                                    <img src={redHidden} alt="redHidden" className={styles.styledHiddenImage}/>
                                </span>
                                <img src={dotsRT} alt="dotsRT" className={styles.styledImage}/>
                            </span>
                        </div>
                        <img src={ipad} alt="ipad" loading="lazy"/>
                        <div className={styles.squareDB}></div>
                        <div className={styles.dotsRB}>
                             <span className={styles.styledSpan}>
                                <span className={styles.styledBottomSpan}>
                                    <img src={dotsRBHidden} alt="dotsRBHidden" className={styles.styledHiddenImage}/>
                                </span>
                                <img src={dotsRB} alt="dotsRB" className={styles.styledImage}/>
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.flexConInfo}>
                    <div className={styles.containerFeaturesCon}>
                        <div className={styles.squareG2}></div>
                        <div className={styles.squareG3}></div>
                        <div className={styles.content2}>
                            <div className={styles.year}>2021</div>
                            <ul className={styles.list}>
                                <li className={styles.item}>
                                    Launch supplier web dashboard, Tinvio Checkout™
                                    for on-platform payments, and more
                                </li>
                                <li className={styles.item}>
                                    Series A funding to launch embedded finance
                                    capabilities for merchants and suppliers
                                </li>
                                <li className={styles.item}>
                                    Expand into new verticals.
                                    Close the year with 150 team members and 4000+ active businesses
                                    across the region
                                </li>
                            </ul>
                            <div className={styles.dotsG}>
                                <span className={styles.styledSpan}>
                                    <span className={styles.styledBottomSpan}>
                                        <img src={dotsGHidden} alt="dotsGHidden" className={styles.styledHiddenImage}/>
                                    </span>
                                <img src={dotsG} alt="dotsG" className={styles.styledImage}/>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.bottomWrapper}>
                <div className={styles.wrapperCon}>
                    <div className={styles.black}>
                        <div className={styles.blackST}></div>
                        <div className={styles.blackContent}>
                            <p className={styles.blackTitle}>2020</p>
                            <ul className={styles.blackList}>
                                <li className={styles.blackItem}>Seed funding led by Sequoia and GFC</li>
                                <li className={styles.blackItem}>Launch multi-country localization, digital invoicing,
                                    and
                                    more
                                </li>
                                <li className={styles.blackItem}>Adapt to Covid-19. Triple team size to 75. Activate
                                    1000+
                                    new businesses
                                </li>
                            </ul>
                        </div>
                        <div className={styles.blackDots}>
                         <span className={styles.styledSpan}>
                             <span className={styles.styledBottomSpan}>
                                 <img src={blackDotsHidden} alt="blackDotsHidden" className={styles.styledHiddenImage}/>
                             </span>
                                <img src={blackDots} alt="blackDots" className={styles.styledImage}/>
                            </span>
                        </div>
                        <div className={styles.blackSB}></div>
                    </div>
                    <div className={styles.bottomRedSide}>
                        <div className={styles.bottomSquareR}></div>
                        <div className={styles.bottomDotsR}>
                            <span className={styles.styledSpan}>
                                <span className={styles.styledBottomSpan}>
                                    <img src={redSideDotsHidden} alt="redSideDotsHidden"
                                         className={styles.styledHiddenImage}/>
                                </span>
                                <img src={dotsRT} alt="dotsRT" className={styles.styledImage}/>
                            </span>
                        </div>
                        <img src={ipad} alt="ipad" loading="lazy"/>
                        <div className={styles.bottomDotsDB}>
                             <span className={styles.styledSpan}>
                                <span className={styles.styledBottomSpan}>
                                    <img src={dotsRBHidden} alt="doneHidden" className={styles.styledHiddenImage}/>
                                </span>
                                <img src={dotsRB} alt="dotsRB" className={styles.styledImage}/>
                            </span>
                        </div>
                        <div className={styles.bottomSquareDB}></div>
                    </div>
                    <div className={styles.redWrapper}>
                        <div className={styles.red}>
                            <div className={styles.redST}></div>
                            <p className={styles.redTitle}>Dark mode too!</p>
                            <picture>
                                <img src={redPhone375} alt="redPhone" className={styles.redPhoneImage}/>
                            </picture>
                            <div className={styles.redSB}></div>
                            <div className={styles.redDots}>
                                 <span className={styles.styledSpan}>
                                    <span className={styles.styledBottomSpan}>
                                        <img src={redDotsHidden} alt="redDotsHidden"
                                             className={styles.styledHiddenImage}/>
                                    </span>
                                <img src={dotsRed} alt="dotsRed" className={styles.styledImage}/>
                            </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottomGrey}>
                        <div className={styles.greyST}></div>
                        <div className={styles.greyContent}>
                            <p className={styles.greyTitle}>Q3 2019</p>
                            <ul className={styles.greyList}>
                                <li className={styles.greyItem}>
                                    Our founder Ajay raises pre-seed in Europe.
                                    Moves back to Singapore to build Tinvio
                                </li>
                                <li className={styles.greyItem}>
                                    Zero to one in team, product, processes.
                                    Launch merchant mobile app in 2 months
                                </li>
                                <li className={styles.greyItem}>
                                    Ajay meets our COO Tedo. Swiftly expand into Indonesia and more markets
                                </li>
                            </ul>
                        </div>
                        <div className={styles.greyItemSB}></div>
                        <div className={styles.greyDots}>
                            <span className={styles.styledSpan}>
                                <span className={styles.styledBottomSpan}>
                                    <img src={greyHiddenDots} alt="greyHiddenDots"
                                         className={styles.styledHiddenImage}/>
                                </span>
                                <img src={dotsGrey} alt="dotsGrey" className={styles.styledImage}/>
                            </span>
                        </div>
                    </div>
                    <div className={styles.dotsB}>
                        <span className={styles.styledSpan}>
                                <span className={styles.styledBottomSpan}>
                                    <img src={dotsBHidden} alt="dotsBHidden" className={styles.styledHiddenImage}/>
                                </span>
                                <img src={greydDotsB} alt="greydDotsB " className={styles.styledImage}/>
                            </span>
                    </div>
                </div>
            </section>
        </section>
    )
}