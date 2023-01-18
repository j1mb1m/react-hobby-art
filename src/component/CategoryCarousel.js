import styles from './CategoryCarousel.module.scss';
import CategoryCard from "./ImageCard";
import popularItems from "../database/popular-items";
import newItems from "../database/new-items";

let counter = 0;

function move(directin = 0) {
  let wrapper = document.getElementById("wrap1");  

  let maxLength = wrapper.scrollWidth;
  let countInnerItem = wrapper.children.length;
  let wrapLength = wrapper.offsetWidth;

  let step = maxLength / countInnerItem;
  let countInWrap = wrapLength / step;
  counter = counter + directin;

  if (counter <= 0 ) {
    counter = 0;
  }
  if (counter >= countInnerItem - countInWrap) {
    counter = countInnerItem - countInWrap;
  }

  wrapper.style.setProperty("margin-left", -(step * counter) + "px");

}

const onRight = () => {
  move(1);
}
const onLeft = () => {
  move(-1);
}

function MyCarousel({isPopular}) {
  return (
    <>
    <div className={styles.left} onClick={onLeft} id = "btnLeft"></div>
    <div className={styles.right} onClick={onRight} id = "btnRight"></div>

    <div className={styles.carouselContainer} >
      <div className={styles.wrap} id="wrap1" key={isPopular}>
        {
          isPopular ? 
          popularItems.map((item, index)=> <CategoryCard key={index} image={item.img} title={item.title} />) : 
          newItems.map((item, index)=> <CategoryCard key={index} image={item.img} title={item.title} />)
        }
      </div>
    </div>
    </>
  )
}

export default MyCarousel;