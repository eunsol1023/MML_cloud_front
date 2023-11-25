import React from "react";
import styles from "./playlistview.module.css";

export default function PlayListViewUI(props) {
  return (
    <div className={styles.body}>
      <div className={styles.playlisttitle}>{props.data?.title}</div>
      <div className={styles.playlistContainers}>
        <div className={styles.playlistContainer}>
          {props.data?.map((data, index) => (
            <div key={index} className={styles.playlistItem}>
              <div className={styles.playlistImageBox}>
                <img
                  src={data?.image}
                  alt={data?.title}
                  className={styles.playlistImage}
                />
              </div>
              <div className={styles.title} onClick={() =>props.onClickTitle(data.title, data.artist)} >
                {data?.title}
              </div>
              <div className={styles.artist}>{data?.artist}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
