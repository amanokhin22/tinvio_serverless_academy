import React, {useEffect, useState} from "react";
import styles from "../../styles/privacy/privacy.module.scss";

import Tabs from "./Tabs";
import Privacy from "./Privacy";
import Terms from "./Terms";
import {Header} from "../Header";
import {Footer} from "../Footer";
import {useLocation} from "react-router-dom";
import privacy from "./Privacy";

type TabsType = {
    label: string;
    index: number;
    Component: React.FC<{}>;
    pageUrl: string;
}[];

const tabs: TabsType = [
    {
        label: "Privacy Policy",
        index: 1,
        Component: Privacy,
        pageUrl: 'privacy'
    },
    {
        label: "Terms of Service",
        index: 2,
        Component: Terms,
        pageUrl: 'terms'
    },
];

export const LegalInfo = () => {
    const [selectedTab, setSelectedTab] = useState<number>(tabs[0].index);
    const {pathname} = useLocation();

    useEffect(() => {
        console.log(pathname)
        const [_, pageUrl] = pathname.split("/");
        setSelectedTab(tabs.find((tab) => tab.pageUrl === pageUrl)?.index || tabs[0].index)
    }, [pathname])

    return (
        <main className={styles.legalMain}>
            <section className={styles.legal}>
                <Header/>
                <div className={styles.tabContainer}>
                    <h2 className={styles.tabTitle}>Tinvio Legal Info</h2>
                    <Tabs selectedTab={selectedTab} onClick={setSelectedTab} tabs={tabs}/>
                </div>
                <Footer/>
            </section>
        </main>
    );
}
