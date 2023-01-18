import Header from "../layout/Header";
import Footer from "../layout/Footer";
import category from "../database/data-category";
import { Link } from "react-router-dom";

function Contacts() {

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
                        <li><Link to="/about" id="about">Контакты</Link></li>
                    </ul>
                </div>

                <div className="contact-context">
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
                        <h1 className="align-left">Контакты</h1>
                        <p>
                            +7 (924) 765 28 20
                        </p>
                        <p>
                            г. Якутск, ул. Петра Алексеева, д. 6, ТЦ “Олонхо”
                        </p>
                        <p>
                            Ежедневно с 10:00 до 19:00
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div >
    );
}

export default Contacts;
