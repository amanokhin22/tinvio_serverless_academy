import styles from "../../styles/feature/breeze.module.scss";

import hiddenDotsBreeze from "../../assets/img/hiddenDotsBreeze.svg";
import dotsBreeze1 from "../../assets/img/dotsBreeze1.png";
import blendFirst from "../../assets/img/blendFirst.svg";
import fileBreeze from "../../assets/img/fileBreeze.svg";
import arrowBreeze from "../../assets/img/arrowBreeze.svg";
import blendSecond from "../../assets/img/womanSvg.svg";
import calendar from "../../assets/img/calendar.svg";
import starsHidden1 from "../../assets/img/starsHidden1.svg";
import starsHidden2 from "../../assets/img/starsHidden2.svg";
import manDec from "../../assets/img/manDec.svg";
import youngMan from "../../assets/img/youngMan.jpg";
import womenDec from "../../assets/img/womenDec.svg";
import women from "../../assets/img/women.jpg";
import blendThird from "../../assets/img/blendThird.svg";
import breezeDotsM from "../../assets/img/breezeDotsM.png";
import breezeDotsR from "../../assets/img/breezeDotsR.png";
import hiddenDotsM from "../../assets/img/hiddenDotsM.svg";
import hiddenDotsR from "../../assets/img/hiddenDotsR.svg";

export const Breeze = () => {
    return (
        <section className={styles.styledBreeze}>
            <div className={styles.featuresConBreeze}>
                <div className={styles.breezeContainer}>
                    <h2 className={styles.breezeTitle}>Breeze through orders without the stress</h2>
                    <p className={styles.breezeText}>Customers will love that they can browse item catalogs
                        and check availability before placing orders.
                        You’ll receive orders in beautifully formatted lists
                        with clear inventory balances. Confirm or amend them in a few taps,
                        even when on-the-go!
                        <span className={styles.breezeTextDots}>
                        <span className={styles.styledFirstSpan}>
                            <span className={styles.styledSecondSpan}>
                                <img src={hiddenDotsBreeze} alt="hiddenDotsBreeze"
                                     className={styles.styledHiddenImage}/>
                            </span>
                            <img src={dotsBreeze1} alt="dotsBreeze1" className={styles.styledImage}/>
                        </span>
                    </span>
                    </p>
                    <div className={styles.breezeBlock1}>
                        <div className={styles.breezeBlock2}>
                            <div className={styles.breezeBlock}>
                                <div className={styles.breezeAdd}>

                                    {/*<svg className={styles.conSvg}>*/}
                                    {/*    {[...Array(10)].map((_, i) => (*/}
                                    {/*        <rect*/}
                                    {/*            key={`rect-${i + 1}`}*/}
                                    {/*            id={`rect-${i + 1}`}*/}
                                    {/*            width="2.92287"*/}
                                    {/*            height="2.92287"*/}
                                    {/*            rx="0.5"*/}
                                    {/*            fill={`url(#paint${i}_radial_1102_756)`}*/}
                                    {/*            className={styles.rectAnimation}*/}
                                    {/*            style={{*/}
                                    {/*                opacity: 0,*/}
                                    {/*                animation: `fadeIn 16ms ease ${1166 + 66 * i}ms 1 normal forwards running`,*/}
                                    {/*                transform: `matrix(0.135506, -0.990776, 0.990579, 0.13694, ${32.4268 + 5.3789 * i}, ${90.561 - 8.9037 * i})`,*/}
                                    {/*                transformOrigin: "0 0"*/}
                                    {/*            }}*/}
                                    {/*        />*/}
                                    {/*    ))}*/}
                                    {/*    {[...Array(10)].map((_, i) => (*/}
                                    {/*        <radialGradient*/}
                                    {/*            key={`gradient-${i}`}*/}
                                    {/*            id={`paint${i}_radial_1102_756`}*/}
                                    {/*            cx="0"*/}
                                    {/*            cy="0"*/}
                                    {/*            r="1"*/}
                                    {/*            gradientUnits="userSpaceOnUse"*/}
                                    {/*            gradientTransform={`translate(${1.46144 + 5.3789 * i}px, ${1.46144 - 8.9037 * i}px) rotate(85.3036deg) scale(2.80114, 2.80114)`}*/}
                                    {/*        >*/}
                                    {/*            <stop offset="0.0729167" stopColor="#FFD743" />*/}
                                    {/*            <stop offset="0.541667" stopColor="#F3704B" />*/}
                                    {/*            <stop offset="0.895833" stopColor="#EF4E7B" />*/}
                                    {/*            <stop offset="1" stopColor="#A166AB" />*/}
                                    {/*        </radialGradient>*/}
                                    {/*    ))}*/}
                                    {/*</svg>*/}
                                    <img src={blendFirst} alt="blendFirst" className={styles.conSvg}/>
                                    <div className={styles.addBlock}>
                                        <div className={styles.addCon}>
                                            <div className={styles.addFile}>
                                                <span className={styles.aloneSpan}>
                                                    <img src={fileBreeze} alt="fileBreeze"
                                                         className={styles.aloneImage}/>
                                                </span>
                                            </div>
                                            <p className={styles.addText}>Add Catalog to Order List</p>
                                        </div>
                                        <div className={styles.addArrow}>
                                            <span className={styles.aloneSpan}>
                                                <img src={arrowBreeze} alt="arrowBreeze" className={styles.aloneImage}/>
                                            </span>
                                        </div>
                                    </div>
                                    <img src={blendSecond} alt="blendSecond" className={styles.womanSvg}/>
                                </div>
                                <div className={styles.del}>
                                    <div className={styles.delCon}>
                                        <div className={styles.delCal}>
                                            <span className={styles.aloneSpan}>
                                                <img src={calendar} alt="calendar" className={styles.aloneImage}/>
                                            </span>
                                        </div>
                                        <p className={styles.delText}>Delivery on</p>
                                    </div>
                                    <p className={styles.delDate}>Tue, 27 Oct</p>
                                </div>
                                <div className={styles.manDec}>
                                    <span style={{width: 73, height: 67}} className={styles.styledFirstSpan}>
                                        <span className={styles.styledSecondSpan}>
                                            <img src={starsHidden1} alt="starsHidden1"
                                                 className={styles.styledHiddenImage}/>
                                        </span>
                                        <img src={manDec} alt="manDec" className={styles.styledImage}/>
                                    </span>
                                </div>
                                <div className={styles.man}>
                                    <div className={styles.imgWrap}>
                                        <span className={styles.aloneSpan}>
                                            <img src={youngMan} alt="youngMan" className={styles.aloneImage}/>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.womanDec}>
                                    <span className={styles.styledFirstSpan}>
                                        <span className={styles.styledSecondSpan}>
                                            <img src={starsHidden2} alt="starsHidden2"
                                                 className={styles.styledHiddenImage}/>
                                        </span>
                                        <img src={womenDec} alt="womenDec" className={styles.styledImage}/>
                                    </span>
                                </div>
                                <div className={styles.imgDiv}>
                                    <div className={styles.imgWrap}>
                                        <span className={styles.aloneSpan}>
                                            <img src={women} alt="women" className={styles.aloneImage}/>
                                        </span>
                                    </div>
                                </div>
                                <img src={blendThird} alt="blendThird" className={styles.manSvg}/>
                                <div className={styles.order}>
                                    <div className={styles.orderInfo}>
                                        <p className={styles.orderText}>Total Amount</p>
                                        <p className={styles.orderPrice}>$ 1340.00</p>
                                    </div>
                                    <button className={styles.orderButton}>Confirm Order (9 Items)</button>
                                </div>
                            </div>
                            <div className={styles.block2Dec0}>
                                <div className={styles.dotM}>
                                    <span className={styles.styledFirstSpan}>
                                        <span className={styles.styledSecondSpan}>
                                            <img src={hiddenDotsM} alt="ariaHidden"
                                                 className={styles.styledHiddenImage}/>
                                        </span>
                                        <img src={breezeDotsM} alt="breezeDotsM" className={styles.styledImage}/>
                                    </span>
                                </div>
                                <div className={styles.dotR}>
                                    <span className={styles.styledFirstSpan}>
                                        <span className={styles.styledSecondSpan}>
                                            <img src={hiddenDotsR} alt="ariaHidden"
                                                 className={styles.styledHiddenImage}/>
                                        </span>
                                        <img src={breezeDotsR} alt="breezeDotsR" className={styles.styledHiddenImage}/>
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