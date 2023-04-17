import styles from "../../styles/home/featuredOn.module.scss";

import featuredOnAriaHidden from "../../assets/img/featuredOnAriaHidden.svg";
import featuredOnDots from "../../assets/img/featuredOnDots.png";
import techCrunch from "../../assets/img/techCrunch.svg";
import techInAsia from "../../assets/img/techInAsia.svg";
import pymnts from "../../assets/img/pymnts.svg";
import ventureBeat from "../../assets/img/ventureBeat.svg";

export const FeaturedOn = () => {
    return (
        <div className={styles.featuredOnStyler}>
            <div className={styles.featuredOnStars}></div>
            <div className={styles.featuredOnWrapper}>
                <div className={styles.featuredOnGreySquare}></div>
                <div className={styles.featuredOnGreySquareRight}></div>
                <div className={styles.featuredOnDots}>
                    <span className={styles.featuredOnDotsSpan}>
                        <span className={styles.featuredOnDotsSecondSpan}>
                            <img src={featuredOnAriaHidden} alt="featuredOnAriaHidden"
                                 className={styles.featuredOnDotsImageUnderSpan}/>
                        </span>
                        <img src={featuredOnDots} alt="featuredOnDots" className={styles.featuredOnDotsImage}/>
                    </span>
                </div>
                <div className={styles.featuredOnDivideLine}></div>
                <div className={styles.featuredOnContainer}>
                    <div className={styles.featuredOnInner}>
                        <h4 className={styles.featuredOnTitle}> Featured On </h4>
                        <div className={styles.featuredOnCompanies}>
                            <img src={techCrunch} className={styles.featuredOnCompaniesImages} alt="techCrunch"/>
                            <img src={techInAsia} className={styles.featuredOnCompaniesImages} alt="techInAsia"/>
                            <img src={pymnts} className={styles.featuredOnCompaniesImages} alt="pymnts"/>
                            <img src={ventureBeat} className={styles.featuredOnCompaniesImages} alt="ventureBeat"/>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}