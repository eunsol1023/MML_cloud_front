import PlayListViewUI from "./playlistview.presenter";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Playlist() {
  const navigate = useNavigate();

  const onClickTitle = () => {
    navigate("/songinfo");
  };
  return <PlayListViewUI 
  onClickTitle={onClickTitle}/>;
}
