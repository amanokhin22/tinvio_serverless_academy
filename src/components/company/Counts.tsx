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
    return (
        <section className={styles.countsWrapper}>
            <div className={styles.block1}>
                <div className={styles.block1Dots}>
                    <span className={styles.styledSpan}>
                        <span className={styles.styledBottomSpan}>
                            <img src={countsHiddenBlock1} alt="countsHiddenBlock1" className={styles.styledHiddenImage}/>
                        </span>
                        <img src={block1Dots} alt="block1Dots" className={styles.styledImage}/>
                    </span>
                </div>
                <div className={styles.block1SquareRight}></div>
                <div className={styles.block1SquareBottom}></div>
                <div className={styles.content}>
                    <p className={styles.count}>
                        200
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
                        10
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
                        5000
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
                        500
                        <span className={styles.accent}>M</span>
                    </p>
                    <p className={styles.title}>Transactions</p>
                </div>
            </div>
        </section>
    )
}