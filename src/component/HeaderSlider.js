import { Link } from "react-router-dom";
import styles from "./HeaderSlider.module.scss";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function HeaderSlider() {

    const sliders = [{
        id: 1,
        title: "Пряжа Macrametr",
        backgroundImage: "./img/slider/menu-slider-empty.png",
        itemImage: "./img/slider/img-slider01.png",
        description: "Повседневная практика показывает, что укрепление и развитие внутренней структуры обеспечивает широкому кругу (специалистов) участие в формировании форм воздействия."
    },
    {
        id: 2,
        title: "Пряжа \"Arachna\"",
        backgroundImage: "./img/slider/menu-slider-empty.png",
        itemImage: "./img/slider/img-slider02.png",
        description: "Лента из мягкого трикотажного полотна как нельзя лучше подходит для изготовления необычных аксессуаров и предметов интерьера."
    },
    {
        id: 3,
        title: "Пряжа \"Zefirca\"",
        backgroundImage: "./img/slider/menu-slider-empty.png",
        itemImage: "./img/slider/img-slider03.png",
        description: "Ровная стойкая окраска, насыщенные оттенки и высокое качество натурального материала сделают творческий процесс легким и увлекательным."
    }]

    return (
        <div className="container">
            <OwlCarousel className={`owl-theme ${styles.owlTheme}`} items="1" loop autoplay dots={false} nav={false}>
                {sliders.map((slider, index) =>
                    <div className={styles.item} key={slider.id}>
                        <div className={styles.carouselItem} style={{ backgroundImage: `url(${slider.backgroundImage} )` }}>
                            <div className={styles.image} style={{ backgroundImage: `url(${slider.itemImage})` }}></div>

                            <div className={styles.caption}>
                                <h1 className="align-left">{slider.title}</h1>
                                <p>{slider.description}</p>
                            </div>
                        </div>
                        <button className="btn-fill">
                            <Link to="/category/macrame" state={{ from: "Макраме" }} >
                                В каталог
                            </Link>
                        </button>
                        <div className={styles.slideNumber}>
                            <div className={styles.btnLeft}></div>
                            {index + 1}/{sliders.length}
                            <div className={styles.btnRight}></div>
                        </div>
                    </div>
                )}
            </OwlCarousel>
        </div>
    );
}
