import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from "./artistfavorite.module.css";

export default function ArtistFavoriteUI({ artists, favoriteArtists, onSelectArtist, onSubmit, message, hideMessage }) {
    return (
        <div className={styles.body}>
            <div>
                {message && (
                    <div className={styles.popup}>
                        <div className={styles.popupContent}>
                            <p>{message}</p>
                            <button onClick={hideMessage} className={styles.hideMessage}>닫기</button>
                        </div>
                    </div>
                )}

                <div className={styles.selectedArtists}>
                    <h1 className={styles.title}>선호하는 아티스트 선택</h1>
                    <div className={styles.selectArtist}>
                        <ul>
                            {favoriteArtists.map((artist, index) => (
                                <li key={index} className={styles.artistItem}>
                                    {index + 1}. {artist}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className={styles.artistOptions}>
                <div className={styles.artistList}>
                    {artists.map((artist, index) => (
                        <button key={index} onClick={() => onSelectArtist(artist.name)} className={styles.artistButton}>
                            {artist.name}
                        </button>
                    ))}
                    <button onClick={onSubmit} className={styles.submitButton}>완료</button>
                </div>
                
            </div>
        </div>
    );
}
