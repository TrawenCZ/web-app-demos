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


export const CartContentSummary = ({nextAction}: NextActionProps) => {

    let totalPrice = 0;
    for (const product of cart.products) {
        totalPrice += product.price * product.quantity
    }

    return <>
        <h3>Total: {totalPrice.toFixed(2)}</h3>
        <hr/>
        <button className="button" onClick={() => nextAction(1)}>Next</button>
    </>
}
