import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";

import styles from "./Basket.module.scss";
import CustomCounter from "../component/CustomCounter";


export default function Basket() {


    return (
        <div style={{ backgroundColor: "white" }}>
            <Header />

            <div className={styles.container}>
                <div className={styles.currentPage}>
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li>
                            <img src="./img/pointer.svg" alt="poiner" />
                        </li>
                        <li><Link to="/basket">Корзина</Link></li>
                    </ul>
                </div>

                <div className={styles["flex-left"]}>
                    <div>
                        <div>
                            <h3>Способ получения</h3>
                            <form id={styles.address}>
                                <input type="text" className="custom-input" placeholder="Город" />

                                <div className={styles.select}>
                                    <select id="mailSelect">
                                        <option value="mail">Почта россии</option>
                                        <option value="dpd">DPD</option>
                                        <option value="sdek">СДЭК</option>
                                    </select>
                                </div>

                                <div className="flex-left">
                                    <input id={styles.userStreet} type="text" className="custom-input" placeholder="Улица" />
                                    <input id={styles.userHome} type="text" className="custom-input" placeholder="Дом" />
                                    <input id={styles.userFlat} type="text" className="custom-input" placeholder="Квартира" />
                                    <input id={styles.userIndex} type="text" className="custom-input" placeholder="Индекс" />
                                </div>
                                <input id={styles.addressComment} type="text" className="custom-input" placeholder="Добавить комментарий" />
                            </form>
                        </div>
                        <div>
                            <h3>Данные получателя</h3>
                            <form>
                                <div className="flex-left">
                                    <input type="text" className="custom-input" placeholder="Фамилия" />
                                    <input type="text" className="custom-input" placeholder="Имя" />
                                    <input type="text" className="custom-input" placeholder="Отчество" />
                                </div>

                                <input id={styles.userPhone} type="text" className="custom-input" placeholder="Номер телефона" />
                                <p>По этому номеру телефона мы с вяжемся с вами для подтверждения заказа</p>

                                <input id={styles.userMail} type="text" className="custom-input" placeholder="E-mail" />
                                <p>На эту почту вам придет письмо с составом заказа, а так же трэк-номер для его отслеживания</p>

                                <div>
                                    <input
                                        type="checkbox"
                                        id="mailing"
                                        className={styles["custom-checkbox"]}
                                    />
                                    <label htmlFor="mailing">Подписаться на рассылку новинок и акций</label>
                                </div>


                            </form>
                        </div>
                        <div>
                            <h3>Способы оплаты</h3>
                            <form>
                                <div className="form_radio">
                                    <input type="radio" id="cash" name="payment" value="1" defaultChecked />
                                    <label htmlFor="cash">Оплата при получении наличными или картой</label>
                                </div>
                                <div className="form_radio">
                                    <input type="radio" id="online" name="payment" value="2" />
                                    <label htmlFor="online">Оплата банковской картой онлайн</label>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div>
                        <div>
                            <h3>Состав заказа</h3>
                            <div className={styles.basketProducts}>
                                <div className={styles.basketProduct}>
                                    <div className={styles["image"]} style={{ backgroundImage: `url("./img/catalog/items/item01.png" )` }}>
                                    </div>
                                    <div className={styles["title"]}>Шпагат Macrametr 4 мм, 100 нитей</div>
                                    <CustomCounter />

                                    <div className={styles.price}>332 ₽</div>
                                    <div className={styles.deleteIcon}>
                                        <img src="./img/delete-icon.svg" alt="Delete" />
                                    </div>
                                </div>

                                <div className={styles.basketProduct}>
                                    <div className={styles["image"]} style={{ backgroundImage: `url("./img/catalog/items/item02.png" )` }}>
                                    </div>
                                    <div className={styles["title"]}>Шпагат Macrametr 4 мм, 100 нитей</div>
                                    <CustomCounter />

                                    <div className={styles.price}>332 ₽</div>
                                    <div className={styles.deleteIcon}>
                                        <img src="./img/delete-icon.svg" alt="Delete" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={styles.promoCode}>
                            <h3>Промокод</h3>
                            <div className="flex-left">
                                <input type="text" className="custom-input" id={styles.promoCode} placeholder="Промокод" />
                                <button className="btn-fill">Активировать</button>
                            </div>
                            <p className={styles.signature}>У вас есть промокод? Активируйте его</p>
                            <div className={styles.bonusInfo}>
                                <div>Доступно для списания: <span className={styles.bonus}>25 бонусов</span></div>
                                <div>Использовать</div>
                            </div>

                            <div className={styles.cartTotalBlock}>
                                <ul>
                                    <li>
                                        <span>Товары, 3 шт</span>
                                        <div></div>
                                        <p>852 ₽</p>
                                    </li>
                                    <li>
                                        <span>Доставка</span>
                                        <div></div>
                                        <p>254 ₽</p>
                                    </li>
                                    <li>
                                        <span>Списание бонусов</span>
                                        <div></div>
                                        <p>-25 ₽</p>
                                    </li>
                                    <li>
                                        <p>Вам будет начислено: <br /><span className={styles.bonus}>51 бонус</span></p>
                                        <div></div>
                                        <p className={styles.totalCost}>1081 ₽</p>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.arrangeButton}>
                                <button className="btn-fill">Оформить заказ</button>
                                <div>
                                    Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div >
    );
}

