import PlayListUI from "./playlist.presenter";
import { useNavigate } from "react-router-dom";

export default function Playlsit() {
  const navigate = useNavigate();
  const onClickPlayListView = () => {
    navigate("/playlistview"); // '/playlist' 경로로 이동
  };

  return <PlayListUI onClickPlayListView={onClickPlayListView} />;
}
