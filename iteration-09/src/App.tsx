import {useState} from "react";
import {CartContent} from "./components/CartContent";
import {IFormInput, InputForm, phoneCodeEnum} from "./components/InputForm";
import {Summary} from "./components/Summary";
import cart from "./static/cart.json"
import {CartContentSummary} from "./components/CartContentSummary";
import {CartSummary} from "./components/CartSummary";


export const App = () => {
  const [step, setStep] = useState<number>(0);
  const [data, saveData] = useState<IFormInput>({name : "undefined", surname : "undefined", street : "undefined",
    streetNo : "undefined", city : "undefined", zipCode : 1, phoneCode : "+420", phone : "undefined",
    email : "undefined", note : "undefined"});

  return <div className="App">
    {step === 0 &&
        <>
          <h2>Step 1: Purchase summary</h2>
          {cart.products.map((product, index) => {
            return <CartContent key={index} {...product} />
          })}
          <CartContentSummary nextAction={setStep} />
        </>}
    {step === 1 &&
    <InputForm nextAction={setStep} saveData={saveData} />}
    {step === 2 &&
        <>
          <h2>Step 3: Summary</h2>
          <h3>Your order</h3>
          {cart.products.map((product, index) => {
          return <CartSummary key={index} {...product} />
          })}
          <Summary nextAction={setStep} data={data} /></>
        }
    {step === 3 &&
        <h2>Order has been placed. Thank you for choosing us!</h2>}
  </div>;
};
