import HomePageUI from "./home.presenter";
import { useNavigate } from "react-router-dom";

export default function HomaPage() {
  const navigate = useNavigate();
  const onClickSearch = () => {

};
  const onClickPlayListView = () => {
    navigate('/playlistview');
  }

  return <HomePageUI
    onClickSearch={onClickSearch}
    onClickPlayListView={onClickPlayListView}
    />;
}
