import HomePageUI from "./home.presenter";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
// import axios from "axios";

export default function HomaPage() {
  const navigate = useNavigate();
  const [sentence, setSentence] = useState("");

  const onClickPlayListView = () => {
    navigate("/playlistview");
  };

  const onClickSearch = async () => {
    if (!sentence) {
      alert("검색어를 입력해주세요!");
      return;
    }
    localStorage.setItem("sentence", sentence);
    localStorage.setItem("pagetype", "search");
    navigate("/playlistview");
  };

  const onInputChange = (event) => {
    setSentence(event.target.value);
  };

  // const onFormSubmit = async (event) => {
  //   event.preventDefault();
  //   if (!sentence) {
  //     alert("검색어를 입력해주세요!");
  //     return;
  //   }
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:8000/music/tag_song2vec/`
  //     );
  //     console.log("Response from API:", response.data);
  //   } catch (error) {
  //     console.error("ERROR", error);
  //   }
  // };

  return (
    <HomePageUI
      onClickSearch={onClickSearch}
      onClickPlayListView={onClickPlayListView}
      onInputChange={onInputChange}
      // onFormSubmit={onFormSubmit}
      sentence={sentence}
    />
  );
}
