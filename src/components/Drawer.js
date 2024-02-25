function Drawer() {
    return (
        <div style={{display: 'none'}} className="overlay">
            <div className="drawer">
                <div className="cartHeadBtn">
                    <h2 className="cartHead">Корзина</h2>
                    <img className="btn_cross" src="/image/btn-cross.svg" alt="cross"/>
                </div>
                <div className="item">
                    <div className="cartItem">
                        <img className="cartItemImg" src="/image/sneakers/1.png" alt="Sneakers"/>
                        <div>
                            <p>
                                Мужские кроссовки Nike Air Max 270
                            </p>
                            <b>
                                12 999 руб.
                            </b>
                        </div>
                        <img className="btn_cross" src="/image/btn-cross.svg" alt="cross"/>
                    </div>
                    <div className="cartItem">
                        <img className="cartItemImg" src="/image/sneakers/1.png" alt="Sneakers"/>
                        <div>
                            <p>
                                Мужские кроссовки Nike Air Max 270
                            </p>
                            <b>
                                12 999 руб.
                            </b>
                        </div>
                        <img className="btn_cross" src="/image/btn-cross.svg" alt="cross"/>
                    </div>
                </div>
                <div className="cartTotalBlock">
                    <li className="cartTotalBlockLi">
                        <span>Итого:</span>
                        <div></div>
                        <b>21 498 руб.</b>
                    </li>
                    <li className="cartTotalBlockLi">
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>1074 руб.</b>
                    </li>
                    <button className="greenButton">Оформить заказ <img src="/image/Arrow.svg" alt="Arrow"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Drawer;