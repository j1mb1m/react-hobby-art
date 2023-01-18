import styles from "./FeedbackCard.module.scss";

function FeedbackCard(props) {
    return (

        < div className={styles.feedbackCard} >
            <img src="./img/user-foto.jpg" alt="User foto" />
            <div>
                <div className={styles["flex-space-between"]}>
                    <div>
                        <h4>{props.userName}</h4>
                        <div className={styles.fiveStar}>
                            <div className={props.rating > 0 ? styles.on : styles.off}></div>
                            <div className={props.rating > 1 ? styles.on : styles.off}></div>
                            <div className={props.rating > 2 ? styles.on : styles.off}></div>
                            <div className={props.rating > 3 ? styles.on : styles.off}></div>
                            <div className={props.rating > 4 ? styles.on : styles.off}></div>
                        </div>
                    </div>
                    <div className={styles.date}>
                        {props.dateTime}
                    </div>
                </div>
                <p className={styles.commentText}>Комментарий: {props.comment} </p>
            </div>
        </div >
    );
}

export default FeedbackCard;
