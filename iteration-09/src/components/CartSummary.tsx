import {CartProps} from "./CartContent";


export const CartSummary = ({name, price, quantity}: CartProps) => {
    return (
        <>
            <hr/>
            <p>{name}</p>
            <p>{quantity} {quantity > 1 ? "pcs" : "pc"}</p>
            <p>{price}€/piece</p>
            <p><strong>{price*quantity}€</strong></p>
            <hr/>
        </>
    )
}
