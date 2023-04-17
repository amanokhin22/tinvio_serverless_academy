import {useState} from "react";

import styles from "../../styles/feature/gallery.module.scss";

import galleryImage1 from "../../assets/img/galleryImage1.jpg";
import galleryImage2 from "../../assets/img/galleryImage2.jpg";
import galleryImage3 from "../../assets/img/galleryImage3.jpg";
import galleryImage4 from "../../assets/img/galleryImage4.jpg";
import galleryHidden from "../../assets/img/galleryHidden.svg";
import galleryDecT from "../../assets/img/galleryDecT.svg";
import galleryDecB from "../../assets/img/galleryDecB.svg";

export interface imagesItems {
    image: string;
    className: string;
    delay: number
}

export const images: imagesItems[] = [
    {
        image: `${galleryImage1}`,
        className: `${styles.firstImg}`,
        delay: 1000,
    },
    {
        image: `${galleryImage2}`,
        className: `${styles.secondImg}`,
        delay: 3000,
    },
]

export const images2: imagesItems[] = [
    {
        image: `${galleryImage3}`,
        className: `${styles.secondImg}`,
        delay: 2000,
    },
    {
        image: `${galleryImage4}`,
        className: `${styles.firstImg}`,
        delay: 4000,
    },

]

export const Gallery = () => {
    const [animationComplete, setAnimationComplete] = useState(false);
    return (
        <section className={styles.styledGallery}>
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
                                        <div className={index === 0 ? image.className : styles.imgDiv}>
                                    <span className={styles.imgSpan}>
                                        <img src={image.image} alt="images"
                                             className={index === 0 ? image.className : styles.img}/>
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
                                        <div className={styles.imgDiv}>
                                    <span className={styles.imgSpan}>
                                        <img src={image.image} alt="images"
                                             className={index === 1 ? image.className : styles.img}/>
                                    </span>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <h2 className={styles.galleryTitle}>
                        <span className={styles.decT}>
                            <span className={styles.styledFirstSpan}>
                                <span className={styles.styledSecondSpan}>
                                    <img src={galleryHidden} alt="galleryHidden" className={styles.styledHiddenImage}/>
                                </span>
                                <img src={galleryDecT} alt="galleryDecT" className={styles.styledImage}/>
                            </span>
                        </span>
                        It's your business. Run it like a rockstar
                        <span className={styles.decB}>
                             <span className={styles.styledFirstSpan}>
                                <span className={styles.styledSecondSpan}>
                                    <img src={galleryHidden} alt="galleryHidden" className={styles.styledHiddenImage}/>
                                </span>
                                <img src={galleryDecB} alt="galleryDecB" className={styles.styledImage}/>
                            </span>
                        </span>
                    </h2>
                </div>
            </div>
        </section>
    )
}