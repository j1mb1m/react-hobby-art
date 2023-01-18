import Header from "../layout/Header";
import Footer from "../layout/Footer";
import category from "../database/data-category";
import { Link } from "react-router-dom";

function Delivery() {

    return (
        <div className="App">
            <Header />

            <div className="container">
                <div className="slider-menu ">
                    <img src="./img/slider/menu-slider.jpg" alt="Slides" />
                    <button className="btn-fill"> В каталог</button>
                </div>
            </div>


            <div className="container">
                <div className="currentPage">
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li>
                            <img src="./img/pointer.svg" alt="poiner" />
                        </li>
                        <li><Link to="/delivery" id="delivery">Оплата и доставка</Link></li>
                    </ul>
                </div>

                <div className="delivery-context">
                    <div className="menu-right">
                        <h1 className="align-left">Каталог</h1>
                        <div className="wrapper">
                            {category.map(item =>
                                <div className="catalog-group-vertical">
                                    <div className="img" style={{ backgroundImage: `url(${item.img_small})` }}></div>
                                    <p className="title">{item.title}</p>
                                </div>)}
                        </div>
                    </div>
                    <div className="menu-left">
                        <div>
                            <h1 className="align-left">Оплата</h1>
                            <p>
                                Оформить заказ в нашем магазине можно и без регистрации, просто заполнив короткую форму для доставки.
                            </p>
                            <p>
                                После оформления заказа доступна онлайн оплата банковской картой (оплата производится через защищенный онлайн сервис ПАО «Сбербанк»).
                            </p>
                            <p>
                                Срок сбора и обработки заказа осуществляется в течение 1-2 дней после поступления оплаты.
                            </p>
                        </div>
                        <div>
                            <h1 className="align-left">Доставка</h1>
                            <p>
                                Доставка заказанных товаров осуществляется в течение 1-2 дней по городу Якутску (в черте города).
                            </p>
                            <p>
                                Стоимость доставки по городу 150-250 рублей в зависимости от адреса доставки.
                            </p>
                            <p>
                                Бесплатная доставка от 2000 рублей в черте города.
                            </p>
                            <p>
                                Отдалённые районы рассчитываются индивидуально.
                            </p>
                            <p>
                                Крупногабаритные товары (как картон) доставка рассчитывается индивидуально.
                            </p>
                            <p>
                                Чтобы отслеживать информацию о заказе, просматривать историю своих заказов и участвовать в бонусной программе авторизируйтесь или пройдите процедуру регистрации. Будьте внимательны при вводе электронной почты, ФИО и адрес доставки.
                            </p>
                        </div>
                        <div>
                            <h1 className="align-left">Самовывоз</h1>
                            <p>Вы можете забрать свой заказ самостоятельно по адресу:<br />
                                г. Якутск, ул. Петра Алексеева, д. 6, ТЦ Олонхо, 2 этаж, «Хобби Арт».</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div >
    );
}

export default Delivery;
