import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HeaderSlider.module.scss";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function HeaderSlider() {

    /*    const [totalSlideCount, setTotalSlideCount] = useState(document.getElementsByClassName(styles.carouselItem));
       const [currentSlide, updateCurrentSlide] = useState(0);
   
       function move(direction = 0) {
           let slides = document.getElementsByClassName(styles.carouselItem);
   
           let nextSlide = currentSlide + direction;
   
           console.log(nextSlide);
           if (nextSlide >= slides.length) { nextSlide = 0; }
           if (nextSlide < 0) { nextSlide = slides.length - 1; }
   
           console.log(nextSlide);
           slides[currentSlide].className = styles.carouselItem;
           slides[nextSlide].className = slides[nextSlide].className + " " + styles.active;
   
           updateCurrentSlide(nextSlide);
       }
   
       const onRight = () => {
           move(1);
       }
       const onLeft = () => {
           move(-1);
       } */

    return (
        <div className="container">
            <OwlCarousel className='owl-theme' items="1" loop nav autoplay dots={false} >
                <div className={styles.item}>
                    <div className={`${styles.carouselItem} ${styles.active}`} style={{ backgroundImage: `url("./img/slider/menu-slider-empty.png" )` }}>
                        <div className={styles.image} style={{ backgroundImage: `url("./img/slider/img-slider01.png")` }}></div>

                        <div className={styles.caption}>
                            <h1 className="align-left">Пряжа Macrametr</h1>
                            <p>
                                Повседневная практика показывает, что укрепление и развитие внутренней структуры обеспечивает широкому кругу (специалистов) участие в формировании форм воздействия.
                            </p>
                        </div>
                    </div>
                    <button className="btn-fill">
                        <Link to="/category/macrame" state={{ from: "Макраме" }} >
                            В каталог
                        </Link>
                    </button>
                </div>
                <div className={styles.item}>
                    <div className={`${styles.carouselItem} ${styles.active}`} style={{ backgroundImage: `url("./img/slider/menu-slider-empty.png" )` }}>
                        <div className={styles.image} style={{ backgroundImage: `url("./img/slider/img-slider02.png")` }}></div>

                        <div className={styles.caption}>
                            <h1 className="align-left">Пряжа "Arachna"</h1>
                            <p>
                                Лента из мягкого трикотажного полотна как нельзя лучше подходит для изготовления необычных аксессуаров и предметов интерьера.
                            </p>
                        </div>
                    </div>
                    <button className="btn-fill">
                        <Link to="/category/macrame" state={{ from: "Макраме" }} >
                            В каталог
                        </Link>
                    </button>

                </div>
                <div className={styles.item}>
                    <div className={`${styles.carouselItem} ${styles.active}`} style={{ backgroundImage: `url("./img/slider/menu-slider-empty.png" )` }}>
                        <div className={styles.image} style={{ backgroundImage: `url("./img/slider/img-slider03.png")` }}></div>

                        <div className={styles.caption}>
                            <h1 className="align-left">Пряжа "Zefirca"</h1>
                            <p>
                                Ровная стойкая окраска, насыщенные оттенки и высокое качество натурального материала сделают творческий процесс легким и увлекательным.
                            </p>
                        </div>
                    </div>
                    <button className="btn-fill">
                        <Link to="/category/macrame" state={{ from: "Макраме" }} >
                            В каталог
                        </Link>
                    </button>

                </div>

            </OwlCarousel>
        </div>
    );
}
