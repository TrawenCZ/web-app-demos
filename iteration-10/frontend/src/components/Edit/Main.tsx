import useSWR from "swr";
import fetcher from "../../models/fetcher";
import {userId} from "../../store/user";
import {useState} from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';

export interface UserProps {
    id : string,
    name : string,
    picture : string,
    email : string
}

export interface FormProps {
    username : string,
    email : string
}

export const MainEdit = () => {
    const  { data, error } = useSWR(`http://localhost:4000/user/${userId}`, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const user: UserProps = data.data

    const [editable, setEditable] = useState<boolean>(false)

    const { register, handleSubmit, formState: { errors } } = useForm<FormProps>();
    const updateData: SubmitHandler<FormProps> = async (data: FormProps) => {
        const headers = {
            "Content-Type": "application/json",
        }
        const request = {
            id : userId,
            name : data.username,
            email : data.email
        }
        const res = await axios.put('http://localhost:4000/user/', request, {headers})
        console.log(res)
    }


    return (
        <main className="main-window main-settings">
            <h1 className="main-settings__heading heading heading--1">My account</h1>
            <div className="main-settings__content">
                <div className="profile-editor">
                    <div className="profile-editor__banner"></div>
                    <div className="profile-editor__controls">
                        <div className="profile-editor__profile profile-info">
                            <div className="profile-editor__profile-picture profile-picture">
                                <img
                                    src={user.picture}
                                    alt={user.name + " profile picture"}
                                    className="profile-editor__pfp-image profile-picture__image img"
                                />
                            </div>
                            <div className="profile-info__account-info">
                                <h2 className="profile-info__name heading heading--2">
                                    {user.name}
                                </h2>
                                <span className="profile-info__slug">#1204</span>
                            </div>
                            <button className="profile-info__allow-edit button" onClick={() =>{
                                setEditable(!editable)}
                            } >
                                Edit profile
                            </button>
                        </div>

                        <form className="profile-editor__form" id="userChangeForm" onSubmit={handleSubmit(updateData)}>
                            <label className="profile-editor__label label" htmlFor="username"
                            >Username</label
                            >
                            <input
                                type="text"
                                className="profile-editor__input"
                                id="username"
                                placeholder={user.name}
                                defaultValue={editable ? user.name : ""}
                                disabled={!editable}
                                autoComplete="false"
                                {...register('username', { required: true, minLength: 3 })}
                            />
                            {errors.username && <div>Username should be at least 3 characters long!</div>}

                            <label className="profile-editor__label label" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                className="profile-editor__input"
                                id="email"
                                placeholder={user.email}
                                defaultValue={editable ? user.email : ""}
                                disabled={!editable}
                                {...register('email', { required: true })}
                            />

                            <input
                                type="submit"
                                className={editable ? "profile-editor__submit button" : "profile-editor__submit button profile-editor__submit--disabled"}
                                value="Change profile info"
                                disabled={!editable}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </main>

    );
}
