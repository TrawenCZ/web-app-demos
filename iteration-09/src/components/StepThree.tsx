import {CartSummary} from "./CartSummary";
import {Summary} from "./Summary";
import {IFormInput} from "./StepTwo";
import {CartItems} from "./Root";

export interface StepThreeProps {
    products : CartItems[]
    formData : IFormInput
    setStep : Function
}

export const StepThree = ({products, formData, setStep} :StepThreeProps) => {
    return (
        <>
            <h2>Step 3: Summary</h2>
            <h3>Your order</h3>
            {products.map((product, index) => {
                return <CartSummary key={index} {...product} />
            })}
            <Summary nextAction={setStep} data={formData} />
        </>
    )
}
