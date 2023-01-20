import styles from "./HorizonrtalCategoryMenu.module.scss";
import category from "../database/data-category";
import { Link } from "react-router-dom";

export default function HorizonrtalCategoryMenu() {

    return (
        <div className="container">
            <div className={styles.catalog}>
                <h1>Каталог товаров</h1>
                <div className={styles.wrapper}>

                    {category.map(item =>
                        <div className={styles.catalogGroup} key={item.id}>
                            <div className={styles.cardImage} style={{ backgroundImage: `url(${item.img})` }}></div>
                            <p className={styles.title}>{item.title}</p>
                            <p className={styles.price}>от 250 ₽</p>
                            <div className={styles.categoryAction}>
                                <Link to={`/category/${item.strCategory}`} state={{ from: item.title }} >
                                    Подробнее
                                </Link>
                            </div>
                        </div>)}
                </div>
            </div>
        </div>
    );
}