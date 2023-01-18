import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import items from "../database/data-items";
import categories from "../database/data-category";
import Footer from '../layout/Footer';
import Header from '../layout/Header';
import ProductСard from '../component/ProductСard';

export default function CatalogProducts(props) {
    const params = useParams();

    const location = useLocation()
    const { from } = location.state;

    const defaultFilter = {
        type: [],
        composition: [],
        product: [],
        producer: []
    }

    const [myFilter, updateMyFilter] = useState(defaultFilter);

    const defaultList = items.filter(item => item.strCategory.toLowerCase() === params.name.toLowerCase());
    const [list, updateList] = useState(defaultList);

    const [sortDirection, setSortDirection] = useState();
    const [countItems, setCountItems] = useState(defaultList.length);

    const handleChange = (event) => {
        var value = event.target.value;
        var target = event.target;

        var filterName = target.id.slice(0, target.id.indexOf("_"));

        var tempArr = myFilter[filterName];
        if (!tempArr.includes(value)) {
            if (target.checked) {
                updateMyFilter({ ...myFilter, filterName: tempArr.push(value) });
            }
            else {
                updateMyFilter({ ...myFilter, filterName: tempArr.filter(item => item !== value) });
            }
        }
    }

    const getFilteredItems = () => {

        let fitems = defaultList.filter(item => item.strCategory.toLowerCase() === params.name.toLowerCase())
            .filter((filterItem) => myFilter.type.length > 0 ? myFilter.type.includes(filterItem.type) : true)
            .filter((filterItem) => myFilter.product.length > 0 ? myFilter.product.includes(filterItem.product) : true)
            .filter((filterItem) => myFilter.producer.length > 0 ? myFilter.producer.includes(filterItem.producer) : true)

        updateList(fitems);

        setCountItems(fitems.length);
    }

    const handleFilter = (event) => {
        getFilteredItems();
    }

    const handleClear = (event) => {
        var checkbox = document.getElementsByClassName("custom-checkbox");
        for (var i = 0; i < checkbox.length; i++) {
            checkbox[i].checked = false;
        }
        setCountItems(defaultList.length);
        updateMyFilter(defaultFilter);
        updateList(defaultList);
    }

    const sortUp = () => {
        let fitems = list.sort((x, y) => (x.discount > 0 ? x.discount : x.price) - (y.discount > 0 ? y.discount : y.price))
        updateList(fitems);
        setSortDirection(true);
    }
    const sortDown = () => {
        let fitems = list.sort((y, x) => (x.discount > 0 ? x.discount : x.price) - (y.discount > 0 ? y.discount : y.price))
        updateList(fitems);
        setSortDirection(false);
    }

    return (
        <>
            <Header />
            {/* ---- каталог ------ */}
            <div className="container">
                <div className="currentPage">
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li>
                            <img src="./img/pointer.svg" alt="poiner" />
                        </li>
                        <li><Link to="/catalog">Каталог</Link></li>
                        <li>
                            <img src="./img/pointer.svg" alt="poiner" />
                        </li>
                        <li><Link to={`/category/${params.name}`} state={{ from: from }} >{from}</Link></li>
                    </ul>
                </div>

                <div className="panel-sort">
                    <button className="btn-white" onClick={sortDown}>Цена<img src="./img/down_arrow.svg" alt="Стрела вверх" /></button>
                    <button className="btn-white" onClick={sortUp}>Цена<img src="./img/down_arrow.svg" alt="Стрела вверх" /></button>
                </div>

                <div className="flex-left">
                    <div className="filter">
                        {categories.filter(item => item.strCategory.toLowerCase() === params.name.toLowerCase())
                            .map((item, index) =>
                                <div key={index}>
                                    {item.type.length ?
                                        <><div className="filter-group"><h4>Тип изделий</h4><ul>
                                            {item.type.map((type, index) => <li key={index}>
                                                <div>
                                                    <input
                                                        type="checkbox"
                                                        id={`type_${index}`}
                                                        className="custom-checkbox"
                                                        onChange={handleChange}
                                                        value={type}
                                                    />
                                                    <label htmlFor={`type_${index}`}>{type}</label>
                                                </div>
                                            </li>
                                            )}
                                        </ul>
                                        </div></>
                                        : <></>}
                                    {item.composition.length ?
                                        <><div className="filter-group"><h4>Состав</h4><ul>
                                            {item.composition.map((type, index) => <li key={index}>
                                                <div>
                                                    <input
                                                        type="checkbox"
                                                        id={`composition_${index}`}
                                                        className="custom-checkbox"
                                                        onChange={handleChange}
                                                        value={type}
                                                    />
                                                    <label htmlFor={`composition_${index}`}>{type}</label>
                                                </div>
                                            </li>
                                            )}
                                        </ul>
                                        </div></>
                                        : <></>}

                                    {item.diameter.length ?
                                        <><div className="filter-group"><h4>Диаметр</h4><ul>
                                            {item.diameter.map((type, index) => <li key={index}>
                                                <div>
                                                    <input
                                                        type="checkbox"
                                                        id={`diameter_${index}`}
                                                        className="custom-checkbox"
                                                        onChange={handleChange}
                                                        value={type}
                                                    />
                                                    <label htmlFor={`diameter_${index}`}>{type}</label>
                                                </div>
                                            </li>
                                            )}
                                        </ul>
                                        </div></>
                                        : <></>}

                                    {item.product.length ?
                                        <><div className="filter-group"><h4>Продукт</h4><ul>
                                            {item.product.map((type, index) => <li key={index}>
                                                <div>
                                                    <input
                                                        type="checkbox"
                                                        id={`product_${index}`}
                                                        className="custom-checkbox"
                                                        onChange={handleChange}
                                                        value={type}
                                                    />
                                                    <label htmlFor={`product_${index}`}>{type}</label>
                                                </div>
                                            </li>
                                            )}
                                        </ul>
                                        </div></>

                                        : <></>}
                                    {item.producer.length ?
                                        <><div className="filter-group"><h4>Производитель</h4><ul>
                                            {item.producer.map((type, index) => <li key={index}>
                                                <div>
                                                    <input
                                                        type="checkbox"
                                                        id={`producer_${index}`}
                                                        className="custom-checkbox"
                                                        onChange={handleChange}
                                                        value={type}
                                                    />
                                                    <label htmlFor={`producer_${index}`}>{type}</label>
                                                </div>
                                            </li>
                                            )}
                                        </ul>
                                        </div></>
                                        : <></>}
                                </div>
                            )
                        }
                        <div className="filter-group">
                            <div >
                                <button className="btn-fill" onClick={handleFilter}>Показать</button>
                            </div>
                            <div>
                                <button className="btn-white" onClick={handleClear}>Очистить</button>
                            </div>
                            <p className="count-item">Подобрано {countItems} товаров</p>
                        </div>
                    </div>


                    <div className="catalog">
                        <div className="wrapper">
                            {
                                list.map(item =>
                                    <ProductСard 
                                    key={item.id} 
                                    item = {item}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}