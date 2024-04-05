import './App.scss';
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Card from "./components/Card";
const arrCard = [
    {key: 0, image: "/image/sneakers/1.png", name: "Мужские Кроссовки Nike Blazer Mid Suede", price: "12 999 руб."},
    {key: 1, image: "/image/sneakers/2.png", name: "Мужские Кроссовки Nike Air Max 270", price: "12 999 руб."},
    {key: 2, image: "/image/sneakers/3.png", name: "Мужские Кроссовки Nike Blazer Mid Suede", price: "8 999 руб."},
    {key: 3, image: "/image/sneakers/4.png", name: "Кроссовки Puma X Aka Boku Future Rider", price: "16 299 руб."},
    {key: 4, image: "/image/sneakers/5.png", name: "Мужские Кроссовки Nike LeBron XVIII", price: "14 000 руб."},
]
function App() {
    return (
        <div className="wrapper">
            <Drawer/>
            <Header/>
            <div className="content">
                <div className='content-header'>
                    <h1>Все кроссовки</h1>
                    <div className='search-block'>
                        <img src='/image/searchIcon.png' alt='Search'/>
                        <input placeholder="Поиск..."/>
                    </div>
                </div>
                <div className="Sneakers">
                    {arrCard.map((obj) => (<Card key = {obj.key} image = {obj.image} name = {obj.name} price = {obj.price}/>))}
                </div>
            </div>
        </div>
    );
}

export default App;
