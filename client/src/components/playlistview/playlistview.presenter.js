import React from "react";
import styles from "./playlistview.module.css";

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
  {
    id: 6,
    title: "음악의 신",
    artist: "SEVENTEEN",
    image:
      "https://image.genie.co.kr/Y/IMAGE/IMG_ALBUM/084/411/479/84411479_1698023788065_1_600x600.JPG/dims/resize/Q_80,0",
  },
  {
    id: 7,
    title: "Perfect Night",
    artist: "LE SSERAFIM (르세라핌)",
    image:
      "https://cdnimg.melon.co.kr/cm2/album/images/113/52/904/11352904_20231027101104_1000.jpg?15266616a973e99cdf8784835d06f01d/melon/quality/80/optimize",
  },
  {
    id: 8,
    title: "Baddie",
    artist: "IVE (아이브)",
    image:
      "https://cdnimg.melon.co.kr/cm2/album/images/113/33/459/11333459_20231013103537_1000.jpg?faf3d08c19b6937258fd17162051dbc8/melon/quality/80/optimize",
  },
  {
    id: 9,
    title: "Seven (feat. Latto)",
    artist: "정국",
    image:
      "https://cdnimg.melon.co.kr/cm2/album/images/112/86/070/11286070_20230713181059_1000.jpg?0b3a98d363e31435d805d60e3041a54b/melon/quality/80/optimize",
  },
  {
    id: 10,
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

export default function PlayListViewUI() {
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
}
