import React from "react";
import styles from "./playlistview.module.css";

const playlists = [
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

export default function PlayListViewUI(props) {
  return (
    <div className={styles.body}>
      <div className={styles.playlisttitle}>{props.data?.title}</div>
      <div className={styles.playlistContainers}>
        <div className={styles.playlistContainer}>
          {props.data?.map((data, index) => (
            <div key={index} className={styles.playlistItem}>
              <div className={styles.playlistImageBox}>
                <img
                  src={data?.album_image_url}
                  alt={data?.title}
                  className={styles.playlistImage}
                />
              </div>
              <div className={styles.title} onClick={props.onClickTitle}>
                {data?.title}
              </div>
              <div className={styles.artist}>{data?.artist}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
