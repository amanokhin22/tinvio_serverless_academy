import {useState} from "react";

import styles from "../../styles/company/role.module.scss";

import roleHidden from "../../assets/img/roleHidden.svg";
import roleHidden1 from "../../assets/img/roleHidden1.svg";
import roleDots from "../../assets/img/roleDots.png";
import roleStars from "../../assets/img/roleStars.svg";
import role1 from "../../assets/img/role1.jpg";
import role2 from "../../assets/img/role2.jpg";
import role3 from "../../assets/img/role3.jpg";
import role4 from "../../assets/img/role4.jpg";

export interface imagesItems {
    image: string;
    className: string;
    delay: number
}

export const images: imagesItems[] = [
    {
        image: `${role1}`,
        className: `${styles.firstImg}`,
        delay: 1000,
    },
    {
        image: `${role2}`,
        className: `${styles.secondImg}`,
        delay: 3000,
    },
]

export const images2: imagesItems[] = [
    {
        image: `${role3}`,
        className: `${styles.thirdImg}`,
        delay: 2000,
    },
    {
        image: `${role4}`,
        className: `${styles.fourthImg}`,
        delay: 4000,
    },

]

export const Role = () => {
    const [animationComplete, setAnimationComplete] = useState(false);
    return (
        <section className={styles.roleWrapper}>
            <div className={styles.square}></div>
            <div className={styles.dots}>
                <span className={styles.styledSpan}>
                    <span className={styles.styledBottomSpan}>
                        <img src={roleHidden} alt="hidden" className={styles.styledHiddenImage}/>
                    </span>
                    <img src={roleDots} alt="roleDots" className={styles.styledImage}/>
                </span>
            </div>
            <div className={styles.containerFeaturesCon}>
                <div className={styles.galleryCon}>
                    <div className={styles.galleryGrid}>
                        <div className={styles.galleryColumn}>
                            {
                                images.map((image, index) =>
                                    <div
                                        key={index}
                                        className={styles.fadeInWrapper}
                                        style={{
                                            animationDelay: `${image.delay}ms`,
                                            animationFillMode: animationComplete ? "forwards" : "",
                                            visibility: animationComplete ? "visible" : "hidden",
                                            opacity: animationComplete ? 1 : 0,
                                            display: "grid"
                                        }}
                                        onAnimationEnd={() => {
                                            if (index === images.length - 1) {
                                                setAnimationComplete(true);
                                            }
                                        }}
                                    >
                                        <div className={index === 0 ? image.className : styles.galleryImg}>
                                    <span className={styles.aloneSpan}>
                                        <img src={image.image} alt="images"
                                             className={index === 0 ? image.className : styles.aloneImage}/>
                                    </span>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                        <div className={styles.galleryColumn}>
                            {
                                images2.map((image, index) =>
                                    <div
                                        key={index}
                                        className={styles.fadeInWrapper}
                                        style={{
                                            animationDelay: `${image.delay}ms`,
                                            animationFillMode: animationComplete ? "forwards" : "",
                                            visibility: animationComplete ? "visible" : "hidden",
                                            opacity: animationComplete ? 1 : 0,
                                            display: "grid"
                                        }}
                                        onAnimationEnd={() => {
                                            if (index === images2.length - 1) {
                                                setAnimationComplete(true);
                                            }
                                        }}
                                    >
                                        <div className={index === 0 ? image.className : styles.galleryImg}>
                                    <span className={styles.aloneSpan}>
                                        <img src={image.image} alt="images"
                                             className={index === 0 ? image.className : styles.aloneImage}/>
                                    </span>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div className={styles.content}>
                        <h2 className={styles.title}>
                            <span className={styles.titleDec}>
                                <span className={styles.styledSpan}>
                                    <span className={styles.styledBottomSpan}>
                                        <img src={roleHidden1} alt='hidden' className={styles.styledHiddenImage}/>
                                    </span>
                                    <img src={roleStars} alt="roleStars" className={styles.styledImage}/>
                                </span>
                            </span>
                            Global, local, remote. Find the perfect role
                        </h2>
                        <a href="https://www.linkedin.com/company/tinvio/jobs/" className={styles.roleLink} target="_blank" rel="noreferrer noopener">Explore Roles</a>
                    </div>
                </div>
            </div>
        </section>
    )
}