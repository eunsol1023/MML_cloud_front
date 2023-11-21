import styles from "./home.module.css";
// import styles from './MainLayout.module.css';

const playlists = [
  {
    id: 1,
    title: "Love Lee",
    artist: "AKMU",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/181/610/84181610_1692585955705_1_600x600.JPG/dims/resize/Q_80,0",
    description: "AKMU의 신곡 Love Lee를 만나보세요.",
  },
  {
    id: 2,
    title: "단기 알바",
    artist: "기리보이",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/372/146/84372146_1698310204451_1_600x600.JPG/dims/resize/Q_80,0",
    description: "최신 댄스 히트곡 모음",
  },
  {
    id: 3,
    title: "음악의 신",
    artist: "SEVENTEEN",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/411/479/84411479_1698023788065_1_600x600.JPG/dims/resize/Q_80,0",
    description: "SEVENTEEN의 강렬한 비트의 노래들",
  },
  {
    id: 4,
    title: "Super Shy",
    artist: "NewJeans",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/019/740/84019740_1688692234715_1_600x600.JPG/dims/resize/Q_80,0",
    description: "NewJeans의 청량한 목소리를 느낄 수 있는 플레이리스트",
  },
  {
    id: 5,
    title: "Get A Guitar",
    artist: "RIIZE",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/181/596/84181596_1693817383651_1_600x600.JPG/dims/resize/Q_80,0",
    description: "기타 리프가 돋보이는 곡들의 컬렉션",
  },
];

export default function HomePageUI(props) {

  return (
    <div className={styles.body}>
      <div className={styles.playlist_box}>
        <div className={styles.playlist_container}>
          <div className={styles.playlist_name}>Song2vec</div>
          <span className={styles.playlist_info}>더보기</span>
        </div>
        <div className={styles.song_box}>
          {playlists.map((playlist, index) => (
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
          <div className={styles.playlist_name}>사용자 협업 필터링</div>
          <span className={styles.playlist_info}>더보기</span>
        </div>
        <div className={styles.song_box}>
          {playlists.map((playlist, index) => (
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
