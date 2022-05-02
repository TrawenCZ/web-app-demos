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


export const CartContent = ({nextAction}: NextActionProps) => {
    const products : CartProps[] = cart.products;

    let totalPrice = 0;
    for (const product of products) {
        totalPrice += product.price * product.quantity
    }

    return <>
        <h2>Step 1: Purchase summary</h2>
    {products.map((product) => {
        return <>
            <hr/>
            <h3>{product.name}</h3>
            <img className="image" src={product.image} alt={product.name}/>
        <p>Quantity: {product.quantity}</p>
            <p>Price: {product.price}€/piece</p>
            <p><strong>{product.price*product.quantity}€</strong></p>
            <hr/>
            </>
    })}
        <h3>Total: {totalPrice.toFixed(2)}</h3>
        <hr/>
        <button onClick={() => nextAction(1)}>Next</button>
        </>
}
