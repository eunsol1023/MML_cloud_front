import PlayListViewUI from "./playlistview.presenter";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Playlist() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  const onClickTitle = (title, artist) => {
    localStorage.setItem('songtitle', title)
    localStorage.setItem('songartist', artist)
    navigate("/songinfo");
  };

  const fetchData = async () => {
    if (localStorage.getItem("pagetype") === "search") {
      try {
        const response = await axios.get(
          "http://api.cloudmml.com:8000/music/tag_song2vec/?input_sentence=${encodeURIComponent(sentence)}",
          {
            sentence: localStorage.getItem("sectence"),
          }
        );

        if (response.status === 200) {
          console.log("전송성공");
          setData(response.data);
        } else if (response.status === 400) {
          console.log("Bad Request");
          return;
        } else {
          console.log("Server error");
          return;
        }
      } catch (error) {
        console.log(error);
      }

    } else if (localStorage.getItem("pagetype") === "song2vec") {
      try {
        const response = await axios.get(
          "http://api.cloudmml.com:8000/music/song2vec/",
          {}
        );

        if (response.status === 200) {
          console.log("전송성공");
          setData(response.data);
        } else if (response.status === 500) {
            console.log("Internet Server Error");
        } else {
            console.log("Server Error");
        }
      } catch (error) {
        console.log(error);
      }

    } else if (localStorage.getItem("pagetype") === "user_like_artist") {
      try {
        const response = await axios.get(
          "http://api.cloudmml.com:8000/music/user_like_artist/",
          {}
        );

        if (response.status === 200) {
          console.log("전송성공");
          setData(response.data);
        } else if (response.status === 500) {
          console.log("Internet Server Error");
        } else {
            console.log("Server Error");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <PlayListViewUI onClickTitle={onClickTitle} data={data} />;
}
