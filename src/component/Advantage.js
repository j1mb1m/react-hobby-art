import styles from "./Advantage.module.scss";

export default function Advantage() {

    return (
        <div className="container">
        <h1>Хобби арт: 9 лет на рынке</h1>
        <div className={styles["grid-3-col"]}>
          <div className={styles.dignity}>
            <img src="./img/suppliers-icon.svg" alt="Поставщики" />
            <div>
              <h2>Поставщики</h2>
              <p>Мы работаем только с надежными
                и проверенными поставщиками товаров
                для творчества</p>
            </div>
          </div>
          <div className={styles.dignity}>
            <img src="./img/goods-icon.svg" alt="Товары" />
            <div>
              <h2>Товары</h2>
              <p>Мы привозим актуальные и новые товары, инструменты для вашего творчества по низким ценам</p>
            </div>
          </div>

          <div className={styles.dignity}>
            <img src="./img/bonus-icon.svg" alt="Бонусы" />
            <div>
              <h2>Бонусы</h2>
              <p>У нас действует накопительная бонусная система скидок. Дарим в день рождения 500 бонусных рублей</p>
            </div>
          </div>
        </div>
      </div>
    );
}