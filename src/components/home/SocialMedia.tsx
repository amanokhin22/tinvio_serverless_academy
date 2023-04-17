import {Link} from "react-router-dom";

import styles from "../../styles/home/socialMedia.module.scss";

import linkedin from "../../assets/img/linkedin.svg";
import instagram from "../../assets/img/instagram.svg";
import googlePlay from "../../assets/img/googlePlay.png";
import appStore from "../../assets/img/appStore.png";

export const SocialMedia = () => {
    return (
        <div>
            <ul className={styles.socialMedia}>
                <li>
                    <Link to={"https://www.linkedin.com/company/tinvio"}>
                        <img src={linkedin} alt="linkedin"/>
                    </Link>
                </li>
                <li>
                    <Link to={"https://www.instagram.com/tinvioapp/?hl=en"}>
                        <img src={instagram} alt="instagram"/>
                    </Link>
                </li>
                <li>
                    <Link
                          to={"https://play.google.com/store/apps/details?id=com.tinvio.tinvio&hl=en&gl=US&pli=1"}>
                        <img src={googlePlay} alt="googlePlay"/>
                    </Link>
                </li>
                <li>
                    <Link to={"https://apps.apple.com/sg/app/tinvio/id1472428382"}>
                        <img src={appStore} alt="appStore"/>
                    </Link>
                </li>
            </ul>
        </div>
    )
}