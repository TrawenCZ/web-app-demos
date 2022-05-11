import {userId} from "../store/user";
import editImg from "../../public/assets/edit.svg";
import deleteImg from "../../public/assets/delete.svg";
import axios from "axios";
import {mutate} from "swr";
import {useParams} from "react-router-dom";

export interface MessageProps {
    id : string,
    content : string,
    createdAt : Date,
    sender : {
        id : string,
        name : string,
        picture : string,
    }
}

export const Message = ({id, content, createdAt, sender} : MessageProps) => {
    const {channelId} = useParams();
    console.log("first: " + userId + " second: " + sender.id);
    return (
        <div className="chat__message message">
            <div className="message__profile-picture profile-picture">
                <img
                    src={sender.picture}
                    className="profile-picture__image image"
                    alt="Sender's profile picture"
                />
            </div>

            <div className="message__sent-by">
                <h2 className="message__sender-name heading heading--2">
                    {sender.name}
                </h2>
                <span className="message__sent-at">{formatDate(new Date(createdAt))}</span>
            </div>
            <div className="message__content">
                {content}
            </div>
            {(userId === sender.id) && (
                <div className="message__controls controls">
                    <button className="controls__control">
                        <img
                            src={editImg}
                            className="controls__icon"
                            alt="Edit message"
                        />
                    </button>
                    <button className="controls__control" onClick={() => deleteMessage(id, channelId)}>
                        <img
                            src={deleteImg}
                            className="controls__icon"
                            alt="Delete message"
                        />
                    </button>
                </div>
            )}
        </div>
    );
}

const formatDate = (date: Date) => {
    return date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
}

const deleteMessage = async (id: string, channelId: string | undefined) => {
    const headers = {
        "Content-Type": "application/json",
        "X-User": userId,
    }
    await axios.delete(`http://localhost:4000/message/${id}`, {headers})
    await mutate(`http://localhost:4000/channel/${channelId}`)
}

export default Message;
