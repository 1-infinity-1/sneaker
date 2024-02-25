function Card() {
    return (
        <div className="card">
            <img width={133} height={112} src="/image/sneakers/1.png" alt="sneakers"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="pricebutt">
                <div className="price">
                    <p>Цена</p>
                    <b>12 999 руб.</b>
                </div>
                <button className="button">
                    <img width={11} height={11} src="/image/plus.svg" alt="plus"/>
                </button>
            </div>
        </div>
    )
}

export default Card;