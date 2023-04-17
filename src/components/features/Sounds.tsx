import styles from "../../styles/feature/sounds.module.scss";

import soundHiddenImage from "../../assets/img/soundHiddenImage.svg";
import soundsDots from "../../assets/img/soundsDots.png";
import {useState} from "react";
import {ModalForm} from "./ModalForm";

export const Sounds = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
        setIsOpen(true);
    }
    const handleCloseModal = () => {
        setIsOpen(false);
    }

    return (
        <section className={styles.styledSounds}>
            {
                isOpen ? <ModalForm isOpen={isOpen} onClose={handleCloseModal}/> : ""
            }
            <div className={styles.flexConInfo}>
                <div className={styles.fullConDec}>
                    <div className={styles.fullConDecDots}>
                        <span className={styles.styledFirstSpan}>
                            <span className={styles.styledSecondSpan}>
                                <img src={soundHiddenImage} alt="soundHiddenImage"
                                     className={styles.styledHiddenImage}/>
                            </span>
                            <img src={soundsDots} alt="soundsDots" className={styles.styledImage}/>
                        </span>
                    </div>
                </div>
                <div className={styles.soundsFeaturesCon}>
                    <div className={styles.soundsCon}>
                        <h3 className={styles.soundsTitle}>Sounds easy? Supply chain transactions
                            don't have to be complicated</h3>
                        <button
                            onClick={handleOpenModal}
                            className={styles.soundsButton}>Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    )
}