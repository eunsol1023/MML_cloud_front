import React from "react";
import styles from "./playlist.module.css";

const playlists = [
  {
    id: 1,
    title: "Love Lee",
    artist: "AKMU",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/181/610/84181610_1692585955705_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    id: 2,
    title: "단기 알바",
    artist: "기리보이",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/372/146/84372146_1698310204451_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    id: 3,
    title: "음악의 신",
    artist: "SEVENTEEN",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/411/479/84411479_1698023788065_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    id: 4,
    title: "Super Shy",
    artist: "NewJeans",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/019/740/84019740_1688692234715_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    id: 5,
    title: "Get A Guitar",
    artist: "RIIZE",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/181/596/84181596_1693817383651_1_600x600.JPG/dims/resize/Q_80,0",
  },
];

const PlaylistMorePage = () => {
  return (
    <div className={styles.body}>
      <div className={styles.playlisttitle}>플레이리스트 이름</div>
      <div className={styles.playlistContainer}>
        
          {playlists.map((playlist) => (
            <div key={playlist.id} className={styles.playlistItem}>
              <div className={styles.playlistImageBox}>
                <img
                  src={playlist.image}
                  alt={playlist.title}
                  className={styles.playlistImage}
                />
              </div>
              <div className={styles.title}>{playlist.title}</div>
              <div className={styles.artist}>{playlist.artist}</div>
            </div>
          ))}
        </div>
      </div>

  );
};

export default PlaylistMorePage;
