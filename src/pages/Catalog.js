import Header from "../layout/Header";
import Footer from "../layout/Footer";
import category from "../database/data-category";
import { Link } from "react-router-dom";
import HeaderSlider from "../component/HeaderSlider";
import HorizonrtalCategoryMenu from "../component/HorizonrtalCategoryMenu";

function Catalog() {

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
                        <li><Link to="/catalog">Каталог</Link></li>
                    </ul>
                </div>

                <HorizonrtalCategoryMenu />
            </div>

            <Footer />
        </div >
    );
}

export default Catalog;
