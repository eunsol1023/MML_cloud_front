import React from "react";
import styles from "./songinfo.module.css";

const song = {
  title: "음악의 신",
  artist: "SEVENTEEN",
  image:
    "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/411/479/84411479_1698023788065_1_600x600.JPG/dims/resize/Q_80,0",
  lyric: `세상에 음악의 신이 있다면
  고맙다고 안아주고 싶어
  
  전 세계 공통의 Language
  자음과 모음이 달라도 상관없는 건 Music
  말이 안 통해도 음악이 있다면
  우리는 지금부터는 아주 친한 친구
  
  너와 내가 모르는 사이여도 춤출 수 있어
  We can mix it up right
  Sugar and spice
  Brass sound and guitar
  
  네 글자면 다 내 이름이래
  쿵치팍치 또한 내 이름인가
  이것 또한 나를 위한 소린가
  Kick snare
  Drum bass
  Piano
  Bassline
  
  무엇이 우리의 행복인가
  뭐 있나 춤을 춰 노래하자
  이것이 우리의 행복이다
  
  다시 한번 더 Hey
  
  음악은 우리의 숨이니까
  위험하지 않아 계속 들이키자
  Everybody 귀를 기울여 보자
  
  세상에 음악의 신이 있다면
  이건 당신께 주는 메시지
  음정 하나하나 모아보자 음-
  춤춰 노래해 기분이 끝내주네
  
  쿵 치 팍 치 쿵 쿵 치 팍 치 예
  쿵 치 팍 치 쿵 쿵 치 팍 치 예
  쿵 치 팍 치 쿵 쿵 치 팍 치 예
  행복은 바로 지금이야
  
  생각해 봐 우리는 소음마저 음악이야
  저마다의 쿵짝 맞춰가며 살아가
  개미의 발소리마저도 Harmony
  
  무엇이 우리의 행복인가
  뭐 있나 춤을 춰 노래하자
  이것이 우리의 행복이다
  
  다시 한번 더 Hey
  
  음악은 우리의 숨이니까
  위험하지 않아 계속 들이키자
  Everybody 귀를 기울여 보자
  
  세상에 음악의 신이 있다면
  이건 당신께 주는 메시지
  음정 하나하나 모아보자 음-
  춤춰 노래해 기분이 끝내주네
  
  쿵 치 팍 치 쿵 쿵 치 팍 치 예
  쿵 치 팍 치 쿵 쿵 치 팍 치 예
  쿵 치 팍 치 쿵 쿵 치 팍 치 예
  음악의 신이 있다면
  
  SEVENTEEN to the world
  전 세계 다 합창
  
  쿵 치 팍 치 쿵 쿵 치 팍 치 예
  쿵 치 팍 치 쿵 쿵 치 팍 치 예
  쿵 치 팍 치 쿵 쿵 치 팍 치 예
  음악의 신이 있다면`,
};
export default function SonginfoUI() {
  return (
    <div className={styles.info_body}>
      <div className={styles.song_container}>
        <img src={song.image} alt={song.title} className={styles.album_art} />
        <div className={styles.song_details}>
          <h3 className={styles.song_title}>{song.title}</h3>
          <p className={styles.song_artist}>{song.artist}</p>
        </div>
        <hr className={styles.hr} />
        <div className={styles.info_lyric}>
          <pre className={styles.song_lyric}>{song.lyric}</pre>
        </div>
      </div>
    </div>
  );
}
