import GenreFavoriteUI from "./genrefavorite.presenter";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function GenreFavorite() {
    const navigate = useNavigate();

    const [favoriteGenre, setFavoriteGenre] = useState([]);
    const [message, setMessage] = useState('');
    const hideMessage = () => setMessage('')

    const onGenreSelect = (genre) => {
        if (favoriteGenre.includes(genre)) {
            setMessage('이미 선택한 장르입니다.');
            return;
        }

        if (favoriteGenre.length >= 5) {
            setMessage('5개까지 선택 가능합니다.')
            return;
        }

        setFavoriteGenre(prev => [...prev, genre]);
        setMessage('');
    };

    const handleSubmit = () => {
        if (favoriteGenre.length === 0) {
            setMessage('최소 하나의 장르를 선택해 주세요.');
            return;
        }
        console.log("선택된 장르", favoriteGenre);
        navigate('/artistfavorite')
    }

    const cancleGenre = () => {
        setFavoriteGenre([])
    }



    return(<GenreFavoriteUI
        favoriteGenre={favoriteGenre}
        onGenreSelect={onGenreSelect}
        onSubmit={handleSubmit}
        message={message}
        hideMessage={hideMessage}
        cancleGenre = {cancleGenre}
        />
    );
}