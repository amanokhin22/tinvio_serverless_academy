import styles from "../../styles/feature/faq.module.scss";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import faqDotsL from "../../assets/img/faqDotsL.png";
import faqHiddenImage from "../../assets/img/faqHiddenImage.svg";
import faqDotsR from "../../assets/img/faqDotsR.png";

export interface accordionItems {
    title: string;
    text: string;
}

export const accordion: accordionItems[] = [
    {
        title: "How to get started with Tinvio?",
        text: "You can create an account on Tinvio (dashboard or mobile app) within a minute to start " +
            "managing chats, orders, and invoices. For payments, our Customer Success team will reach out " +
            "for account verification and onboarding. Once verified, you'll be good to go!\n" +
            "\n",
    },
    {
        title: "How does Tinvio work?",
        text: "This dashboard is an easy all-in-one interface for you to manage chats, orders, invoices, " +
            "and payments with your merchants. Merchants just need to download the free Tinvio mobile app " +
            "to exchange messages, place orders, and make payments. It’s zero friction for them!",
    },
    {
        title: "How to collect payments on Tinvio?",
        text: "Once your account is verified, you'll be able to request and reconcile payments for all your " +
            "orders and invoices on Tinvio. Your merchants will receive notifications for each payment request " +
            "in their favorite channels (e.g. Tinvio app, WhatsApp), and they'll be able to complete payment in " +
            "a fast and flexible checkout experience. You'll receive real-time updates and reports for all your payments!",
    },
    {
        title: "What are the supported payment methods?",
        text: "We’re always enabling new payment methods. Our Customer Success teams will advise on the available " +
            "methods in your market (including transaction fees for that method). In general, we support bank transfers, " +
            "credit cards, and B2B BNPL options!",
    },
    {
        title: "I have more product questions! Who do I contact?",
        text: "If you're already signed up, you can live chat with `Team Tinvio` in the dashboard or mobile app. " +
            "Otherwise, you can contact us at support@tinvio.com for more information!",
    },
]

export const Faq = () => {
    return (
        <section className={styles.styledFaq}>
            <div className={styles.faqDec1}></div>
            <div className={styles.faqDec2}></div>
            <div className={styles.containerFeaturesCon}>
                <h2 className={styles.faqTitle}>FAQ</h2>
                {
                    accordion.map((item, index) =>
                        <Accordion
                            key={index}
                            className={styles.styledPanel}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon/>}
                                aria-controls="addIcon"
                                id="addIcon"
                                className={styles.panelName}
                            >
                                <Typography
                                    className={styles.panelTitle}
                                >
                                    {item.title}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails className={styles.panelContent}>
                                <Typography className={styles.panelText}>
                                    {item.text}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    )
                }

                {/*<Accordion>*/}
                {/*    <AccordionSummary*/}
                {/*        expandIcon={<ExpandMoreIcon/>}*/}
                {/*        aria-controls="panel2a-content"*/}
                {/*        id="panel2a-header"*/}
                {/*    >*/}
                {/*        <Typography>Accordion 2</Typography>*/}
                {/*    </AccordionSummary>*/}
                {/*    <AccordionDetails>*/}
                {/*        <Typography>*/}
                {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse*/}
                {/*            malesuada lacus ex, sit amet blandit leo lobortis eget.*/}
                {/*        </Typography>*/}
                {/*    </AccordionDetails>*/}
                {/*</Accordion>*/}
                {/*<Accordion>*/}
                {/*    <AccordionSummary*/}
                {/*        expandIcon={<ExpandMoreIcon/>}*/}
                {/*        aria-controls="panel2a-content"*/}
                {/*        id="panel2a-header"*/}
                {/*    >*/}
                {/*        <Typography>Accordion 2</Typography>*/}
                {/*    </AccordionSummary>*/}
                {/*    <AccordionDetails>*/}
                {/*        <Typography>*/}
                {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse*/}
                {/*            malesuada lacus ex, sit amet blandit leo lobortis eget.*/}
                {/*        </Typography>*/}
                {/*    </AccordionDetails>*/}
                {/*</Accordion>*/}
                {/*<Accordion>*/}
                {/*    <AccordionSummary*/}
                {/*        expandIcon={<ExpandMoreIcon/>}*/}
                {/*        aria-controls="panel2a-content"*/}
                {/*        id="panel2a-header"*/}
                {/*    >*/}
                {/*        <Typography>Accordion 2</Typography>*/}
                {/*    </AccordionSummary>*/}
                {/*    <AccordionDetails>*/}
                {/*        <Typography>*/}
                {/*            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse*/}
                {/*            malesuada lacus ex, sit amet blandit leo lobortis eget.*/}
                {/*        </Typography>*/}
                {/*    </AccordionDetails>*/}
                {/*</Accordion>*/}
            </div>
            <div className={styles.faqDotsL}>
                <div>
                    <span className={styles.faqDotsLSpan}>
                        <img src={faqDotsL} alt='faqDotsL' className={styles.faqDotsLImage}/>
                    </span>
                </div>
            </div>
            <div className={styles.faqDotsR}>
                <span className={styles.styledSpan}>
                    <span className={styles.styledBottomSpan}>
                        <img src={faqHiddenImage} alt='faqHiddenImage' className={styles.styledHiddenImage}/>
                    </span>
                    <img src={faqDotsR} alt="faqDotsR" className={styles.styledImage}/>
                </span>
            </div>
        </section>
    )
}