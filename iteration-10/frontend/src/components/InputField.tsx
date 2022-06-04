import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { userId } from '../store/user';
import { SubmitHandler, useForm } from "react-hook-form";
import axios from 'axios';
import {useSWRConfig} from "swr";

type InputProps = {
    content : string
};

export function InputField() {
    const { channelId } = useParams();
    const { register, handleSubmit, reset } = useForm<InputProps>();
    const { mutate } = useSWRConfig();

    const sendMessage: SubmitHandler<InputProps> = async (data: InputProps) => {
        const headers = {
            "Content-Type": "application/json",
            "X-User": userId,
        }
        const request = {
            content: data.content,
            channelId: channelId,
        }
        await axios.post('http://localhost:4000/message/', request, {headers})
        await mutate(`http://localhost:4000/channel/${channelId}`)
        reset()
    }

    return (
        <div className="chat-input">
            <form action="" className="chat-input__form" onSubmit={handleSubmit(sendMessage)}>
                <input
                    type="text"
                    id=""
                    placeholder="Write message"
                    className="chat-input__text-input"
                    autoComplete="off"
                    {...register('content', { required: true, minLength: 1 })}
                />
                <input
                    type="submit"
                    value="Send message"
                    className="chat-input__send button"
                />
            </form>
        </div>
    );
}

export default InputField;
