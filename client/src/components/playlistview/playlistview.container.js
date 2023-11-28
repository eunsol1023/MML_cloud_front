import PlayListViewUI from "./playlistview.presenter";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Playlist() {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [playTitle, setPlayTitle] = useState("");

  const onClickTitle = (title, artist) => {
    localStorage.setItem("songtitle", title);
    localStorage.setItem("songartist", artist);
    navigate("/songinfo");
  };

  const fetchData = async () => {
    if (localStorage.getItem("pagetype") === "search") {
      try {
        const sentence = localStorage.getItem("sentence");
        const response = await axios.get(
          `http://api.cloudmml.com:8000/music/tag_song2vec/?input_sentence=${sentence}`,
          {
            withCredentials: true
          }
        );
        console.log(response);

        if (response.status === 200) {
          console.log("전송성공");
          setData(response.data);
          setPlayTitle(`'${sentence}' 기반 플레이리스트`);
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
      const playlistTitle = "Song2vec으로 추천된 플레이리스트";
      try {
        const response = await axios.get(
          "http://api.cloudmml.com:8000/music/song2vec/",
          {
            withCredentials: true
          }
        );

        if (response.status === 200) {
          console.log("전송성공");
          setData(response.data);
          setPlayTitle(playlistTitle);
        } else if (response.status === 500) {
          console.log("Internet Server Error");
        } else {
          console.log("Server Error");
        }
      } catch (error) {
        console.log(error);
      }
    } else if (localStorage.getItem("pagetype") === "user_like_artist") {
      const playlistTitle = "사용자 협업 필터링으로 추천된 플레이리스트";
      try {
        const response = await axios.get(
          "http://api.cloudmml.com:8000/music/user_like_artist/",
          { withCredentials: true }
        );

        if (response.status === 200) {
          console.log("전송성공");
          setData(response.data);
          setPlayTitle(playlistTitle);
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

  return (
    <PlayListViewUI
      onClickTitle={onClickTitle}
      data={data}
      playTitle={playTitle}
    />
  );
}
