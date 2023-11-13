import styles from './genrefavorite.module.css'
import React from 'react';

export default function GenreFavoriteUI({ favoriteGenre=[], onGenreSelect, onSubmit }) {
    
    const genreOptions = [
        "CCM",
        "J-POP",
        "OST / 전체",
        "POP / R&B/소울",
        "POP / 락",
        "POP / 랩/힙합",
        "POP / 월드뮤직",
        "POP / 일렉트로니카",
        "POP / 전체",
        "POP / 팝",
        "가요 / R&B/소울",
        "가요 / 국악",
        "가요 / 댄스",
        "가요 / 락",
        "가요 / 랩/힙합",
        "가요 / 발라드",
        "가요 / 인디",
        "가요 / 일렉트로니카",
        "가요 / 전체",
        "가요 / 트로트",
        "블루스 / 포크 / 컨트리",
        "뮤직테라피",
        "캐롤",
        "뉴에이지",
        "동요/태교",
        "재즈",
        "클래식"
    ];

    return (
        <div className={styles.body}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>선호하는 장르 선택</h1>
                <div className={styles.selectGenre}>
                    <ul>
                        {favoriteGenre.map((genre, index) => (
                            <li key={index}>{index + 1}. {genre}</li>
                        ))}
                    </ul>                        
                </div>
            </div>
            <div className={styles.genreList}>
                {genreOptions.map((genre, index) => (
                    <button key={index} onClick={() => onGenreSelect(genre)} className={styles.genreButton}>
                        {genre}
                    </button>
                ))}
            </div>
            <button onClick={onSubmit} className={styles.submitButton}>완료</button>
        </div>
    );
}
