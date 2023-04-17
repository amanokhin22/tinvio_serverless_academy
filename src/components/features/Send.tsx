import styles from "../../styles/feature/send.module.scss";

import womenLaptop from "../../assets/img/womenLaptop.jpg";
import sendArrow from "../../assets/img/sendArrow.svg";
import bell from "../../assets/img/bell.svg";
import check from "../../assets/img/check.svg";
import mobileLine1 from "../../assets/img/mobileLine1.svg";
import mobileLine2 from "../../assets/img/mobileLine2.svg";
import line1 from "../../assets/img/line1.svg";
import line2 from "../../assets/img/line2.svg";
import invoice from "../../assets/img/invoice.png";
import reminde from "../../assets/img/reminde.png";
export const Send = () => {
    return (
        <section className={styles.styledSend}>
            <div className={styles.sendCon}>
                <div className={styles.sendInfo}>
                    <h2 className={styles.sendTitle}>Send invoices, save the trees</h2>
                    <p className={styles.sendText}>
                        Send invoices digitally, and track them all
                        the way until they're paid. It's easier to
                        reconcile and more organized than printouts.
                        If they're overdue, automatically send a friendly
                        reminder or two!</p>
                </div>
            </div>
            <div className={styles.containerFeaturesCon}>
                <div className={styles.previewImg}>
                    <picture>
                        <img src={womenLaptop} alt='women' className={styles.womenLaptop} loading='lazy'/>
                    </picture>
                    <img src={invoice} alt='invoice' className={styles.invoiceImg} loading='lazy'/>
                    <img src={reminde} alt='reminde' className={styles.remindImg} loading='lazy'/>
                    <div className={styles.invoice}>
                        <div className={styles.invoiceCon}>
                            <div className={styles.invoiceInfo}>
                                <p className={styles.invoiceTitle}>Send an invoice for this order</p>
                                <p className={styles.invoiceText}>Need a template?
                                <span className={styles.invoiceSpan}> Generate Invoice</span>
                                    <img src={sendArrow} alt='sendArrow' className={styles.invoiceArrow}/>
                                </p>
                            </div>
                            <button className={styles.invoiceButton}>Send Invoice</button>
                        </div>
                    </div>
                    <div className={styles.remind}>
                        <div className={styles.remindInfo}>
                            <img src={bell} alt="bell" className={styles.remindBell} loading='lazy'/>
                            <p className={styles.remindTitle}>Send Reminders</p>
                        </div>
                        <img src={check} alt="check" className={styles.remindCheck} loading='lazy'/>
                    </div>
                    <img src={mobileLine1} alt="mobileLine1" className={styles.mobileLine1} loading='lazy'/>
                    <img src={mobileLine2} alt="mobileLine2" className={styles.mobileLine2} loading='lazy'/>
                    <img src={line1} alt="mobileLine1" className={styles.line1} loading='lazy'/>
                    <img src={line2} alt="mobileLine1" className={styles.line2} loading='lazy'/>
                </div>
            </div>
        </section>
    )
}