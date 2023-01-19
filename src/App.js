import { useState } from "react";
import { Link } from "react-router-dom";
import CategoryCarousel from "./component/CategoryCarousel";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Switch from "./component/Switch";
import category from "./database/data-category";
import Instagram from "./component/Instagram";
import HeaderSlider from "./component/HeaderSlider";
import Advantage from "./component/Advantage";

function App() {
  const [value, setValue] = useState(false);
  return (
    <div className="App">
      <Header />

      <HeaderSlider />


      <div className="container">
        <div className="switch-category">
          <p className={value ? "upper-case " : "upper-case gradient-text"} >Новинки</p>
          <Switch
            isOn={value}
            handleToggle={() => setValue(!value)}
          />
          <p className={value ? "upper-case gradient-text" : "upper-case"}  >Популярное</p>
        </div>

        <CategoryCarousel isPopular={value} />
      </div>


      {/* ---- каталог ------ */}
      <div className="container">
        <div className="catalog ">
          <h1>Каталог товаров</h1>
          <div className="wrapper">

            {category.map(item =>
              <div className="catalog-group" key={item.id}>
                <div className="img" style={{ backgroundImage: `url(${item.img})` }}></div>
                <p className="title upper-case">{item.title}</p>
                <p className="price">от 250 ₽</p>
                <div className="category-action">
                  <Link to={`/category/${item.strCategory}`} state={{ from: item.title }} >
                    Подробнее
                  </Link>
                </div>
              </div>)}
          </div>
        </div>
      </div>

      {/* ---- наши плюсы ------ */}
      <Advantage />

      {/* ---- insta ------ */}
      <Instagram />

      {/* ---- вопросы ------ */}
      <div className="container questions">
        <h1>Есть вопрос? Мы перезвоним!</h1>
        <div className="wrapper">
          <input type="text" className="universal-input" placeholder="Ваше имя" id="user-name" />
          <input type="text" className="universal-input" placeholder="Телефон" id="user-phone" />
          <ul>
            <li> <button className="btn-fill">Отправить</button></li>
            <li className="callout">*нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности</li>
          </ul>
        </div>
      </div>

      {/* ---- footer ------ */}
      <Footer />
    </div >
  );
}

export default App;
