import Header from "../layout/Header";
import Footer from "../layout/Footer";
import category from "../database/data-category";
import { Link } from "react-router-dom";

function BonusProgramm() {

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
                            <img src="../img/pointer.svg" alt="poiner" />
                        </li>
                        <li><Link to="/bonus" id="bonus">Бонусная программа</Link></li>
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
                            <h1 className="align-left">Бонусная программа</h1>
                            <p>
                                Что такое Бонусная программа?
                            </p>
                            <p>
                                Мы полагаем, что каждая покупка должна вам приносить не только радость, но и выгоду! Поэтому, мы создали для вас бонусную программу, которая позволит вам вернуть до 10 % от стоимости товаров к себе на счет.
                            </p>
                            <p>
                                Вы совершаете покупки и автоматически получаете бонусы на свой бонусный счет
                                Используя накопленные бонусы, можно получить скидку до 50% стоимости новых покупок.
                                Как работает бонусная программа?
                            </p>
                            <p>
                                Становясь участником нашей бонусной программы, вы получаете часть от стоимости покупок в виде бонусных рублей, которыми можно оплатить до 50% стоимости в чеке.*
                            </p>
                            <p>
                                Бонусными рублями можно воспользоваться только при оплате заказа в интернет-магазине.***
                            </p>
                            <p>
                                Бонусный рубль - условная единица. 1 бонусный рубль = 1 ₽ скидки
                            </p>
                            <br />
                            <p>
                                За что мне начислят бонусы?
                                <br />
                                За покупки Акции
                            </p>
                            <br />
                            <p>
                                Как долго я могу хранить свои бонусные рубли?
                                Срок жизни баллов 1 год. После этого они аннулируются.
                            </p>
                            <br />
                            <p>
                                Какие правила использования бонусов?
                                <br />
                                Вы можете оплачивать бонусными рублями до 50% от стоимости товаров. Нельзя обменивать бонусы на рубли, нельзя продавать их, передаривать.
                            </p>
                            <br />
                            <p>
                                Как воспользоваться бонусами?
                                <br />
                                При оформлении заказа, под выбором способа оплаты, будут отображаться бонусы (Подробнее). Для того, чтобы воспользоваться бонусами, нужно выбрать "Использовать" (Подробнее). После применения бонусов, скидка отобразится в поле "Скидка за бонусы" (Подробнее).
                            </p>
                            <br />
                            <p>
                                Когда мне начислят бонусы?
                                <br />
                                Бонусы начисляются после получения заказа.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div >
    );
}

export default BonusProgramm;
