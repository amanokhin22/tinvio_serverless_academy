import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

import {LanguagePicker} from "./home/LanguagePicker";
import {SocialMedia} from "./home/SocialMedia";

import styles from "../styles/home/home.module.scss";
import littleOctopus from "../assets/img/littleOctopus.svg";
import tinvio from "../assets/img/tinvio.svg";
import close from "../assets/img/close.svg";
import burgerMenu from "../assets/img/burgerMenu.svg";
import mobileDotsLeft from "../assets/img/mobileDotsLeft.png";
import mobileDotsRight from "../assets/img/mobileDotsRight.png";
import {ModalForm} from "./features/ModalForm";

export const Header = () => {

    const [burgerOpened, setBurgerOpened] = useState(false);
    const [colorAfterScroll, setColorAfterScroll] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    }
    const handleCloseModal = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        const changeColorBtn = () => {
            if (window.scrollY >= 24) {
                setColorAfterScroll(true)
            } else {
                setColorAfterScroll(false)
            }
        }
        window.addEventListener('scroll', changeColorBtn)
        return () => window.removeEventListener('scroll', changeColorBtn)
    }, [])

    return (
        <header
            className={styles.header + " " + (burgerOpened ? styles.headerBgBurger : "") + " " + (colorAfterScroll ? styles.headerBg : "")}>
            {
                isOpen ? <ModalForm isOpen={isOpen} onClose={handleCloseModal}/> : ""
            }
            <div className={styles.container}>
                <div className={styles.navbar}>
                    <div className={styles.leftWrapper}>
                        <div className={styles.logoInner}>
                            <img src={littleOctopus} className={styles.navbar__image}
                                 alt="header octopus" width={50.43} height={44}/>
                            <img src={tinvio} className={styles.logoText} alt='tinvio'/>
                        </div>
                        <div
                            className={burgerOpened ? styles.languageWrapperShow + ' ' + styles.languageWrapper : styles.languageWrapper}>
                            <LanguagePicker/>
                        </div>
                    </div>
                    <div
                        className={burgerOpened ? styles.headerNavWrapper + ' ' + styles.headerNavWrapperShow : styles.headerNavWrapper}>
                        <div className={styles.mobileLinksDotsLeft}>
                            <span className={styles.mobileLinksDotsLeftSpan}>
                                <img src={mobileDotsLeft} className={styles.mobileLinksDotsLeftImage}
                                     alt="mobileDotsLeft"/>
                            </span>
                        </div>
                        <ul className={burgerOpened ? styles.headerNav + ' ' + styles.headerNavShow : styles.headerNav}>
                            <li className={styles.itemNav}>
                                <Link className={styles.itemLink} to={'/'}> Home</Link>
                            </li>
                            <li className={styles.itemNav}>
                                <Link className={styles.itemLink} to={'/Features'}> Features</Link>
                            </li>
                            <li className={styles.itemNav}>
                                <Link className={styles.itemLink} to={'/Company'}>Company</Link>
                            </li>
                        </ul>
                        <div className={styles.headerButtonWrapper}>
                            <button
                                onClick={handleOpenModal}
                                className={colorAfterScroll ? styles.getStartedButton + ' ' + styles.getStartedButtonBg : styles.getStartedButton}>
                                Get Started
                            </button>
                        </div>
                        <div
                            className={burgerOpened ? styles.socialInBurger + ' ' + styles.socialInBurgerOpened : styles.socialInBurger}>
                            <SocialMedia/>
                        </div>
                        <div className={styles.mobileLinksDotsRight}>
                            <span className={styles.mobileLinksDotsRightSpan}>
                                <img src={mobileDotsRight} className={styles.mobileLinksDotsRightImage}
                                     alt="mobileDotsRight"/>
                            </span>
                        </div>
                    </div>
                    <span className={styles.burger} onClick={() => setBurgerOpened(!burgerOpened)}>
                                {burgerOpened
                                    ? <img src={close} alt={close}/>
                                    : <img src={burgerMenu} alt={burgerMenu}/>}
                            </span>
                </div>
            </div>
        </header>
    )
}