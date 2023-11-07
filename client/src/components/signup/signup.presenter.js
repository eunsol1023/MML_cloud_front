import styles from './signup.module.css'

export default function SignupPageUI(props) {
    return(
        <div className={styles.wrapper}>
            <div className = {styles.body}>
                <button onClick = {props.onClickHome}> 홈으로 </button>
            </div>
        </div>
    )
}