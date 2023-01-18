import { React } from "react";
import { Link } from "react-router-dom";

import styles from "./Footer.module.scss";


function Footer() {
  return (
    <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles["flex-space-between"]} >
        <div>
          <img className={styles.logo} src="./img/logo.png" alt="logo" />
          <ul className= {styles.contacts}>
            <li>+7 (924) 765 28 20</li>
            <li>г. Якутск, ул. Петра Алексеева, д. 6, ТЦ “Олонхо”</li>
            <li>Ежедневно с 10:00 до 19:00</li>
            <li>@hobbyart_dv</li>
          </ul>
        </div>

        <div>
          <ul>
            <li><Link to="/">Каталог</Link></li>
            <li>Акции</li>
            <li>Новинки</li>
            <li>Популярное</li>
            <li><Link to="/refund">Гарантии и возврат</Link></li>
          </ul>
        </div>

        <div>
          <ul>
            <li><Link to="/delivery">Оплата и доставка</Link></li>
            <li><Link to="/bonus">Бонусная программа</Link></li>
            <li><Link to="/about">О компании</Link></li>
            <li>Преимущества</li>
            <li>Личный кабинет</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Узнавайте первым о новинках и новостях</li>
            <li>
              <div className={styles["email-box"]}>
                <input type="text" className={styles["email-input"]} placeholder="Ваш Email" />
                <button className={styles["btn-fill"]}>Подписаться</button>
              </div>
              <p className={styles.callout}>
              Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности</p>
            </li>
            <li className={styles["font-600-16"]}>© 2012-2021 ХОББИ АРТ — официальный интернет-магазин товаров для хобби.
              Все права защищены. Условия использования и политика конфиденциальности</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
