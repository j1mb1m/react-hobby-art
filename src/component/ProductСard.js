import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductСard.module.scss";

export default function ProductСard(props) {

    const [isFavorite, setIsFavorite] = useState(false);

    const onAddFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles["card-item"]} key={props.item.id}>
            <div className={styles["flex-space-between"]}>
                <div className={styles["image-favorite"]} onClick={onAddFavorite} >
                    <img src={isFavorite ? './img/favorite-on.svg' : './img/favorite.svg'} alt='Favorite' />
                </div>
                <Link to={`/item/${props.item.id}`} state={{ from: props.item.title }} ><img src='./img/show-more.svg' alt='Еще' /></Link>
            </div>

            <div className={styles["image"]} style={{ backgroundImage: `url(${props.item.imageUrl})` }}></div>
            <p className={styles["title"]}>{props.item.title}</p>
            <ul>
                {props.item.colors.slice(0, 4).map((color, index) =>
                    <li key={index}>
                        <div className={styles["color-circle"]} style={{
                            backgroundColor: `${color.color}`,
                        }}></div>
                    </li>
                )}
                {props.item.colors.length - 4 > 0 ? <li>+{props.item.colors.length - 4}</li> : <li></li>}
            </ul>
            <p className="price">
                <span className={`${props.item.discount > 0 ? "old-price" : ""}`}>{props.item.price} ₽</span>
                <span className="new-price">{props.item.discount > 0 ? `${props.item.discount} ₽` : ""}</span>
            </p>
            <button className="btn-white card-action">
                <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_137_114)">
                        <path d="M5.08127 0.555126L3.2142 3.66666H7.7858L5.918 0.555126L6.54867 0.178192L8.64087 3.66666H10.4845C10.769 3.66666 11 3.89766 11 4.18219V4.50413C11 6.66288 10.4974 8.79198 9.53187 10.7228C9.49018 10.8061 9.42612 10.8762 9.34685 10.9252C9.26758 10.9741 9.17624 11 9.08307 11H1.91693C1.8237 10.9999 1.73234 10.9738 1.65308 10.9247C1.57382 10.8756 1.50978 10.8055 1.46813 10.7221C0.502632 8.79125 -1.72126e-05 6.66215 4.42075e-10 4.50339L4.42076e-10 4.18219C4.42076e-10 3.89766 0.231 3.66666 0.515533 3.66666H2.35913L4.45133 0.178192L5.08053 0.555126H5.08127Z" fill="#976464" />
                    </g>
                    <defs>
                        <clipPath id="clip0_137_114">
                            <rect width="11" height="11" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                В корзину
            </button>
        </div>
    );
}