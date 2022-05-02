import {IFormInput, phoneCodeEnum} from "./InputForm";
import cart from "../static/cart.json";

interface SummaryProps {
    nextAction: Function,
    data : IFormInput
}

export const Summary = ({nextAction, data}: SummaryProps) => {
    return (
        <>
        <h2>Step 3: Summary</h2>
            <h3>Your order</h3>
            {cart.products.map((product) => {
                return <>
                    <hr/>
                    <p>{product.name}</p>
                    <p>{product.quantity} {product.quantity > 1 ? "pcs" : "pc"}</p>
                    <p>{product.price}€/piece</p>
                    <p><strong>{product.price*product.quantity}€</strong></p>
                    <hr/>
                    </>
            })}
            <h3>Delivery information</h3>
            <p>Name: {data.name} {data.surname}</p>
            <p>Address: {data.street}, {data.streetNo}, {data.zipCode} {data.city}, Czechia</p>
            <p>Phone number: {data.phoneCode} {data.phone}</p>
            <p>Email: {data.email}</p>
            <p>Note: {data.note}</p>
            <button onClick={() => nextAction(3)}>Finish</button>
        </>
    )
}
