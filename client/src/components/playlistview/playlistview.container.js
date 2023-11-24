import PlayListViewUI from "./playlistview.presenter";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Playlist() {
  const navigate = useNavigate();

  const [data, setData] = useState([])

  const onClickTitle = () => {
    navigate("/songinfo");
  };

  const fetchData = async () => {  
    if(localStorage.getItem('pagetype') === 'search'){
        try{
            const response = await axios.post('http://api.cloudmml.com:8000/music/tag_song2vec/',{
                sentence: localStorage.getItem('sectence')
            })
    
            if (response.status === 200){
                console.log("전송성공")
                setData(response.data)
                return
            }else if (response.status === 400){
                console.log('Bad Request')
                return
            }else {
                console.log('Server error')
                return
            }
    
        }catch(error){
            console.log(error)
        }
    } 
  }
  useEffect(() => {
    fetchData()
  },[])

  return <PlayListViewUI 
  onClickTitle={onClickTitle}
  data = {data}
  />;
}
