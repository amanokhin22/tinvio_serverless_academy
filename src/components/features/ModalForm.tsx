import styles from "../../styles/modalForm.module.scss";
import close from "../../assets/img/close.svg";
import flagcdn from "../../assets/img/flagcdn.png";
import hands from "../../assets/img/hands.svg";
import {FC} from "react";

export interface FormModalTypes {
    isOpen: boolean;
    onClose: () => void;
}
export const ModalForm: FC<FormModalTypes> = ({onClose, isOpen}) => {
    return (
        <div className={isOpen ? styles.styledModalOpen : styles.styledModal}>
            <div className={styles.modalFormWrapper}>
                <div className={styles.modalContent}>
                    <button className={styles.modalClose} onClick={() => onClose()}>
                                <span className={styles.modalCloseSpan}>
                                    <img src={close} alt="close" className={styles.modalCloseImage}/>
                                </span>
                    </button>
                    <h2 className={styles.modalTitle}>
                        Hi, we're
                        <span className={styles.modalAccent}>Tinvio!</span>
                        And you?
                    </h2>
                    <form className={styles.modalForm}>
                        <label className={styles.FormInputStyled}>
                            Name
                            <input type="text" placeholder="John Appleseed" className={styles.formInput}/>
                        </label>
                        <label className={styles.FormInputStyled}>
                            Business Name
                            <input type="text" placeholder="Burgers & Boba (Singapore)"
                                   className={styles.formInput}/>
                        </label>
                        <label className={styles.FormInputStyled}>
                            Phone
                            <div className={styles.phoneInputContainer}>
                                <div className={styles.phoneInputFlagContainer}>
                                    <img src={flagcdn} alt="flagcdn" className={styles.phoneInputFlag}/>
                                    <span className={styles.countryCode}>+65</span>
                                </div>
                                <input type="tel" placeholder="9123 4567" className={styles.formInput}/>
                            </div>
                        </label>
                        <button className={styles.formFillingButton}>
                            Submit
                            <svg xmlns='http://www.w3.org/2000/svg' className={styles.formFillingSvg}>
                                <g>
                                    <ellipse className={styles.firstEllipse} ry='23.5' rx='23.5' cy='24'
                                             cx='24'></ellipse>
                                    <ellipse className={styles.secondEllipse} ry='23' rx='23' cy='24'
                                             cx='24'></ellipse>
                                </g>
                            </svg>
                        </button>
                        <div className={styles.formFillingSpam}>
                            No spam, promise
                            <div className={styles.formFillingHands}>
                                            <span className={styles.formFillingHandsSpan}>
                                                <img src={hands} alt="hands" className={styles.formFillingHandsImage}/>
                                            </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}