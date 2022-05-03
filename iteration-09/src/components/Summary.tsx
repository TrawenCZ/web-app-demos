import {IFormInput, phoneCodeEnum} from "./InputForm";
import cart from "../static/cart.json";

interface SummaryProps {
    nextAction: Function,
    data : IFormInput
}

export const Summary = ({nextAction, data}: SummaryProps) => {
    return (
        <>
            <h3>Delivery information</h3>
            <p>Name: {data.name} {data.surname}</p>
            <p>Address: {data.street}, {data.streetNo}, {data.zipCode} {data.city}, Czechia</p>
            <p>Phone number: {phoneCodeEnum[data.phoneCode]} {data.phone}</p>
            <p>Email: {data.email}</p>
            <p>Note: {data.note}</p>
            <button className="button" onClick={() => nextAction(3)}>Finish</button>
        </>
    )
}
