import PlayListUI from "./playlist.presenter";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Playlsit() { 
  const [song2vec, setSong2vec] = useState([])
  const [colaboData, setColaboData] = useState([])
  
  const navigate = useNavigate();
  const onClickPlayListView = () => {
    localStorage.setItem('pagetype', 'song2vec')
    navigate("/playlistview"); // '/playlist' 경로로 이동
  };
  const onClickPlayListView2 = () => {
    localStorage.setItem('pagetype', 'user_like_artist')
    navigate("/playlistview"); // '/playlist' 경로로 이동
  };

  const fetchData1 = async () => {
    try {
      const response = await axios.get('http://api.cloudmml.com:8000/music/song2vec/')
      if (response.status === 200){
        setSong2vec(response.data.slice(5))
        return
      }else {
        console.log('server error')
        return
      }
    }catch(error){
      console.log(error)
    }
    
  }

  const fetchData2 = async () => {
    try{
      const response = await axios.get('http://api.cloudmml.com:8000/music/user_like_artist/')
      if (response.status === 200){
        setColaboData(response.data.slice(5))
        return
      }else{
        console.log('server error')
        return
      }

    }catch(error){
      console.log(error)
    }
  }

  useEffect (() => {
    fetchData1();
    fetchData2();
  },[])


  return <PlayListUI 
  onClickPlayListView={onClickPlayListView}
  onClickPlayListView2 = {onClickPlayListView2}
  song2vec = {song2vec} 
  colaboData = {colaboData}
  />;
}
