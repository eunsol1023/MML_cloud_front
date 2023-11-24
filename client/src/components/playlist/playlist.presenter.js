import styles from "./playlist.module.css";


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
            {props.song2vec?.map((playlist, index) => (
              <div key={index} className={styles.card}>
                <img
                  src={playlist.album_image_url}
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
              onClick={props.onClickPlayListView2}
            >
              더보기
            </span>
          </div>
          <div className={styles.song_box}>
            {props.colaboData?.map((playlist, index) => (
              <div key={index} className={styles.card}>
                <img
                  src={playlist.album_image_url}
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
