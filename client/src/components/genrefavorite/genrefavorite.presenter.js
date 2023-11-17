import styles from "./genrefavorite.module.css";
import React from "react";

export default function GenreFavoriteUI({
  favoriteGenre = [],
  onGenreSelect,
  onSubmit,
  message,
  hideMessage,
}) {
  const displayGenres = Array(5).fill("");

  favoriteGenre.forEach((genre, index) => {
    if (index < 5) displayGenres[index] = genre;
  });

  const genreOptions = [
    "발라드",
    "락",
    "R&B/소울",
    "일렉트로니카",
    "댄스",
    "랩/힙합",
    "인디",
    "국악",
    "OST",
    "블루스 / 포크 / 컨트리",
    "J-POP",
    "트로트",
    "월드뮤직",
    "팝",
    "재즈",
    "동요/태교",
    "클래식",
    "뉴에이지",
    "CCM",
  ];

  return (
    <div className={styles.body}>
      <div>
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

        <div className={styles.wrapper}>
          <h1 className={styles.title}>선호하는 장르 선택</h1>
          <div className={styles.selectGenre}>
            <ul>
              {favoriteGenre.map((genre, index) => (
                <li key={index} className={styles.genreItem}>
                  {index + 1}. {genre}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.genreBox}>
        <div className={styles.genreList}>
          {genreOptions.map((genre, index) => (
            <button
              key={index}
              onClick={() => onGenreSelect(genre)}
              className={styles.genreButton}
            >
              {genre}
            </button>
          ))}
          <button onClick={onSubmit} className={styles.submitButton}>
            완료
          </button>
        </div>
      </div>
    </div>
  );
}
