import HomePageUI from "./home.presenter";
import { useNavigate } from "react-router-dom";

export default function HomaPage() {
  const navigate = useNavigate();

  const onClickSignup = () => {
    navigate("/signup");
  };
  
  // const onClickLogin = () => {
  //   navigate("/login")
  // };

  return <HomePageUI onClickSignup={onClickSignup} />;
}
