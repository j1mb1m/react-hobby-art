import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link, useLocation, useParams } from "react-router-dom";
import items from "../database/data-items";
import { useEffect, useState } from "react";
import styles from "./ProductInfo.module.scss";
import FeedbackCarousel from "../component/FeedbackCarousel";
import ProductСard from '../component/ProductСard';
import CustomCounter from "../component/CustomCounter";

function Item() {
    const params = useParams();
    const location = useLocation();
    const { from } = location.state;

    const defaultItem = items.find(item => item.id === params.id);
    const [currentColor, updateCurrentColor] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        updateCurrentColor(0);
    }, [location.pathname]);

    return (
        <div style={{backgroundColor: "white"}}>
            <Header />

            <div className={styles.container}>
                <div className={styles.currentPage}>
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li>
                            <img src="./img/pointer.svg" alt="poiner" />
                        </li>
                        <li><Link to="/catalog">Каталог</Link></li>
                        <li>
                            <img src="./img/pointer.svg" alt="poiner" />
                        </li>
                        <li>
                            <Link to={`/category/${defaultItem.strCategory}`} state={{ from: defaultItem.strCategoryTitle }}>{defaultItem.strCategoryTitle}</Link>
                        </li>
                        <li>
                            <img src="./img/pointer.svg" alt="poiner" />
                        </li>
                        <li>{from}</li>
                    </ul>
                </div>

                <div className={styles["flex-left"]}>
                    <div className={styles.itemColors} >
                        <img src={defaultItem.colors[currentColor].image} alt={defaultItem.name} />
                        <ul>
                            {defaultItem.colors.map((colorItem, index) =>
                                <li key={index}>
                                    <div className={currentColor === index ? `${styles.colorItem} ${styles.activeColor}` : styles.colorItem} onClick={() => updateCurrentColor(index)}>
                                        <div className={styles["color-circle"]} style={{
                                            backgroundColor: `${colorItem.color}`,
                                        }} ></div>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div>
                        <div className="flex-space-between">
                            <h3>{defaultItem.title}</h3>
                            <img src='./img/favorite.svg' alt='Избранное' />
                        </div>
                        <p className={styles.description}>{defaultItem.description}
                        </p>
                        <h3>Xарактеристики</h3>
                        <div className={styles.tableInfo}>
                            <ul>
                                {defaultItem.itemLength ?
                                    <li>
                                        <div>Длина</div>
                                        <div>{defaultItem.itemLength}</div>
                                    </li> : <></>}
                                {defaultItem.producerCountry ?
                                    <li>
                                        <div>Производитель</div>
                                        <div>{defaultItem.producerCountry}</div>
                                    </li> : <></>}
                                {defaultItem.composition ?
                                    <li>
                                        <div>Состав</div>
                                        <div>{defaultItem.composition.map(item => item.name.concat(" ").concat(item.quantity).concat("%")).join("; ")}</div>
                                    </li> : <></>}
                                {defaultItem.diameter ?
                                    <li>
                                        <div>Толщина</div>
                                        <div>{defaultItem.diameter} </div>
                                    </li> : <></>}
                                {defaultItem.weight ?
                                    <li>
                                        <div>Вес</div>
                                        <div>{defaultItem.weight} </div>
                                    </li> : <></>}

                            </ul>
                        </div>

                        <div className={styles["flex-left"]}>
                            <p className={styles.price}>
                                <span className={`${defaultItem.discount > 0 ? `${styles["old-price"]}` : ""}`}>{defaultItem.price} ₽</span>
                                <span className={styles["new-price"]}>{defaultItem.discount > 0 ? `${defaultItem.discount} ₽` : ""}</span>
                            </p>

                            <CustomCounter />
                            
                            <button className="btn-fill">Добавить в корзину</button>
                        </div>
                    </div>
                </div >

                <div className={styles.reviews}>
                    <h3>Отзывы</h3>
                    {defaultItem.feedbacks.length > 0 ?
                        <FeedbackCarousel feedbacks={defaultItem.feedbacks} /> : <div>Отзывов пока нету</div>
                    }
                </div>

                <div className={styles.seeAlso}>
                    <h3>Смотрите также</h3>
                    <div className="wrapper">
                        {items.slice(0, 3).map(item =>
                            <ProductСard
                                key={item.id}
                                item={item} />
                        )}
                    </div>

                </div>
            </div >


            <Footer />
        </div>
    );
}

export default Item;
