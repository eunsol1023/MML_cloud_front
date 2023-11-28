import PlayListUI from "./playlist.presenter";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Playlsit() {
  const [song2vec, setSong2vec] = useState([]);
  const [colaboData, setColaboData] = useState([]);
  const [tmp, setTmp] = useState(0);
  const [tmp2, setTmp2] = useState(0);

  const navigate = useNavigate();

  const onClickPlayListView = () => {
    localStorage.setItem("pagetype", "song2vec");
    navigate("/playlistview");
  };

  const onClickPlayListView2 = () => {
    localStorage.setItem("pagetype", "user_like_artist");
    navigate("/playlistview");
  };

  const fetchData1 = async () => {
    try {
      if (tmp === 0) {
        const sessionKey = localStorage.getItem("sessionKey");
        const response = await axios.get(
          `http://api.cloudmml.com:8000/music/song2vec/?session_key=${sessionKey}`
        );
        if (response.status === 200) {
          setTmp(1);
          setSong2vec(response.data.slice(0, 5));
        } else {
          console.log("server error");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData2 = async () => {
    try {
      if (tmp2 === 0) {
        const sessionKey = localStorage.getItem("sessionKey");
        const response = await axios.get(
          `http://api.cloudmml.com:8000/music/user_like_artist/?session_key=${sessionKey}`
        );

        if (response.status === 200) {
          if (!colaboData) {
            setColaboData(response.data.slice(0, 5));
          }
          setTmp2(1);
        } else {
          console.log("server error");
          return;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData1();
    fetchData2();
  }, [tmp, tmp2]);

  return (
    <PlayListUI
      onClickPlayListView={onClickPlayListView}
      onClickPlayListView2={onClickPlayListView2}
      song2vec={song2vec}
      colaboData={colaboData}
    />
  );
}
