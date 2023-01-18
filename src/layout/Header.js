import { React } from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

export default function Header() {

    return (
        <header className={styles.header}>
            <div className={styles["bg-color"]}>
                <div className={`${styles.container} ${styles["menu-top"]}`}>
                    <ul className={styles["flex-space-between"]}>
                        <li>
                            <img src="./img/phone.svg" alt="phone" />
                            +7 (924) 765 28 20
                        </li>
                        <li>
                            <img src="./img/location.svg" alt="adress" />
                            г. Якутск, ул. Петра Алексеева, д. 6, ТЦ “Олонхо”
                        </li>
                        <li>
                            <img src="./img/time.svg" alt="time" />
                            Ежедневно с 10:00 до 19:00
                        </li>
                    </ul>
                </div>
            </div>

            <div className={`${styles.container} ${styles["menu-bottom"]}`}>
                <div>
                    <ul className={styles["flex-space-between"]}>
                        <li><Link to="/catalog">Каталог</Link></li>
                        <li><Link to="/delivery">Оплата и доставка</Link></li>
                        <li><Link to="/bonus">Бонусная программа</Link></li>
                        <li><Link to="/about">О компании</Link></li>
                        <li><Link to="/contacts">Контакты</Link></li>
                    </ul>
                </div>
                <img className={styles.logo} src="./img/logo.png" alt="logo" />

                <div className={styles["flex-space-between"]}>
                    <div className={styles["search-box"]} >
                        <input type="text" className={styles["search-input"]} placeholder="Поиск товара" />
                        <div className={styles["search-icon"]}>
                            <img src="./img/search-icon.svg" alt="Найти" />
                        </div>
                    </div>

                    <button className={styles["btn-white"]}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.3125 13.125C3.3125 13.125 2.375 13.125 2.375 12.1875C2.375 11.25 3.3125 8.4375 8 8.4375C12.6875 8.4375 13.625 11.25 13.625 12.1875C13.625 13.125 12.6875 13.125 12.6875 13.125H3.3125ZM8 7.5C8.74592 7.5 9.46129 7.20368 9.98874 6.67624C10.5162 6.14879 10.8125 5.43342 10.8125 4.6875C10.8125 3.94158 10.5162 3.22621 9.98874 2.69876C9.46129 2.17132 8.74592 1.875 8 1.875C7.25408 1.875 6.53871 2.17132 6.01126 2.69876C5.48382 3.22621 5.1875 3.94158 5.1875 4.6875C5.1875 5.43342 5.48382 6.14879 6.01126 6.67624C6.53871 7.20368 7.25408 7.5 8 7.5Z" fill="#976464" />
                        </svg>
                        Войти
                    </button>

                    <button className={styles["btn-white"]}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8334 2.97111C12.3123 1.90167 10.8111 1.02667 9.06503 1.53611C8.23065 1.77712 7.50267 2.29398 7.00003 3.00223C6.49739 2.29398 5.76941 1.77712 4.93503 1.53611C3.18503 1.03445 1.68781 1.90167 1.1667 2.97111C0.435585 4.46834 0.738919 6.15223 2.06892 7.97612C3.11114 9.40334 4.60059 10.85 6.76281 12.53C6.83114 12.5833 6.91532 12.6122 7.00197 12.6122C7.08863 12.6122 7.17281 12.5833 7.24114 12.53C9.39947 10.8539 10.8928 9.41889 11.935 7.97612C13.2611 6.15223 13.5645 4.46834 12.8334 2.97111Z" fill="#976464" />
                        </svg>
                        Избранное
                    </button>

                    <button className={styles["btn-white"]}>
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
                        <Link to="/basket">Корзина</Link>
                    </button>
                </div>
            </div>
        </header >
    );
}