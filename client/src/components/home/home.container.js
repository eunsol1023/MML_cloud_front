import HomePageUI from "./home.presenter";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

export default function HomaPage() {
  const navigate = useNavigate();
  const onClickPlayListView = () => {
    navigate("/playlistview");
  };

  const [sentence, setSentence] = useState("");

  const onInputChange = (event) => {
    setSentence(event.target.value.toString());
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    if (sentence) {
      console.log("Sending sentence to API:", sentence);

      try {
        const response = await axios.get(`http://api.cloudmml.com:8000/music/tag_song2vec/?input_sentence=${encodeURIComponent(sentence)}`);
        console.log("Response from API:", response.data);
        // 여기에서 API 응답 처리를 할 수 있습니다.
        
      } catch (error) {
        console.error("ERROR", error);
        // 여기에서 사용자에게 에러 메시지를 표시할 수 있습니다.
      }
    }
  };

  const onClickSearch = async () => {
    if (!sentence) {
      alert('검색어를 입력해주세요!');
      return;
    }
    localStorage.setItem('sentence', sentence.toString());
    localStorage.setItem('pagetype', 'search');
    navigate('/playlistview');
  };

  return (
    <HomePageUI
      onClickSearch={onClickSearch}
      onClickPlayListView={onClickPlayListView}
      onInputChange={onInputChange}
      onFormSubmit={onFormSubmit}
      sentence={sentence}
    />
  );
}
