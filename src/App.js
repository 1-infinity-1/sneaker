import './App.scss';
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Card from "./components/Card";

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
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        </div>
    );
}

export default App;
