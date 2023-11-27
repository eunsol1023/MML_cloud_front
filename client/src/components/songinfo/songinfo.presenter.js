import React from "react";
import styles from "./songinfo.module.css";



export default function SonginfoUI(props) {
  return (
    <div className={styles.info_body}>
      <h2 className={styles.playlist_title}>{props.data?.playlistTitle}</h2>
      <div className={styles.song_container}>
        <img src={props.data?.album_image_url} alt={props.data?.title} className={styles.album_art} />
        <div className={styles.song_details}>
          <h3 className={styles.song_title}>{props.data?.title}</h3>
          <p className={styles.song_artist}>{props.data?.artist}</p>
        </div>
        <hr className={styles.hr} />
        <div className={styles.info_lyric}>
          <pre className={styles.song_lyric}>{props.data?.lyrics}</pre>
        </div>
      </div>
    </div>
  );
}
