import styles from "./ImageCard.module.scss";

function ImageCard(props) {
  return (
    <div className={styles.imageCard} style={{
      backgroundImage: `linear-gradient(180deg, rgba(80, 80, 80, 0.08) 50.1%,
         rgba(46, 46, 46, 0.59) 100%),
         url(${props.image})`
    }}>
      <p>{props.title}</p>
    </div>
  );
}

export default ImageCard;
