import React, {memo, useEffect, useRef, useState} from "react";
import styles from "../../styles/home/languagesPicker.module.scss";

import arrowWrapper from "../../assets/img/arrowWrapper.svg";
import gbflag from "../../assets/img/gbflag.svg";
import idflag from "../../assets/img/idflag.svg";
import thflag from "../../assets/img/thflag.svg";
import viflag from "../../assets/img/viflag.svg";

type LanguageItem = {
    name: string;
    iconUrl: string;
};
type PopupClick = MouseEvent & {
    path: Node[];
};
export const languageItems: LanguageItem[] = [
    {name: 'EN ', iconUrl: `${gbflag}`},
    {name: 'ID', iconUrl: `${idflag}`},
    {name: 'TH', iconUrl: `${thflag}`},
    {name: 'VN', iconUrl: `${viflag}`},
];
export const LanguagePicker = memo(() => {

    const menuRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState(languageItems[0]);
    const onClickListItem = (lang: LanguageItem) => {
        setOpen(false);
        setLanguage(lang);
    };
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const _event = event as PopupClick;

            if (menuRef.current && !_event.composedPath().includes(menuRef.current)) {
                setOpen(false);
            }
        };
        document.body.addEventListener('click', handleClickOutside);
        return () => {
            document.body.removeEventListener('click', handleClickOutside)
        }
    }, []);

    return (
        <div className={styles.languageWrapper} ref={menuRef}>
            <div className={styles.languageHead} onClick={() => setOpen(!open)}>
                <span>{language.name}</span>
                <div className={!open ? styles.arrowWrapper + ' ' + styles.arrowWrapper : styles.arrowWrapperDir}>
                    <img width={10} height={6} src={arrowWrapper} alt='arrow'/>
                </div>
            </div>
            {open && (
                <div>
                    <div>
                        <ul className={styles.flags}>
                            {languageItems.map((obj, i) => (
                                <li key={i}
                                    onClick={() => onClickListItem(obj)}
                                    className={language.iconUrl === obj.iconUrl ? 'active' : ''}>
                                    <img className={styles.oneFlag} src={obj.iconUrl}
                                         alt='flags'/>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
});
