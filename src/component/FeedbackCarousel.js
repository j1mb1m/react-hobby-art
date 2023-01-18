import styles from './FeedbackCarousel.module.scss';
import FeedbackCard from "./FeedbackCard";

let counter = 0;

function move(directin = 0) {

  let wrapper = document.getElementById("wrap1");

  let maxLength = wrapper.scrollWidth;
  let countInnerItem = wrapper.children.length;
  let wrapLength = wrapper.offsetWidth;

  let step = maxLength / countInnerItem;
  let countInWrap = wrapLength / step;
  counter = counter + directin;

  if (counter <= 0) {
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

function FeedbackCarousel(props) {
  return (
    <>
      <div className={styles.carouselContainer} >
        <div className={styles.left} onClick={onLeft} id="btnLeft"></div>
        <div className={styles.right} onClick={onRight} id="btnRight"></div>

        <div className={styles.carouselItems} >
          <div className={styles.wrap} id="wrap1">
            {props.feedbacks.map((item, index) => <FeedbackCard key={index}
              logo={item.userLogo}
              userName={item.user}
              dateTime={item.dateTime}
              comment={item.comment}
              rating={item.rating}
            />)}
          </div>
        </div>
      </div>
    </>
  )
}

export default FeedbackCarousel;