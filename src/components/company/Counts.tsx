import React, {useEffect, useState} from "react";

import styles from "../../styles/company/counts.module.scss";

import countsHiddenBlock1 from "../../assets/img/countsHiddenBlock1.svg";
import block2Hidden from "../../assets/img/block2Hidden.svg";
import block3Hidden from "../../assets/img/block3Hidden.svg";
import block4Hidden from "../../assets/img/block4Hidden.svg";
import block1Dots from "../../assets/img/block1Dots.png";
import block2Dots from "../../assets/img/block2Dots.png";
import block3Dots from "../../assets/img/block3Dots.png";
import block4Dots from "../../assets/img/block4Dots.png";

export const Counts = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);

    const target1 = 200;
    const target2 = 10;
    const target3 = 5000;
    const target4 = 500;

    useEffect(() => {
        const animateCount = (countRef: any, target: any) => {
            let start = 0;
            const step = () => {
                const count = Math.ceil(start + (target - start) / 10);
                if (count <= target) {
                    countRef(count);
                    start = count;
                    window.requestAnimationFrame(step);
                }
            };
            step();
        };

        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight || document.documentElement.clientHeight;
            const countsElement = document.getElementById("counts");
            // @ts-ignore
            const countsOffsetTop = countsElement.offsetTop;
            if (scrollTop + windowHeight >= countsOffsetTop && scrollTop < countsOffsetTop + windowHeight) {
                animateCount(setCount1, target1);
                animateCount(setCount2, target2);
                animateCount(setCount3, target3);
                animateCount(setCount4, target4);
                window.removeEventListener("scroll", handleScroll);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className={styles.countsWrapper} id="counts">
            <div className={styles.block1}>
                <div className={styles.block1Dots}>
                    <span className={styles.styledSpan}>
                        <span className={styles.styledBottomSpan}>
                            <img src={countsHiddenBlock1} alt="countsHiddenBlock1"
                                 className={styles.styledHiddenImage}/>
                        </span>
                        <img src={block1Dots} alt="block1Dots" className={styles.styledImage}/>
                    </span>
                </div>
                <div className={styles.block1SquareRight}></div>
                <div className={styles.block1SquareBottom}></div>
                <div className={styles.content}>
                    <p className={styles.count}>
                        {count1}
                        <span className={styles.accent}>+</span>
                    </p>
                    <p className={styles.title}>Team Members</p>
                </div>
            </div>
            <div className={styles.block2}>
                <div className={styles.block2Dots}>
                    <span className={styles.styledSpan}>
                        <span className={styles.styledBottomSpan}>
                            <img src={block2Hidden} alt="block2Hidden" className={styles.styledHiddenImage}/>
                        </span>
                        <img src={block2Dots} alt="block2Dots" className={styles.styledImage}/>
                    </span>
                </div>
                <div className={styles.block2SquareLeft}></div>
                <div className={styles.block2SquareLeftBottom}></div>
                <div className={styles.content}>
                    <p className={styles.count}>
                        {count2}
                        <span className={styles.accent}>+</span>
                    </p>
                    <p className={styles.title}>Nationalities</p>
                </div>
            </div>
            <div className={styles.block3}>
                <div className={styles.block3Dots}>
                    <span className={styles.styledSpan}>
                        <span className={styles.styledBottomSpan}>
                            <img src={block3Hidden} alt="block3Hidden" className={styles.styledHiddenImage}/>
                        </span>
                        <img src={block3Dots} alt="block3Dots" className={styles.styledImage}/>
                    </span>
                </div>
                <div className={styles.block3Square}></div>
                <div className={styles.content}>
                    <p className={styles.count}>
                        {count3}
                        <span className={styles.accent}>+</span>
                    </p>
                    <p className={styles.title}>Businesses</p>
                </div>
            </div>
            <div className={styles.block4}>
                <div className={styles.block4Square}></div>
                <div className={styles.block4Dots}>
                    <span className={styles.styledSpan}>
                        <span className={styles.styledBottomSpan}>
                            <img src={block4Hidden} alt="block4Hidden" className={styles.styledHiddenImage}/>
                        </span>
                        <img src={block4Dots} alt="block4Dots" className={styles.styledImage}/>
                    </span>
                </div>
                <div className={styles.content}>
                    <p className={styles.count}>
                        $
                        {count4}
                        <span className={styles.accent}>M</span>
                    </p>
                    <p className={styles.title}>Transactions</p>
                </div>
            </div>
        </section>
    )
}