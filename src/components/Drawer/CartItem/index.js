import style from "./CartItem.module.scss"
function CartItem(props) {
    return(
        <div className={style.cartItem}>
                <img className={style.cartItemImg} src={props.image} alt="Sneakers"/>
                <div>
                    <p>
                        {props.name}
                    </p>
                    <b>
                        {props.price}
                    </b>
                </div>
            <img className={style.btn_cross} src="/image/btn-cross.svg" alt="cross"/>
        </div>
    )
}
export default CartItem;