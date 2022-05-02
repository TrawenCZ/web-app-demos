import {useState} from "react";
import {CartContent} from "./components/CartContent";
import {IFormInput, InputForm, phoneCodeEnum} from "./components/InputForm";
import {Summary} from "./components/Summary";


export const App = () => {
  const [step, setStep] = useState<number>(0);
  const [data, saveData] = useState<IFormInput>({name : "undefined", surname : "undefined", street : "undefined",
    streetNo : "undefined", city : "undefined", zipCode : "undefined", phoneCode : phoneCodeEnum.czech, phone : 0,
    email : "undefined", note : "undefined"});

  return <div className="App">
    {step === 0 &&
    <CartContent nextAction={setStep} />}
    {step === 1 &&
    <InputForm nextAction={setStep} saveData={saveData} />}
    {step === 2 &&
        <Summary nextAction={setStep} data={data} />}
    {step === 3 &&
        <h2>Order has been placed. Thank you for choosing us!</h2>}
  </div>;
};
