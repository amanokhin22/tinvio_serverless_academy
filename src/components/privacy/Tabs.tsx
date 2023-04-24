import React, {FC} from "react";
import styles from "../../styles/privacy/privacy.module.scss";

type TabsProps = {
    tabs: {
        label: string;
        index: number;
        Component: FC<{ index: number }>;
    }[];
    selectedTab: number;
    onClick: (index: number) => void;
    orientation?: "horizontal" | "vertical";
};

const Tabs: FC<TabsProps> = ({
                                 tabs = [],
                                 selectedTab = 1,
                                 onClick,
                             }) => {
    const Panel = tabs && tabs.find((tab) => tab.index === selectedTab);

    return (
        <div>
            <div className={styles.currentTabCon}>
                {tabs.map((tab) => (
                    <button
                        className={styles.currentTabName + ' ' + (selectedTab === tab.index ? styles.active : '')}
                        onClick={() => onClick(tab.index)}
                        key={tab.index}
                        type="button"
                        role="tab"
                        aria-selected={selectedTab === tab.index}
                        aria-controls={`tabpanel-${tab.index}`}
                        tabIndex={selectedTab === tab.index ? 0 : -1}
                        id={`btn-${tab.index}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div
                role="tabpanel"
                aria-labelledby={`btn-${selectedTab}`}
                id={`tabpanel-${selectedTab}`}
            >
                {Panel && <Panel.Component index={selectedTab}/>}
            </div>
        </div>
    );
};
export default Tabs;
