import { useState } from "react";
import styles from "./CustomCounter.module.scss";

export default function CustomCounter() {
    const [counter, updateCounter] = useState(1);

    const addItem = () => {
        updateCounter(counter + 1);
    }

    const deleteItem = () => {
        if (counter > 1) {
            updateCounter(counter - 1);
        }
    }
    return (

        <div className={styles.cartCount}>
            <span onClick={deleteItem}>
                <img src="./img/minus-icon.svg" alt="-"></img>
            </span>

            <input type="text" value={counter} />

            <span onClick={addItem}>
                <img src="./img/plus-icon.svg" alt="+"></img>
            </span>
        </div>
    );
}

