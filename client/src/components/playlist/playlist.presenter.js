import styles from "./playlist.module.css";

const playlist1 = [
  {
    title: "all i want for christmas",
    artist: "ghoss",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/725/422/81725422_1604891467333_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    title: "funky glitter christmas",
    artist: "nmixx",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/083/205/287/83205287_1669181520561_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    title: "kiss me it's christmas (feat. ne-yo)",
    artist: "leona lewis(리오나 루이스)",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/349/606/82349606_1634840126039_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    title: "love song",
    artist: "7공주(7 princess)",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/015/029/154/15029154_1404717400281_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    title: "엉뚱한 상상 (white christmas)",
    artist: "super junior (슈퍼주니어)",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/264/190/80264190_1312191294577_1_600x600.JPG/dims/resize/Q_80,0",
  },
];

const playlist2 = [
  {
    title: "나는 트로트가 싫어요",
    artist: "임창정",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/360/198/82360198_1635499201948_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    title: "내 귀에 캔디 (feat. 택연 of 2pm)",
    artist: "백지영",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/079/944/876/79944876_1404890116152_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    title: "따듯해",
    artist: "적재",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/108/827/82108827_1624599580659_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    title: "봄비",
    artist: "백지영",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/351/248/80351248_1366595963948_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    title: "봄이 온다면",
    artist: "안예은",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/919/482/80919482_1486109887935_1_600x600.JPG/dims/resize/Q_80,0",
  },
];

export default function PlayListUI(props) {
  {
    return (
      <div className={styles.body}>
        <div className={styles.playlist_box}>
          <div className={styles.playlist_container}>
            <div className={styles.playlist_name}>Song2vec으로 추천된 플레이리스트</div>
            <span
              className={styles.playlist_info}
              onClick={props.onClickPlayListView}
            >
              더보기
            </span>
          </div>
          <div className={styles.song_box}>
            {playlist1.map((playlist, index) => (
              <div key={index} className={styles.card}>
                <img
                  src={playlist.image}
                  alt={playlist.title}
                  className={styles.cardImage}
                />
                <div className={styles.cardContent}>
                  <h3>{playlist.title}</h3>
                  <p>{playlist.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.playlist_box}>
          <div className={styles.playlist_container}>
            <div className={styles.playlist_name}>사용자 협업 필터링으로 추천된 플레이리스트</div>
            <span
              className={styles.playlist_info}
              onClick={props.onClickPlayListView}
            >
              더보기
            </span>
          </div>
          <div className={styles.song_box}>
            {playlist2.map((playlist, index) => (
              <div key={index} className={styles.card}>
                <img
                  src={playlist.image}
                  alt={playlist.title}
                  className={styles.cardImage}
                />
                <div className={styles.cardContent}>
                  <h3>{playlist.title}</h3>
                  <p>{playlist.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      // </div>
    );
  }
}
