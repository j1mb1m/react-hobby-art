import { useState } from "react";
import CategoryCarousel from "./component/CategoryCarousel";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Switch from "./component/Switch";
import Instagram from "./component/Instagram";
import HeaderSlider from "./component/HeaderSlider";
import Advantage from "./component/Advantage";
import Questions from "./component/Questions";
import HorizonrtalCategoryMenu from "./component/HorizonrtalCategoryMenu";

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
      
      <HorizonrtalCategoryMenu />

      <Advantage />

      <Instagram />

      <Questions />

      <Footer />
    </div >
  );
}

export default App;
