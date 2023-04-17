import styles from "../../styles/feature/styledTools.module.scss";

import manageHidden from "../../assets/img/manageHidden.svg";
import manage from "../../assets/img/manage.png";
import hiddenDecDots from "../../assets/img/hiddenDecDots.svg";
import manageDots from "../../assets/img/manageDots.png";
import hiddenMessage from "../../assets/img/hiddenMessage.svg";
import messageDots from "../../assets/img/messageDots.png";
import hiddenButton1 from "../../assets/img/hiddenButton1.svg";
import pin from "../../assets/img/pin.svg";
import file from "../../assets/img/file.svg";
import hiddenDollar from "../../assets/img/hiddenDollar.svg";
import dollar from "../../assets/img/dollar.svg";
import hiddenInvoiceDots from "../../assets/img/hiddenInvoiceDots.svg";
import invoiceDots from "../../assets/img/invoiceDots.png";
import shareHiddenDots from "../../assets/img/shareHiddenDots.svg";
import shareDots from "../../assets/img/shareDots.png";
import hiddenUp from "../../assets/img/hiddenUp.svg";
import hiddenShare from "../../assets/img/hiddenShare.svg";
import share from "../../assets/img/share.svg";
import hiddenDots1 from "../../assets/img/hiddenDots1.svg";
import shareDots1 from "../../assets/img/shareDots1.png";
import hiddenDots2 from "../../assets/img/hiddenDots2.svg";
import invoiceDots1 from "../../assets/img/invoiceDots1.png";

export const StyledTools = () => {
    return (
        <section className={styles.styledTools}>
            <div className={styles.fullCon}>
                <div className={styles.toolsManage}>
                    <h3 className={styles.manageTitle}>Manage orders</h3>
                    <p className={styles.manageText}>Yay, you've got a new order! Check and confirm the order in
                        lightning speed</p>
                    <span className={styles.manageSpan}>
                        <span className={styles.manageBottomSpan}>
                            <img src={manageHidden} alt="manageHidden" className={styles.manageHiddenImage}/>
                        </span>
                        <img src={manage} alt="manage" className={styles.manageImage}/>
                    </span>
                    <div className={styles.manageDec}>
                        <div className={styles.manageDecDots}>
                            <span className={styles.decDotsSpan}>
                                <span className={styles.decDotsBottomSpan}>
                                    <img src={hiddenDecDots} alt='hiddenDecDots' className={styles.decDotsHiddenImage}/>
                                </span>
                            </span>
                            <img src={manageDots} alt="manageDots" className={styles.decDotsImage}/>
                        </div>
                    </div>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.message}>
                        <div className={styles.messageDec}>
                            <div className={styles.messageDecDots}>
                                <span className={styles.decDotsSpan}>
                                <span className={styles.decDotsBottomSpan}>
                                    <img src={hiddenMessage} alt="hiddenMessage" className={styles.decDotsHiddenImage}/>
                                </span>
                                <img src={messageDots} alt="messageDots" className={styles.decDotsImage}/>
                            </span>
                            </div>
                        </div>
                        <form className={styles.messageButtons}>
                            <button disabled={true} className={styles.messageButton}>
                                <span className={styles.decDotsSpan}>
                                    <span className={styles.decDotsBottomSpan}>
                                        <img src={hiddenButton1} alt="hiddenButton1"
                                             className={styles.decDotsHiddenImage}/>
                                    </span>
                                    <img src={pin} alt="pin" className={styles.decDotsImage}/>
                                </span>
                            </button>
                            <button disabled={true} className={styles.messageButton}>
                                <span className={styles.decDotsSpan}>
                                    <span className={styles.decDotsBottomSpan}>
                                        <img src={hiddenButton1} alt="hiddenButton1"
                                             className={styles.decDotsHiddenImage}/>
                                    </span>
                                    <img src={file} alt="file" className={styles.decDotsImage}/>
                                </span>
                            </button>
                            <label className={styles.label}>
                                <input className={styles.messageInput} placeholder="Type something..." disabled={true}/>
                            </label>
                        </form>
                        <h3 className={styles.messageTitle}>Send Messages</h3>
                    </div>
                    <div className={styles.wrapperLine2}>
                        <div className={styles.share}>
                            <div className={styles.mobileWrapper}>
                                <div className={styles.invoiceBlock1}>
                                    <div className={styles.invoiceBlock2}>
                                        <span className={styles.decDotsSpan}>
                                            <span className={styles.decDotsBottomSpan}>
                                                <img src={hiddenDollar} alt="hiddenDollar"
                                                     className={styles.decDotsHiddenImage}/>
                                            </span>
                                            <img src={dollar} alt="dollar" className={styles.decDotsImage}/>
                                        </span>
                                    </div>
                                </div>
                                <h3 className={styles.invoiceTitle}>Create Invoices</h3>
                                <div className={styles.invoiceDec}>
                                    <div className={styles.invoiceDecDots}>
                                        <span className={styles.decDotsSpan}>
                                            <span className={styles.decDotsBottomSpan}>
                                                <img src={hiddenInvoiceDots} alt="hiddenInvoiceDots"
                                                     className={styles.decDotsHiddenImage}/>
                                            </span>
                                            <img src={invoiceDots} alt="invoiceDots" className={styles.decDotsImage}/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.notMobileWrapper}>
                                <div className={styles.shareDec}>
                                    <div className={styles.shareDecDots}>
                                        <span className={styles.decDotsSpan}>
                                            <span className={styles.decDotsBottomSpan}>
                                                <img src={shareHiddenDots} alt="shareHiddenDots"
                                                     className={styles.decDotsHiddenImage}/>
                                            </span>
                                            <img src={shareDots} alt="shareDots" className={styles.decDotsImage}/>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.shareBlock1}>
                                    <span className={styles.decDotsSpan}>
                                            <span className={styles.decDotsBottomSpan}>
                                                <img src={hiddenUp} alt="hiddenUp"
                                                     className={styles.decDotsHiddenImage}/>
                                            </span>
                                            <img src={share} alt="share" className={styles.decDotsImage}/>
                                        </span>
                                </div>
                                <h3 className={styles.shareTitle}>Share Payments Links</h3>
                            </div>
                        </div>
                        <div className={styles.invoices}>
                            <div className={styles.mobileWrapper}>
                                <div className={styles.shareDec}>
                                    <div className={styles.shareDecDots}>
                                       <span className={styles.decDotsSpan}>
                                            <span className={styles.decDotsBottomSpan}>
                                                <img src={hiddenDots1} alt="hiddenDots1"
                                                     className={styles.decDotsHiddenImage}/>
                                            </span>
                                            <img src={shareDots1} alt="shareDots1" className={styles.decDotsImage}/>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.shareBlock1}>
                                    <span className={styles.decDotsSpan}>
                                            <span className={styles.decDotsBottomSpan}>
                                                <img src={hiddenShare} alt="hiddenDots1"
                                                     className={styles.decDotsHiddenImage}/>
                                            </span>
                                            <img src={share} alt="share" className={styles.decDotsImage}/>
                                        </span>
                                </div>
                                <h3 className={styles.shareTitle}>Share Payments Links</h3>
                            </div>
                            <div className={styles.notMobileWrapper}>
                                <h3 className={styles.invoiceTitle}>Create Invoices</h3>
                                <div className={styles.invoiceBlock1}>
                                    <div className={styles.invoiceBlock2}>
                                    <span className={styles.decDotsSpan}>
                                            <span className={styles.decDotsBottomSpan}>
                                                <img src={hiddenDollar} alt="hiddenDots1"
                                                     className={styles.decDotsHiddenImage}/>
                                            </span>
                                            <img src={dollar} alt="dollar" className={styles.decDotsImage}/>
                                        </span>
                                    </div>
                                </div>
                                <div className={styles.invoicesDec}>
                                    <div className={styles.invoicesDecDots}>
                                   <span className={styles.decDotsSpan}>
                                            <span className={styles.decDotsBottomSpan}>
                                                <img src={hiddenDots2} alt="hiddenDots2"
                                                     className={styles.decDotsHiddenImage}/>
                                            </span>
                                            <img src={invoiceDots1} alt="invoiceDots1" className={styles.decDotsImage}/>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}