import styles from "./home.module.css";

const playlist1 = [
  {
    title: "거짓말 거짓말 거짓말",
    artist: "이적",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/379/882/80379882_1384482376577_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    title: "그날에 우리",
    artist: "어반자카파",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/257/286/80257286_1305529809533_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    title: "지금, 좋아해 (love & live)",
    artist: "이달의 소녀 1/3",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/929/424/80929424_1489370301455_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    title: "팡파레",
    artist: "다비치",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/689/476/82689476_1652678222501_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    title: "하얀 겨울",
    artist: "미스터 투(mr.2)",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/015/033/818/15033818_1483433863187_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    title: "그대 눈빛 하나에",
    artist: "이상우",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/015/032/841/15032841_1407227620592_1_600x600.JPG/dims/resize/Q_80,0",
  },
];

const playlist2 = [
  {
    title: "내 눈물모아",
    artist: "서지원",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/015/034/993/15034993_1444613666858_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    title: "끝사랑",
    artist: "김범수",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/259/813/80259813_1308113129100_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    title: "나보다 조금 더 높은 곳에 니가 있을뿐",
    artist: "신승훈",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/015/034/963/15034963_1404972874633_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    title: "난 행복해",
    artist: "이소라",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/015/034/590/15034590_1304680209759_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    title: "그대 눈빛 하나에",
    artist: "이상우",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/015/032/841/15032841_1407227620592_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    title: "cuddle up, cozy down christmas",
    artist: "dolly parton(돌리 파튼)",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/610/722/81610722_1601963148653_1_600x600.JPG/dims/resize/Q_80,0",
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
              <div className={styles.home_playlist_name}>
                선선한 날 아침 산책
              </div>
              <span
                className={styles.playlist_info}
                onClick={props.onClickPlayListView}
              >
                더보기
              </span>
            </div>
            <div className={styles.home_card_container}>
              <div className={styles.home_song_card}>
                {playlist1.map((playlist, index) => (
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
              <div className={styles.home_playlist_name}>
                몽환적인 밤 드라이브
              </div>
              <span
                className={styles.playlist_info}
                onClick={props.onClickPlayListView}
              >
                더보기
              </span>
            </div>
            <div className={styles.home_card_container}>
              <div className={styles.home_song_card}>
                {playlist2.map((playlist, index) => (
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
