import './App.scss';

function App() {
    return (
        <div className="wrapper">
            <div style = {{display: 'none'}} className="overlay">
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
            <header>
                <div className="headerLeft">
                    <img width={40} height={40} src="/image/logo.png"/>
                    <div className="headerInfo">
                        <h3>React Sneakers</h3>
                        <p>Магазин лучших кросовок</p>
                    </div>
                </div>
                <div className="headerRight">
                    <div>
                        <img width={18} height={18} src="/image/cartIcon.png"/>
                        <span>1205 руб.</span>
                    </div>
                    <div>
                        <img width={18} height={18} src="/image/likeIcon.png"/>
                        <span>Закладки</span>
                    </div>
                    <div>
                        <img width={18} height={18} src="/image/profileIcon.png"/>
                        <span>Профиль</span>
                    </div>
                </div>
            </header>
            <div className="content">
                <div className='content-header'>
                    <h1>Все кроссовки</h1>
                    <div className='search-block'>
                        <img src='/image/searchIcon.png' alt='Search'/>
                        <input placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="Sneakers">
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

                </div>
            </div>
        </div>
    );
}

export default App;
