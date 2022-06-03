import {CartContentSummary} from "./CartContentSummary";
import {CartContent} from "./CartContent";
import {CartItems} from "./Root";

export interface StepOneProps {
    products : CartItems[]
    setStep : any

}

export const StepOne = ( {products, setStep} :StepOneProps) => {
    return (
        <>
        <h2>Step 1: Purchase summary</h2>
        {products.map((product, index) => {
            return <CartContent key={index} {...product} />
        })}
        <CartContentSummary nextAction={setStep} />
    </>)
}
