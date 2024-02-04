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
            </div>
        </div>
    );
}

export default App;
