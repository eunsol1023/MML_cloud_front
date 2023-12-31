import GenreFavoriteUI from "./genrefavorite.presenter";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { signupState } from "../../store/status";

export default function GenreFavorite() {
  const navigate = useNavigate();

  const [signData, setSignData] = useRecoilState(signupState);

  const [favoriteGenre, setFavoriteGenre] = useState([]);
  const [message, setMessage] = useState("");
  const hideMessage = () => setMessage("");

  const onGenreSelect = (genre) => {
    if (favoriteGenre.includes(genre)) {
      setFavoriteGenre((prev) => prev.filter((g) => g !== genre));
    } else {
      if (favoriteGenre.length >= 5) {
        setMessage("5개까지 선택 가능합니다.");
        return;
      }
      setFavoriteGenre((prev) => [...prev, genre]);
    }
    setMessage("");
  };

  const handleSubmit = async () => {
    if (favoriteGenre.length !== 5) {
      setMessage("5개의 장르를 선택해 주세요.");
      return;
    }

    setSignData((prev) => {
      return {
        ...prev,
        genre1: favoriteGenre[0],
        genre2: favoriteGenre[1],
        genre3: favoriteGenre[2],
        genre4: favoriteGenre[3],
        genre5: favoriteGenre[4],
      };
    });

    navigate("/artistfavorite");
  };


  return (
    <GenreFavoriteUI
      favoriteGenre={favoriteGenre}
      onGenreSelect={onGenreSelect}
      onSubmit={handleSubmit}
      message={message}
      hideMessage={hideMessage}
    />
  );
}
