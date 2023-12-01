import HomePageUI from "./home.presenter";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function HomaPage() {
  const navigate = useNavigate();
  const [sentence, setSentence] = useState("");
  // const [updata, setUpdata] = useState([]);
  // const [botData, setBotData] = useState([]);
  // const [tmpData, setTmpData] = useState([]);

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

  // const fetchData = async () => {
  //   try{
  //     const response = await axios.post('http://api.cloudmml.com:8000/music/tag_song2vec_his/',{
        
  //     },{
  //       withCredentials: true
  //     })
  //     setTmpData(response.data)
  //     console.log(response.data);

  //   }catch(error){
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // },[])

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
