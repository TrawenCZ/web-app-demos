import {Channel, ChannelProps} from "./Channel";
import {useState} from "react";

export interface CategoryProps {
    id : string,
    name : string,
    channels : ChannelProps[]
}

export const Category = ({id, name, channels} : CategoryProps) => {
    const [hidden, changeAppearance] = useState<boolean>(false);
    return (
        <div className="navigation__channel-category category">
            <h2 className="category__heading heading heading--2" onClick={() => changeAppearance(!hidden)} >{name}</h2>
            {hidden ||
                <ul className="list channels category__items items">
                    { channels.map((channel: ChannelProps) => <Channel key={channel.id} {...channel} />) }
                </ul>}
        </div>
    );
}

export default Category;
