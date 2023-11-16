import React from 'react';
import styles from "./artistfavorite.module.css";

export default function ArtistFavoriteUI({ artists, selectedArtist, onSelectArtist }) {
    return (
        <div className={styles.body}>
            <h1>선호하는 아티스트 선택</h1>
            <ul className={styles.artistList}>
                {artists.map(artist => (
                    <li 
                        key={artist.id} 
                        className={`${styles.artistItem} ${selectedArtist?.id === artist.id ? styles.selected : ''}`}
                        onClick={() => onSelectArtist(artist)}
                    >
                        {artist.name}
                    </li>
                ))}
            </ul>
            {selectedArtist && <div className={styles.selectedArtist}>선택된 아티스트: {selectedArtist.name}</div>}
        </div>
    );
}
