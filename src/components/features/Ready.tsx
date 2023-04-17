import {useState} from "react";
import {ModalForm} from "./ModalForm";

import styles from "../../styles/feature/ready.module.scss";

import readyHidden from "../../assets/img/readyHidden.svg";
import readyHidden1 from "../../assets/img/readyHidden1.svg";
import readyDotsL from "../../assets/img/readyDotsL.png";
import readyDotsR from "../../assets/img/readyDotsR.png";

export const Ready = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    }
    const handleCloseModal = () => {
        setIsOpen(false);
    }
    return (
        <section className={styles.styledReady}>
            {
                isOpen ? <ModalForm isOpen={isOpen} onClose={handleCloseModal}/> : ""
            }
            <div className={styles.flexCoInfo}>
                <div className={styles.fullConDec}>
                    <div className={styles.dotsL}>
                        <span className={styles.styledFirstSpan}>
                            <span className={styles.styledSecondSpan}>
                                <img src={readyHidden} alt="readyHidden" className={styles.styledHiddenImage}/>
                            </span>
                            <img src={readyDotsL} alt="readyDotsL" className={styles.styledImage}/>
                        </span>
                    </div>
                    <div className={styles.dotsR}>
                        <span className={styles.styledFirstSpan}>
                            <span className={styles.styledSecondSpan}>
                                <img src={readyHidden1} alt="readyHidden1" className={styles.styledHiddenImage}/>
                            </span>
                            <img src={readyDotsR} alt="readyDotsR" className={styles.styledImage}/>
                        </span>
                    </div>
                </div>
                <div className={styles.featuresCon}>
                    <div className={styles.readyCon}>
                        <p className={styles.readyText}>Are you ready?</p>
                        <h3 className={styles.readyTitle}>Supercharge your business, the Tinvio way.</h3>
                        <button
                            onClick={handleOpenModal}
                            className={styles.readyButton}>Get Started
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}