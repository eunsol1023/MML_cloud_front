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
    image:
      "https://cdnimg.melon.co.kr/cm2/album/images/113/52/904/11352904_20231027101104_1000.jpg?15266616a973e99cdf8784835d06f01d/melon/quality/80/optimize",
  },
  {
    id: 3,
    title: "Baddie",
    artist: "IVE (아이브)",
    image:
      "https://cdnimg.melon.co.kr/cm2/album/images/113/33/459/11333459_20231013103537_1000.jpg?faf3d08c19b6937258fd17162051dbc8/melon/quality/80/optimize",
  },
  {
    id: 4,
    title: "Seven (feat. Latto)",
    artist: "정국",
    image:
      "https://cdnimg.melon.co.kr/cm2/album/images/112/86/070/11286070_20230713181059_1000.jpg?0b3a98d363e31435d805d60e3041a54b/melon/quality/80/optimize",
  },
  {
    id: 5,
    title: "Drama",
    artist: "aespa",
    image:
      "https://cdnimg.melon.co.kr/cm2/album/images/113/62/544/11362544_20231110142622_1000.jpg?YUV444-90",
  },
  {
    id: 5,
    title: "You & Me",
    artist: "제니 (JENNIE)",
    image:
      "https://cdnimg.melon.co.kr/cm2/album/images/113/39/556/11339556_20231005170424_1000.jpg?9fa72785dcda82b88b47f847cb08dbd8/melon/quality/80/optimize",
  },
];

export default function HomePageUI(props) {
  {
    return (
      <div className={styles.home_body}>
        <div className={styles.home_search_area}>
          <div className={styles.home_search}>
          <form onSubmit={props.onFormSubmit}>
            <input
              type="text"
              value={props.sentence}
              onChange={props.onInputChange}
              placeholder="상황 및 감정 입력"
            />
            <button type="submit">검색</button>
          </form>
          </div>
        </div>
        <div className={styles.home_playlist_area}>
          <div className={styles.home_playlist}>
            <div className={styles.home_playlist_container}>
              <div className={styles.home_playlist_name}>Song2vec</div>
              <span
                className={styles.playlist_info}
                onClick={props.onClickPlayListView}
              >
                더보기
              </span>
            </div>
            <div className={styles.home_card_container}>
              <div className={styles.home_song_card}>
                {playlists.map((playlist, index) => (
                  <div key={index} className={styles.home_abc}>
                    <div className={styles.home_card}>
                      <img
                        src={playlist.image}
                        alt={playlist.title}
                        className={styles.home_cardImage}
                      />
                      <div className={styles.home_cardContent}>
                        <h3>{playlist.title}</h3>
                        <p>{playlist.artist}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.home_playlist}>
            <div className={styles.home_playlist_container}>
              <div className={styles.home_playlist_name}>Song2vec</div>
              <span
                className={styles.playlist_info}
                onClick={props.onClickPlayListView}
              >
                더보기
              </span>
            </div>
            <div className={styles.home_card_container}>
              <div className={styles.home_song_card}>
                {playlists.map((playlist, index) => (
                  <div key={index} className={styles.home_abc}>
                    <div className={styles.home_card}>
                      <img
                        src={playlist.image}
                        alt={playlist.title}
                        className={styles.home_cardImage}
                      />
                      <div className={styles.home_cardContent}>
                        <h3>{playlist.title}</h3>
                        <p>{playlist.artist}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
