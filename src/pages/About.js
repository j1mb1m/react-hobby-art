import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import HeaderSlider from "../component/HeaderSlider";
import VerticalCategoryMenu from "../component/VerticalCategoryMenu";

function About() {

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

                <div className="flex-left">
                    <VerticalCategoryMenu />
                    <div className="menu-left">
                        <div>
                            <h1 className="align-left">О компании</h1>
                            <div className="company-foto">
                                Фото магазина или коллектива
                            </div>
                            <p>
                                Доброго времени! Рады видеть вас на нашем сайте!
                            </p>
                            <p>
                                Наш магазин работает с 2012 года.
                            </p>
                            <p>
                                Мы как и многие, были увлечены различными видами творчества, любили пробовать и создавать, что-то новое, но вот выбора материалов тогда в нашем городе не было. И тогда мы не остановились, и наши увлечения к творчеству и рукоделию переросли в любимое дело и мы открыли небольшой магазинчик.
                            </p>
                            <p>
                                Мы постарались создать уютное и удобное место, где каждый из вас сможет найти для себя нужные материалы и инструменты для воплощения своих задумок и идей.
                                Каждый день мы находимся в поисках новых и качественных товаров для вас.
                            </p>
                            <p>
                                И вот, в 2021 году, мы запускаем наш сайт, чтобы вам было ещё удобнее совершать покупки невыходя из дома.
                            </p>
                            <p>
                                Мы продолжаем расти и развиваться.
                            </p>
                            <p>
                                Спасибо, что вы с нами!
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div >
    );
}

export default About;
