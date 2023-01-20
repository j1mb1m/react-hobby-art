import styles from "./Questions.module.scss"

export default function Questions(props) {

    return (
        <div className="container">
            <div className={styles.questions}>
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
        </div>
    );
}