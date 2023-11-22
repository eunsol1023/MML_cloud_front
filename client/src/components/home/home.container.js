import HomePageUI from "./home.presenter";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function HomaPage() {
  const navigate = useNavigate();
  const onClickSearch = () => {};
  const onClickPlayListView = () => {
    navigate("/playlistview");
  };

  const [sentence, setSentence] = useState("");

  const handleInputChange = (event) => {
    setSentence(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (sentence) {
        console.log("Sending sentence to API:", sentence);

        try {
            const response = await fetch("http://api.cloudmml.com:8000/music/tag_song2vec/", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',  // JSON형식의 데이터 전송
                },
                body: JSON.stringify({ sentence })
            });

            // if (response.ok) {
            //     const data = await response.json();
            //     console.log("Response from API:", data);
            //     // 여기에서 API 응답 처리를 할 수 있습니다.
            // } else {
            //     console.error("API 요청 실패:", response.status);
            //     // 에러 처리 로직
            // }
        } catch (error) {
          console.log("ERROR", error);
        }
    }
};

  return (
    <HomePageUI
      onClickSearch={onClickSearch}
      onClickPlayListView={onClickPlayListView}
      onInputChange={handleInputChange}
      onFormSubmit={handleFormSubmit}
      sentence={sentence}
    />
  );
}
