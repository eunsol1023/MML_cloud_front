import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./artistfavorite.module.css";

export default function ArtistFavoriteUI({
  artists,
  favoriteArtists,
  onSelectArtist,
  onSubmit,
  message,
  hideMessage,
}) {
  return (
    <div>
      <div className={styles.errormassage}>
        {message && (
          <div className={styles.popup}>
            <div className={styles.popupContent}>
              <p>{message}</p>
              <button onClick={hideMessage} className={styles.hideMessage}>
                닫기
              </button>
            </div>
          </div>
        )}
      </div>

      <div className={styles.artistfavorite}>
        <div className={styles.artistSelectionContainer}>
          <div className={styles.artisttitle}>선호하는 아티스트 선택</div>
          <div className={styles.selectArtist}>
            <ul>
              {favoriteArtists.map((artist, index) => (
                <li key={index} className={styles.artistItem}>
                  {index + 1}. {artist}
                </li>
              ))}
            </ul>
          </div>
          <button onClick={onSubmit} className={styles.submitButton}>
            완료
          </button>
        </div>

        <div className={styles.artistBox}>
          <div className={styles.artistList}>
            {artists.map((artist, index) => (
              <button
                key={index}
                onClick={() => onSelectArtist(artist.name)}
                className={styles.artistButton}
              >
                {artist.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
