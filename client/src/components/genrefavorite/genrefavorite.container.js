import GenreFavoriteUI from "./genrefavorite.presenter";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function GenreFavorite() {
    const navigate = useNavigate();

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
        navigate('/artistfavorite')
    }



    return(<GenreFavoriteUI
        favoriteGenre={favoriteGenre}
        onGenreSelect={handleGenreSelect}
        onSubmit={handleSubmit}
        />
    );
}