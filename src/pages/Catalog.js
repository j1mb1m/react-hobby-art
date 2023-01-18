import Header from "../layout/Header";
import Footer from "../layout/Footer";
import category from "../database/data-category";
import { Link } from "react-router-dom";
import HeaderSlider from "../component/HeaderSlider";

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

                {/* ---- каталог ------ */}
                <div className="catalog ">
                    <h1>Каталог товаров</h1>
                    <div className="wrapper">

                        {category.map(item =>
                            <div className="catalog-group" key={item.id}>
                                <div className="img" style={{ backgroundImage: `url(${item.img})` }}></div>
                                <p className="title upper-case">{item.title}</p>
                                <p className="price font-600-16">от 250 ₽</p>
                                <div className="category-action">
                                    <Link to={`/category/${item.strCategory}`} state={{ from: item.title }} >
                                        Подробнее
                                    </Link>
                                </div>
                            </div>)}
                    </div>
                </div>

            </div>

            <Footer />
        </div >
    );
}

export default Catalog;
