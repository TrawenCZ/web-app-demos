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
    return <>
        <h3>Total: {cart.products.reduce((prev, curr) => prev + curr.price * curr.quantity, 0).toFixed(2)}</h3>
        <hr/>
        <button className="button" onClick={() => nextAction(1)}>Next</button>
    </>
}
