import CartItem from "./CartItem";
import style from "./Drawer.module.scss"
// style={{display: 'none'}}
const arrCartItem = [
    {key: 0, image: "/image/sneakers/1.png", name: "Мужские Кроссовки Nike Blazer Mid Suede", price: "12 999 руб."},
    {key: 1, image: "/image/sneakers/2.png", name: "Мужские Кроссовки Nike Air Max 270", price: "12 999 руб."},
]
function Drawer() {
    return (
        <div  className={style.overlay}>
            <div className={style.drawer}>
                <div className={style.cartHeadBtn}>
                    <h2 className={style.cartHead}>Корзина</h2>
                    <img className={style.btn_cross} src="/image/btn-cross.svg" alt="cross"/>
                </div>
                <div className={style.item}>
                    {arrCartItem.map((obj)=>(<CartItem key = {obj.key} image = {obj.image} name = {obj.name} price = {obj.price}/>))}
                </div>
                <div className={style.cartTotalBlock}>
                    <li className={style.cartTotalBlockLi}>
                        <span>Итого:</span>
                        <div></div>
                        <b>21 498 руб.</b>
                    </li>
                    <li className={style.cartTotalBlockLi}>
                        <span>Налог 5%:</span>
                        <div></div>
                        <b>1074 руб.</b>
                    </li>
                    <button className={style.greenButton}>Оформить заказ <img src="/image/Arrow.svg" alt="Arrow"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Drawer;