import {ChannelProps} from "./Channel";
import hashtag from "../../public/assets/hashtag.svg";
import Message from "./Message";

export const Chat = ({name, messages} : ChannelProps) => {
    return (
        <div className="main-channel__chat chat">
            <div className="chat__start chat-start">
                <h2 className="chat-start__heading heading heading--2">
                    {/* <span> tag added for the whitespace in front of the '#' */}
                    <span>Welcome to the start of the </span>
                    <img
                        src={hashtag}
                        className="chat-start__icon image"
                        alt="Server channel icon"
                    />{name} channel
                </h2>
            </div>
            {messages.map((value, index) => <Message key={index} {...value}/> )}
        </div>
    );
}
