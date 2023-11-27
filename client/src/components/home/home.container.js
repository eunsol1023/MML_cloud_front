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
    setSentence(event.target.value);
  };

  const onFormSubmit = async (event) => {
    event.preventDefault();
    if (sentence) {
      console.log("Sending sentence to API:", sentence);

      try {
        const response = await axios.get(`http://api.cloudmml.com:8000/music/tag_song2vec/
        ?sentence=${encodeURIComponent(sentence)}`);
        console.log("Response from API:", response.data);
        // 여기에서 API 응답 처리를 할 수 있습니다.
        
      } catch (error) {
        console.log("ERROR", error);
      }
    }
  };

  const onClickSearch = async () => {
    if(!sentence) {
      alert('검색어를 입력해주세요!')
      return
    }
    localStorage.setItem('sentence',sentence)
    localStorage.setItem('pagetype','search')
    navigate('/playlistview')
  }

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
