import {MessageProps} from "./Message";
import {Link, useParams} from "react-router-dom";
import hashtag from "../../public/assets/hashtag.svg";

export interface ChannelProps {
    id : string,
    name : string;
    messages : MessageProps[]
}

export const Channel = ({id, name} : ChannelProps) => {
    const { channelId } = useParams();
    return (
        <Link to={`/channel/${id}`}>
            <li className={(id === channelId) ? "channel category__item category__item--selected item" :
                "channel category__item item"}>
                <img
                    src={hashtag}
                    alt="Server channel icon"
                    className="channel__image image"/>
                <span className="channel__name item__name">
            {name}
        </span>
            </li>
        </Link>
    );
}

export default Channel;
