import styles from "../../styles/moreMoney.module.scss";

import leftMock1 from "../../assets/img/leftMock1.png";
import rightMock1 from "../../assets/img/rightMock1.png";
import leftMock2 from "../../assets/img/leftMock2.png";
import rightMock2 from "../../assets/img/rightMock2.png";
import leftMock3 from "../../assets/img/leftMock3.png";
import rightMock3 from "../../assets/img/rightMock3.png";
import ariaHidden from "../../assets/img/ariaHidden.svg";
import moreMoneyStars from "../../assets/img/moreMoneyStars.svg";
import ariaHiddenForDots from "../../assets/img/ariaHiddenForDots.svg";
import moreMoneyDotsInSquare from "../../assets/img/moreMoneyDotsInSquare.png";
import ariaHiddenDotsRight from "../../assets/img/ariaHiddenDotsRight.svg";
import mobRightDots from "../../assets/img/mobRightDots.png";

import {useState} from "react";

export interface MoreMoneyPropsType {
    id: number;
    title: string;
    btnText: string;
    list: string[];
    imageLeft: string;
    imageRight: string
}

const data: MoreMoneyPropsType[] = [
    {
        id: 1,
        title: 'More buddy',
        btnText: 'Chats',
        list: ['Create chats with any business (even if they\'re not on Tinvio)',
            'Fully integrated with your favorite chat apps',
            'Real-time messages and alerts'],
        imageLeft: `${leftMock1}`,
        imageRight: `${rightMock1}`,
    },
    {
        id: 2,
        title: 'More speedy',
        btnText: 'Orders',
        list: ['Create or confirm purchase orders at lightning speed',
            'Manage inventory details and availability in real-time',
            '24/7 order insights and data reports'],
        imageLeft: `${leftMock2}`,
        imageRight: `${rightMock2}`,
    },
    {
        id: 3,
        title: 'More money',
        btnText: 'Payments',
        list: ['Send invoices and easily track them until they\'re paid',
            'Real-time payments settlement and reconciliation',
            'Safe, secure, and compliant'],
        imageLeft: `${leftMock3}`,
        imageRight: `${rightMock3}`,
    }
]
export const MoreMoney = () => {
    const [moreMoneyChoice, setMoreMoneyChoice] = useState(data[0]);

    return (
        <div className={styles.moreMoneyWrapper}>
            <div className={styles.moreMoneyContainer}>
                <div className={styles.moreMoneyInner}>
                    <h3 className={styles.moreMoneyTitle}>
                        <span className={styles.moreMoneyTitleSpan}>Smarter supply chain transactions. </span>
                        <div className={styles.moreMoneyTitleWrap}>
                            <span className={styles.moreMoneyTitleWrapSpan}>{moreMoneyChoice.title}</span>
                        </div>
                    </h3>
                    <div className={styles.moreMoneyButtonsWrapper}>
                        {
                            data.map((item, index) => {
                                return (
                                    <button key={index} onClick={() => setMoreMoneyChoice(item)}
                                            className={item === moreMoneyChoice ? styles.moreMoneyButton107Border : styles.moreMoneyButton107}>
                                        {item.btnText}
                                    </button>
                                )
                            })
                        }
                    </div>
                    <ul className={styles.moreMoneyList}>
                        {moreMoneyChoice.list.map((text, index) => (
                            <li key={index} className={styles.moreMoneyItem}>
                                {text}
                            </li>
                        ))}
                    </ul>
                    <div>
                        <a className={styles.moreMoneyBottomButton} href="/Features">More
                            Features</a>
                    </div>
                </div>
            </div>
            <div className={styles.moreMoneyGreySquare}></div>
            <div className={styles.moreMoneyPurpleSquare}>
                <div className={styles.moreMoneyRedSquare}>
                    <div className={styles.moreMoneyNull}>
                        <div className={styles.moreMoneyLeftMock}>
                            <div className={styles.moreMoneyImageInner}>
                                            <span className={styles.moreMoneyMockSpan}>
                                                <img src={moreMoneyChoice.imageLeft}
                                                     className={styles.moreMoneyMockImage}
                                                     alt="leftMock1"/>
                                            </span>
                            </div>
                        </div>
                        <div className={styles.moreMoneyRightMock}>
                            <div className={styles.moreMoneyImageInner}>
                                            <span className={styles.moreMoneyMockSpan}>
                                                <img src={moreMoneyChoice.imageRight}
                                                     className={styles.moreMoneyMockImage}
                                                     alt="rightMock1"/>
                                            </span>
                            </div>
                        </div>
                        <div className={styles.moreMoneyStars}>
                                        <span className={styles.moreMoneyStarsUpperSpan}>
                                            <span className={styles.moreMoneyStarsBottomSpan}>
                                                <img src={ariaHidden} alt="ariaHidden"
                                                     className={styles.moreMoneyStarsFirstImage}/>
                                            </span>
                                            <img src={moreMoneyStars} alt="moreMoneyStars"
                                                 className={styles.moreMoneyStarsImage}/>
                                        </span>
                        </div>
                        <div className={styles.moreMoneySquareDots}>
                                        <span className={styles.moreMoneyDotsUpperSpan}>
                                            <span className={styles.moreMoneyDotsBottomSpan}>
                                                <img src={ariaHiddenForDots} alt="ariaHiddenForDots"
                                                     className={styles.moreMoneyDotsFirstImage}/>
                                            </span>
                                            <img src={moreMoneyDotsInSquare} alt="moreMoneyDotsInSquare"
                                                 className={styles.moreMoneyDotsImage}/>
                                        </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.moreMoneyDots}>
                            <span className={styles.moreMoneyDotsFirstSpan}>
                                <span className={styles.moreMoneyDotsSecondSpan}>
                                    <img src={ariaHiddenDotsRight} alt="ariaHiddenDotsRight"
                                         className={styles.moreMoneyDotsFirstImageDots}/>
                                </span>
                                <img src={mobRightDots} alt="mobRightDots"
                                     className={styles.moreMoneyDotsSecondImageDots}/>
                            </span>
            </div>
        </div>
    )
}