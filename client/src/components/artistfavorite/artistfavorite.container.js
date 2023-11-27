import ArtistFavoriteUI from "./artistfavorite.presenter";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { csvParse } from "d3-dsv";
import { useRecoilState } from "recoil";
import { signupState } from "../../store/status";

export default function ArtistFavorite() {
  const navigate = useNavigate();

  const [signData, setSignData] = useRecoilState(signupState);

  const [artists, setArtists] = useState([]);
  const [favoriteArtists, setFavoriteArtists] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("/user_like_song_new.csv")
      .then((response) => {
        const data = csvParse(response.data, (d, i) => ({
          id: i,
          name: d.ARTIST_NAME,
        }));
        setArtists(data);
      })
      .catch((error) => {
        console.error("CSV 파일 로드 실패:", error);
        setMessage("CSV 파일을 불러오는데 실패했습니다.");
      });
  }, []);

  const handleSelectArtist = (artistName) => {
    const isAlreadySelected = favoriteArtists.includes(artistName);

    if (isAlreadySelected) {
      setFavoriteArtists(
        favoriteArtists.filter((artist) => artist !== artistName)
      );
    } else {
      if (favoriteArtists.length >= 5) {
        setMessage("5명까지 선택 가능합니다.");
        return;
      }
      setFavoriteArtists([...favoriteArtists, artistName]);
    }
  };

  const onSubmit = async () => {
    if (favoriteArtists.length !== 5) {
      setMessage("5명의 아티스트를 선택해 주세요.");
      return;
    }

    try {
      const response = await axios.post(
        "http://api.cloudmml.com:8000/user/signup/",
        {
          username: signData.username,
          password: signData.password,
          gender: signData.gender,
          age_range: signData.age_range,
          genre1: signData.genre1,
          genre2: signData.genre2,
          genre3: signData.genre3,
          genre4: signData.genre4,
          genre5: signData.genre5,
          artist1: favoriteArtists[0],
          artist2: favoriteArtists[1],
          artist3: favoriteArtists[2],
          artist4: favoriteArtists[3],
          artist5: favoriteArtists[4],
        }
      );

      console.log("선택된 아티스트", favoriteArtists);

      if (response.status === 201) {
        alert("회원가입 성공!!");
        navigate("/");
      } else {
        alert(
          `회원가입 실패: 서버가 예상치 못한 상태 코드 ${response.status}를 반환했습니다.`
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const hideMessage = () => setMessage("");

  return (
    <ArtistFavoriteUI
      artists={artists}
      favoriteArtists={favoriteArtists}
      onSelectArtist={handleSelectArtist}
      onSubmit={onSubmit}
      message={message}
      hideMessage={hideMessage}
    />
  );
}
