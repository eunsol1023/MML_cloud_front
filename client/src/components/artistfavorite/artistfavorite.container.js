import ArtistFavoriteUI from "./artistfavorite.presenter";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { csvParse } from "d3-dsv";

export default function ArtistFavorite() {
    const navigate = useNavigate();

    const [artists, setArtists] = useState([]);
    const [favoriteArtists, setFavoriteArtists] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('/user_like_song_new.csv')
            .then(response => {
                const data = csvParse(response.data, (d, i) => ({
                    id: i,
                    name: d.ARTIST_NAME 
                }));
                setArtists(data);
            })
            .catch(error => {
                console.error('CSV 파일 로드 실패:', error);
                setMessage('CSV 파일을 불러오는데 실패했습니다.');
            });
    }, []);
    
    

    const handleSelectArtist = (artistName) => {
        const isAlreadySelected = favoriteArtists.includes(artistName);

        if (isAlreadySelected) {
            setFavoriteArtists(favoriteArtists.filter(artist => artist !== artistName));
        } else {
            if (favoriteArtists.length >= 5) {
                setMessage('5명까지 선택 가능합니다.');
                return;
        }
            setFavoriteArtists([...favoriteArtists, artistName]);
        }
    };

    const handleSubmit = () => {
        if (favoriteArtists.length === 0) {
            setMessage('최소 한 명의 아티스트를 선택해 주세요.');
            return;
        }
        console.log("선택된 아티스트", favoriteArtists);
        navigate('/'); 
    };

    const hideMessage = () => setMessage('');

    return (
        <ArtistFavoriteUI
            artists={artists}
            favoriteArtists={favoriteArtists}
            onSelectArtist={handleSelectArtist}
            onSubmit={handleSubmit}
            message={message}
            hideMessage={hideMessage}
        />
    );
}