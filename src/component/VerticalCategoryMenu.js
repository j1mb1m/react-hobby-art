import styles from "./VerticalCategoryMenu.module.scss";
import category from "../database/data-category";
import { Link } from "react-router-dom";

export default function VerticalCategoryMenu() {

    return (
        <div className={styles["menu-right"]}>
            <h1 className={styles["align-left"]}>Каталог</h1>
            <div className={styles.wrapper}>
                {category.map(item =>
                    <div className={styles["catalog-group-vertical"]}>
                        <div className={styles.imgCategory} style={{ backgroundImage: `url(${item.img_small})` }}></div>
                        <Link to={`/category/${item.strCategory}`} state={{ from: item.title }} >
                            <p className={styles.title}>{item.title}</p>
                        </Link>
                    </div>)}
            </div>
        </div>
    );
}