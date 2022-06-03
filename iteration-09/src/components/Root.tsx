import {useState} from "react";
import {IFormInput, StepTwo} from "./StepTwo";
import {StepOne} from "./StepOne";
import cart from "../static/cart.json"
import {StepThree} from "./StepThree";

export interface CartItems {
    name : string,
    price: number,
    image: string,
    quantity: number
}

export const Root = () => {
    const [step, setStep] = useState<number>(0);
    const [data, saveData] = useState<IFormInput>();

    const products : CartItems[] = cart.products

    switch(step) {
        case 0:
            return <StepOne products={products} setStep={setStep}/>
        case 1:
            return <StepTwo nextAction={setStep} saveData={saveData} />
        case 2:
            if (data != undefined) {
                return <StepThree formData={data} setStep={setStep} products={products}/>
            }
            return <h2>Error occurred when gaining data from form</h2>
        case 3:
            return <h2>Order has been placed. Thank you for choosing us!</h2>
    }
    return <h2>Unknown error occurred</h2>
}
