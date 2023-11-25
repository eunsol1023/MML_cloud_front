import PlayListUI from "./playlist.presenter";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Playlsit() { 
  const [song2vec, setSong2vec] = useState([])
  const [colaboData, setColaboData] = useState([])
  const [tmp, setTmp] = useState(0)
  const [tmp2, setTmp2] = useState(0)

  
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
      if(tmp === 0){
        const response = await axios.get('http://api.cloudmml.com:8000/music/song2vec/',{})
        if (response.status === 200){
            setSong2vec(response.data.slice(0,5))
            setTmp(1)
        }else {
          console.log('server error')
        }
      }
    }catch(error){
      console.log(error)
    }
    
  }

  const fetchData2 = async () => {
    try{
      if(tmp2 === 0){
        const response = await axios.get('http://api.cloudmml.com:8000/music/user_like_artist/',{})
        if (response.status === 200){
            setColaboData(response.data.slice(0,5))
            setTmp2(1)
        }else{
          console.log('server error')
          return
        }
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
