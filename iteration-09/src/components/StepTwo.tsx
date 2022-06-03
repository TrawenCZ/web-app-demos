import { useForm, SubmitHandler } from "react-hook-form";

interface InputFormProps {
    nextAction: Function,
    saveData : Function
}

export enum phoneCodeEnum {
    czech = "+420",
    slovakia = "+421"
}

export interface IFormInput {
    name : string,
    surname : string,
    street : string,
    streetNo : number,
    city : string,
    zipCode : number,
    phone : number,
    phoneCode : phoneCodeEnum,
    email : string,
    note : string
}

export const StepTwo = ({nextAction, saveData}: InputFormProps) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IFormInput>();

    const submitter: SubmitHandler<IFormInput> = (data) => {
        saveData(data);
        nextAction(2);
    };

    return (
        <>
        <h2>Step 2: Personal information</h2>
        <form className="form" onSubmit={handleSubmit(submitter)}>
            <label>Name*</label>
            <input
                className={`text-field ${errors.name && "text-field--error"}`}
                {...register("name", { required: true , maxLength: 20})}
            />
            {errors.name && (
                <p className="registration__error">Name is required</p>
            )}

            <label>Surname*</label>
            <input
                className={`text-field ${errors.surname && "text-field--error"}`}
                {...register("surname", { required: true, maxLength: 20 })}
            />
            {errors.surname && (
                <p className="registration__error">Surname is required</p>
            )}

            <label>Street*</label>
            <input
                className={`text-field ${errors.street && "text-field--error"}`}
                {...register("street", { required: true })}
            />
            {errors.street && (
                <p className="registration__error">Street is required</p>
            )}

            <label>Street no.*</label>
            <input
                className={`text-field ${errors.streetNo && "text-field--error"}`}
                type="number"
                {...register("streetNo", { required: true })}
            />
            {errors.streetNo && (
                <p className="registration__error">Street no is required and has to be a number</p>
            )}

            <label>City*</label>
            <input
                className={`text-field ${errors.city && "text-field--error"}`}
                {...register("city", { required: true })}
            />
            {errors.city && (
                <p className="registration__error">City is required</p>
            )}

            <label>Zip code*</label>
            <input
                className={`text-field ${errors.zipCode && "text-field--error"}`}
                type="number"
                {...register("zipCode", { required: true, minLength: 5, maxLength: 6})}
            />
            {errors.zipCode && (
                <p className="registration__error">Zip code is required and has to be a number</p>
            )}


            <label>Phone no*</label>
            <div className="phone-number">
            <select id="phone-prefix" className="text-field" {...register("phoneCode")}>
                <option value="czech">+420</option>
                <option value="slovakia">+421</option>
            </select>
            <input
                className={`text-field ${errors.phone && "text-field--error"}`}
                type="number"
                {...register("phone", { required: true, minLength : 9, maxLength : 11})}
            />
            {errors.phone && (
                <p className="registration__error">Phone no is required and must have 9 digits</p>
            )}
            </div>

            <label>Note</label>
            <input
                className={`text-field ${errors.note && "text-field--error"}`}
                {...register("note")}
            />

            <label>Email</label>
            <input
                className="text-field"
                type="email"
                {...register("email")}
            />

            <input className="button button--gray" type="submit" />
        </form>
        </>
    )
}
