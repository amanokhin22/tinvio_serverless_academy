import styles from "../../styles/company/company.module.scss";
import {ModalForm} from "../features/ModalForm";
import {Header} from "../Header";
import {useState} from "react";
import {Footer} from "../Footer";
import {Greetings} from "./Greetings";
import {Done} from "./Done";
import {Counts} from "./Counts";

export const Company = () => {
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
                <Greetings/>
                <Done/>
                <Counts/>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <Footer/>
            </main>
        </div>
    )
}