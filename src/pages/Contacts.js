import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link } from "react-router-dom";
import HeaderSlider from "../component/HeaderSlider";
import VerticalCategoryMenu from "../component/VerticalCategoryMenu";

function Contacts() {

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
                        <li><Link to="/about" id="about">Контакты</Link></li>
                    </ul>
                </div>

                <div className="contact-context">
                    <VerticalCategoryMenu />
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
