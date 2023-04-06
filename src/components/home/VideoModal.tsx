import styles from "../../styles/videoModal.module.scss";
import React, {FC} from "react";

export interface VideoModalTypes {
    onClose: () => void;
}

export const VideoModal: FC<VideoModalTypes> = ({onClose}) => {

    return (
        <div className={styles.modal}>
            <div className={styles.overlay}
                 onClick={() => onClose()}>
            </div>
            <div className={styles.modalContent}>
                {/*<WistiaProvider>*/}
                {/*    <WistiaPlayer hashedId="abc123"/>*/}
                {/*</WistiaProvider>*/}
                <div className={styles.youtubeContent}>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/XqZsoesa55w?autoplay=1"
                            title="YouTube video player"
                        //frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}


