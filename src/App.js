import './App.scss';

function App() {
    return (
        <div className="wrapper">
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
                <h1>Все кроссовки</h1>
                <div className="card">
                    <img width = {133} height = {112} src="/image/sneakers/1.png" alt="sneakers"/>
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
    );
}

export default App;
