import styles from "./home.module.css";

const playlists = [
  {
    id: 1,
    title: "음악의 신",
    artist: "SEVENTEEN",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/411/479/84411479_1698023788065_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    id: 2,
    title: "Perfect Night",
    artist: "LE SSERAFIM (르세라핌)",
    image:"https://cdnimg.melon.co.kr/cm2/album/images/113/52/904/11352904_20231027101104_1000.jpg?15266616a973e99cdf8784835d06f01d/melon/quality/80/optimize"
  },
  {
    id: 3,
    title: "Baddie",
    artist: "IVE (아이브)",
    image:"https://cdnimg.melon.co.kr/cm2/album/images/113/33/459/11333459_20231013103537_1000.jpg?faf3d08c19b6937258fd17162051dbc8/melon/quality/80/optimize"
  },
  {
    id: 4,
    title: "Seven (feat. Latto)",
    artist: "정국",
    image:"https://cdnimg.melon.co.kr/cm2/album/images/112/86/070/11286070_20230713181059_1000.jpg?0b3a98d363e31435d805d60e3041a54b/melon/quality/80/optimize"
  },
  {
    id: 5,
    title: "Drama",
    artist: "aespa",
    image:
      "https://cdnimg.melon.co.kr/cm2/album/images/113/62/544/11362544_20231110142622_1000.jpg?YUV444-90",
  }
];

export default function HomePageUI(props) {
  {
    return (
      <div className={styles.body}>
        <div className="input-group">
          <form
            type="search"
            className="form-control rounded"
            placeholder="상황 및 기분 입력"
            // onChange={onChange}
          />
          <button onClick={props.onClickSearch} className={styles.listsearch}>
            검색
          </button>
        </div>
        <div className={styles.playlist_box}>
          <div className={styles.playlist_container}>
            <div className={styles.playlist_name}>Song2vec</div>
            <span
              className={styles.playlist_info}
              onClick={props.onClickPlayListView}
            >
              더보기
            </span>
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
    );
  }
}
