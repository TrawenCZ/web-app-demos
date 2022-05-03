import cart from "../static/cart.json";

export interface CartProps {
    name : string,
    price : number,
    image : string,
    quantity : number
}

export interface NextActionProps {
    nextAction: Function;
}


export const CartContent = ({name, price, image, quantity}: CartProps) => {
    const products : CartProps[] = cart.products;

    let totalPrice = 0;
    for (const product of products) {
        totalPrice += product.price * product.quantity
    }

    return <>
        <hr/>
        <h3>{name}</h3>
        <img className="image" src={image} alt={name}/>
        <p>Quantity: {quantity}</p>
        <p>Price: {price}€/piece</p>
        <p><strong>{price * quantity}€</strong></p>
        <hr/>
    </>
}
