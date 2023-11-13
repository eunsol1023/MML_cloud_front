import GenreFavoriteUI from "./genrefavorite.presenter";
import React, { useState } from 'react';

export default function GenreFavorite() {

    const [favoriteGenre, setFavoriteGenre] = useState([]);

    const onGenreSelect = (genre) => {
        setFavoriteGenre(prevGenres => {
            if (!prevGenres.includes(genre)) {
                return [...prevGenres, genre];
            }
            return prevGenres;
        })
        
    };

    const handleGenreSelect = (genre) => {
        if(favoriteGenre.length < 5) {
            onGenreSelect(genre);
        }
    };

    const handleSubmit = () => {
        console.log("선택된 장르", favoriteGenre);
    }

    return(<GenreFavoriteUI
        favoriteGenre={favoriteGenre}
        onGenreSelect={handleGenreSelect}
        onSubmit={handleSubmit}
        />
    );
}