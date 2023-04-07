import React, {useRef} from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import {Swiper as SwiperType, Navigation, Pagination, Scrollbar, A11y} from "swiper";

import styles from "../../styles/whyChoose.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import flexibleDotsRight from "../../assets/img/flexibleDotsRight.png";
import flexibleDotsLeft from "../../assets/img/flexibleDotsLeft.svg";
import flexibleDotsUpLeft from "../../assets/img/flexibleDotsUpLeft.svg";
import spoon from "../../assets/slides/spoon.png";
import cup from "../../assets/slides/cup.png";
import milk from "../../assets/slides/milk.png";
import eggs from "../../assets/slides/eggs.png";
import sejadah from "../../assets/slides/sejadah.png";
import moonleaf from "../../assets/slides/moonleaf.png";
import paithang from "../../assets/slides/paithang.png";
import baker from "../../assets/slides/baker.png";
import quotes from "../../assets/slides/quotes.svg";

export interface slidesItems {
    text: string;
    imageLogo: string;
    companyName: string;
    owners: string;
    designationImage: string;
    children?: JSX.Element | JSX.Element[];
    //children?: ReactNode | ((slideData: SlideData) => ReactNode);
}

export const slides: slidesItems[] = [
    {
        text: "Tinvio has been a foundational partner and solution. " +
            "We now have faster and more efficient communication with our clients, " +
            "which makes order processing and deliveries smoother than ever before.",
        imageLogo: `${sejadah}`,
        companyName: "Hafidz & Indah",
        owners: "Owners (Sejadah Grocery)",
        designationImage: `${spoon}`,
    },
    {
        text: "With Tinvio, it's easier for my customers to make payments across various methods. " +
            "Every payment is also collected in one business account where funds can be withdrawn " +
            "instantly at any time.",
        imageLogo: `${moonleaf}`,
        companyName: "Pauline Limgenco",
        owners: "Director (Moonleaf)",
        designationImage: `${cup}`,
    },
    {
        text: "Tinvio helps our business run smoother. " +
            "We can manage our customer's orders, receivables, and most importantly, " +
            "trace and reconcile their payments without checking banking apps or statements.",
        imageLogo: `${paithang}`,
        companyName: "Punnasiri Chaipatikul",
        owners: "Business Development Manager (Phaitong Station)",
        designationImage: `${milk}`,
    },
    {
        text: "Tinvio definitely helps to reduce the time and errors in order management " +
            "between customers and suppliers. It’s super easy to use and available on " +
            "mobile and web, and the team are friendly and always helpful.",
        imageLogo: `${baker}`,
        companyName: "Fathira Dida",
        owners: "Owner (Baker Old)",
        designationImage: `${eggs}`,
    },
]

export const WhyChoose = () => {

    const swiperNavPrevRef = useRef<SwiperType>()
    const swiperNavNextRef = useRef<SwiperType>()
    return (
        <div className={styles.whyChooseStyled}>
            <div className={styles.flexibleBackgroundStyled}>
                <div className={styles.flexibleBackgroundContainer}>
                    <div className={styles.flexibleRotateSquare1}></div>
                    <div className={styles.flexibleRotateSquare2}></div>
                    <div className={styles.flexibleDotsRight}>
                        <span>
                            <img src={flexibleDotsRight} alt="flexibleDotsRight"/>
                        </span>
                    </div>
                    <div className={styles.flexibleDotsLeft}>
                        <span>
                            <img className={styles.flexibleDotsLeftImage} src={flexibleDotsLeft}
                                 alt="flexibleDotsLeft"/>
                        </span>
                    </div>
                    <div className={styles.flexibleDotsUpLeft}>
                        <span>
                            <img src={flexibleDotsUpLeft} alt="flexibleDotsUpLeft"/>
                        </span>
                    </div>
                </div>
            </div>
            <div className={styles.featuresContainer}>
                <h3 className={styles.featuresTitle}>Why choose Tinvio?</h3>
                <div className={styles.swiperWrapper}>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={5}
                        loop={true}
                        pagination={{clickable: true}}
                        breakpoints={{
                            1920: {
                                slidesPerView: 1,
                            },
                            1440: {
                                slidesPerView: 1,
                            },
                            1280: {
                                slidesPerView: 1,
                            }, 1024: {
                                slidesPerView: 1,
                            }, 768: {
                                slidesPerView: 1,
                            },
                            375: {
                                slidesPerView: 1,
                            },
                        }}
                        slidesPerView={1}
                        onBeforeInit={(swiper) => {
                            swiperNavPrevRef.current = swiper;
                            swiperNavNextRef.current = swiper;
                        }
                        }
                    >
                        <>
                            {
                                slides.map((slide, index) =>
                                    <SwiperSlide key={index}>
                                        <div className={styles.imageWrapper}>
                                            <div className={styles.imageContainer}>
                                                <div className={styles.leftWrapperImage}>
                                                    <div className={styles.upperTextContainer}>
                                                        <p className={styles.upperText}> {slide.text} </p>
                                                        <span className={styles.quotesContainer}>
                                                                <img src={quotes} className={styles.quotes}
                                                                     alt="quotes"/>
                                                            </span>
                                                    </div>
                                                    <div className={styles.bottomTextContainer}>
                                                        <span className={styles.sejadahImage}>
                                                                <img src={slide.imageLogo} alt="sejadah"/>
                                                        </span>
                                                        <div className={styles.ownersContainer}>
                                                            <span
                                                                className={styles.spanTitle}>{slide.companyName}</span>
                                                            <span className={styles.spanOwners}>{slide.owners}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div>
                                                    <img className={styles.Image} src={slide.designationImage}
                                                         alt="spoon"/>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            }
                        </>
                        <div className={`${styles.swiperNavPrev}`}
                             onClick={() => swiperNavPrevRef.current?.slidePrev()}
                        >
                        </div>
                        <div className={`${styles.swiperNavNext}`}
                             onClick={() => swiperNavNextRef.current?.slideNext()}>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}