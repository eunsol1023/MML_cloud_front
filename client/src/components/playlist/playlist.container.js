import HomePageUI from "./home.presenter";
import { useNavigate } from "react-router-dom";

export default function HomaPage() {
  const navigate = useNavigate();
  const onClickList = () => {
    navigate('/playlist'); // '/playlist' 경로로 이동
};

  return <HomePageUI/>;
}
