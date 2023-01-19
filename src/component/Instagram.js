import styles from "./Instagram.module.scss";

export default function Instagram() {

    return (
        <div className={`${styles.container} ${styles.instagramm}`}>
            <h1>Наш instagram</h1>
            <div className={styles["grid-2-1-1-col"]}>
                <div className={styles["instagram-card"]}>
                    <img src="./img/instagram/insta01.jpg" alt="" />
                    <div className={styles["intagramm-status"]}>
                        <img src="./img/instagram/insta-like.svg" alt="" />
                        <p>34</p>
                        <img src="./img/instagram/insta-comment.svg" alt="" />
                        <p>0</p>
                    </div>
                </div>
                <div className={styles["instagram-card"]}>
                    <img src="./img/instagram/insta02.jpg" alt="" />
                    <div className={styles["intagramm-status"]}>
                        <img src="./img/instagram/insta-like.svg" alt="" />
                        <p>16</p>
                        <img src="./img/instagram/insta-comment.svg" alt="" />
                        <p>10</p>
                    </div>
                </div>
                <div className={styles["instagram-card"]}>
                    <img src="./img/instagram/insta03.jpg" alt="" />
                    <div className={styles["intagramm-status"]}>
                        <img src="./img/instagram/insta-like.svg" alt="" />
                        <p>28</p>
                        <img src="./img/instagram/insta-comment.svg" alt="" />
                        <p>7</p>
                    </div>
                </div>
                <div className={styles["instagram-card"]}>
                    <img src="./img/instagram/insta04.jpg" alt="" />
                    <div className={styles["intagramm-status"]}>
                        <img src="./img/instagram/insta-like.svg" alt="" />
                        <p>15</p>
                        <img src="./img/instagram/insta-comment.svg" alt="" />
                        <p>3</p>
                    </div>
                </div>
                <div className={styles["instagram-card"]}>
                    <img src="./img/instagram/insta05.jpg" alt="" />
                    <div className={styles["intagramm-status"]}>
                        <img src="./img/instagram/insta-like.svg" alt="" />
                        <p>18</p>
                        <img src="./img/instagram/insta-comment.svg" alt="" />
                        <p>6</p>
                    </div>
                </div>
                <div className={styles["instagram-card"]}>
                    <img src="./img/instagram/insta06.jpg" alt="" />
                    <div className={styles["intagramm-status"]}>
                        <img src="./img/instagram/insta-like.svg" alt="" />
                        <p>2</p>
                        <img src="./img/instagram/insta-comment.svg" alt="" />
                        <p>0</p>
                    </div>
                </div>
            </div>

            <button className={styles["btn-fill"]}>@hobbyart_dv</button>
        </div>
    );
}