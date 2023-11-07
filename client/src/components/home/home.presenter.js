import styles from "./home.module.css";

export default function HomePageUI(props) {
    return (
        <MainLayout>
          {/* 여기에 메인 페이지의 콘텐츠를 넣으면 됩니다. */}
          <HomePageUI onClickSignup={handleSignupClick}
                      onClickLogin={handleLoginClick}
                      onClickBoard={handleBoardClick} />
        </MainLayout>

{/* <div className={styles.body}>
<button onClick={props.onClickSignup}>회원가입으로 가는 버튼</button>
<br />
<button onClick={props.onClickLogin}>로그인페이지</button>
<br />
<button onClick={props.onClickBoard}>플레이리스트</button>
</div> */}
      );

}
