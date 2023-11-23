import PlayListUI from "./playlist.presenter";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Playlsit() {  
  // const [musicData, setMusicData] = useState([])

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("http://api.cloudmml.com:8000/music/music_reco/")

  //     setMusicData(response.data)      
  //   }catch(error) {
  //     console.log(error)
  //   }
    

  // }

  // useEffect(() => {
  //   fetchData();                                                                                                                                                                                                                                       
  // },[])

  const navigate = useNavigate();
  const onClickPlayListView = () => {
    navigate("/playlistview"); // '/playlist' 경로로 이동
  };

  return <PlayListUI 
  onClickPlayListView={onClickPlayListView} 
  // musicData = {musicData}
  />;
}
