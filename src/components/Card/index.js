import style from "./Card.module.scss";
console.log(style)
function Card(props) {
    return (
        <div className={style.card}>
            <img width={133} height={112} src={props.image} alt="sneakers"/>
            <h5>{props.name}</h5>
            <div className={style.pricebutt}>
                <div className={style.price}>
                    <p>Цена</p>
                    <b>{props.price}</b>
                </div>
                <button className={style.button}>
                    <img width={11} height={11} src="/image/plus.svg" alt="plus"/>
                </button>
            </div>
        </div>
    )
}

export default Card;