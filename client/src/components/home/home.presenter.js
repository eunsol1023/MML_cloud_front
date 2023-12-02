import styles from "./home.module.css";

const playlist1 = [
  {
    title: "봄이 좋냐??",
    artist: "10CM",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/080/806/366/80806366_1459470656439_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    title: "봄여름가을겨울 (Still Life)",
    artist: "어반자카파",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/624/911/82624911_1649062753955_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    title: "사랑은(Feat.원슈타인)",
    artist: "마미손 ",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/311/822/81311822_1574043865771_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    title: "팡파레",
    artist: "다비치",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/082/689/476/82689476_1652678222501_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    title: "Martini Blue",
    artist: "DPR LIVE",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/010/193/81010193_1512632923590_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    title: "babyblue",
    artist: "그래쓰 (GRASS)",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/081/443/351/81443351_1589699618455_1_600x600.JPG/dims/resize/Q_80,0",
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
  return (
    <div className={styles.home_body}>
      <div className={styles.home_search_area}>
        <div className={styles.home_search}>
          <input
            type="text"
            value={props.sentence}
            onChange={props.onInputChange}
            placeholder="상황 및 감정 입력"
          />
          <button onClick={props.onClickSearch} type="submit">
            검색
          </button>
        </div>
      </div>
      <div className={styles.home_playlist_area}>
        <div className={styles.home_playlist}>
          <div className={styles.home_playlist_container}>
            <div className={styles.home_playlist_name}>월요일 아침 출근길에 들을 노래</div>
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
