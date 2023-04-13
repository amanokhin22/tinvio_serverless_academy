import {useState} from "react";

import {Header} from "../Header";
import {Footer} from "../Footer";
import {ModalForm} from "./ModalForm";
import {SuperCharge} from "./SuperCharge";

import styles from "../../styles/features.module.scss";
import dec1 from "../../assets/img/dec1.svg";
import dec2 from "../../assets/img/dec2.svg";
import man from "../../assets/img/man.jpg";
import man1280 from "../../assets/img/man1280.jpg";
import man1920 from "../../assets/img/man1920.jpg";
import man1024 from "../../assets/img/man1024.jpg";
import man768 from "../../assets/img/man768.jpg";
import man1440 from "../../assets/img/man1440.jpg";
import appShadow from "../../assets/img/appShadow.png";
import request from "../../assets/img/request.png";
import rightLine from "../../assets/img/rightLine.svg";
import leftLine from "../../assets/img/leftLine.svg";
import {StyledTools} from "./StyledTools";
import {Breeze} from "./Breeze";
import {Sounds} from "./Sounds";

export const Features = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    }
    const handleCloseModal = () => {
        setIsOpen(false);
    }
    return (
        <div>
            <main className={styles.main}>
                {
                    isOpen ? <ModalForm isOpen={isOpen} onClose={handleCloseModal}/> : ""
                }
                <Header/>
                <section className={styles.preview}>
                    <div className={styles.previewContainer}>
                        <div className={styles.previewInfo}>
                            <h2 className={styles.previewTitle}>
                                <picture className={styles.previewDec1}>
                                    <source srcSet={dec1} media='(min-width: 1024px)'/>
                                    <img src={dec1} alt="dec1" className={styles.previewDec1}/>
                                </picture>
                                One dashboard, all your supply chain transactions
                                <picture className={styles.previewDec2}>
                                    <source srcSet={dec2} media='(min-width: 1024px)'/>
                                    <img src={dec2} alt="dec2" className={styles.previewDec2}/>
                                </picture>
                            </h2>
                            <p className={styles.previewText}>
                                From orders to real-time cash in your bank. Run your business like a rockstar.
                            </p>
                            <button className={styles.previewButton}
                                    onClick={handleOpenModal}
                            >Try It for Free
                            </button>
                            <div className={styles.previewImage}>
                                <picture>
                                    <source srcSet={man1920} media='min-width: 1920px'/>
                                    <source srcSet={man1440} media='min-width: 1440px'/>
                                    <source srcSet={man1280} media='min-width: 1280px'/>
                                    <source srcSet={man1024} media='min-width: 1024px'/>
                                    <source srcSet={man768} media='min-width: 768px'/>
                                    <img src={man} className={styles.previewImageMan} alt="man holding phone"/>
                                </picture>
                                <img src={appShadow} className={styles.previewAppImg} alt="appShadow"/>
                                <img src={request} className={styles.previewRequestImg} alt="request"/>
                                <img src={leftLine} className={styles.previewLeftLine} alt="leftLine"/>
                                <img src={rightLine} className={styles.previewRightLine} alt="rightLine"/>
                                <div className={styles.previewImgDec3}></div>
                            </div>
                        </div>
                    </div>
                </section>
                <SuperCharge/>
                <StyledTools/>
                <Breeze/>
                <Sounds/>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <Footer/>
            </main>
        </div>
    )
}