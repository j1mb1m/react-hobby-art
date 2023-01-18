import Header from "../layout/Header";
import Footer from "../layout/Footer";
import category from "../database/data-category";
import { Link } from "react-router-dom";
import HeaderSlider from "../component/HeaderSlider";

function Refund() {

    return (
        <div className="App">
            <Header />

            <HeaderSlider />


            <div className="container">
                <div className="currentPage">
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li>
                            <img src="./img/pointer.svg" alt="poiner" />
                        </li>
                        <li><Link to="/about" id="about">О компании</Link></li>
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
                            <h1 className="align-left">Гарантия и возврат</h1>
                            <p>
                                Обращаем ваше внимание, что цвет продукции может отличаться от цветов и оттенков на сайте, в зависимости от цветопередачи вашего монитора.
                            </p>
                            <p>
                                Обращения по качеству товара принимаются в течение 14 дней с момента получения заказа и в течение гарантийного срока оборудования.
                            </p>
                            <p>
                                Вам необходимо отправить на электронную почту exp@hobbyart.ru письмо с указанием:
                            </p>
                            <p>
                                номера заказа; <br/>
                                номера артикула товара;<br/>
                                описания ситуации;<br/>
                                приложить фото (видео) некачественного товара.
                            </p>
                            <p>
                                Возврат товара надлежащего качества осуществляется в течение 7 дней с момента получения заказа, если товар не был в употреблении, сохранены его потребительские свойства, товарный вид, а также ярлыки, пломбы, документы, подтверждающие факт покупки. Исключение составляют товары не подлежащие обмену и возврату в соответствии со списком, установленном Постановлением Правительства РФ № 55 от 19 января 1998 г.
                            </p>
                            <p>
                                Возврат товара надлежащего качества осуществляется за счёт покупателя - Почтой России или в пунктах выдачи транспортной компании СДЭК.
                            </p>
                            <p>
                                Менеджер по работе с рекламациями свяжется с Вами в будний день с 9:00 до 18:00 по московскому времени.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div >
    );
}

export default Refund;
