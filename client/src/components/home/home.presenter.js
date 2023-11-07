import styles from "./home.module.css"

export default function HomePageUI(props){
    return(
        <div className={styles.body}>
            <button onClick={props.onClickSignup}>회원가입으로 가는 버튼</button>
        </div>
    )
}