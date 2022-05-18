import {Channel, ChannelProps} from "./Channel";
import {useState} from "react";

export interface CategoryProps {
    id : string,
    name : string,
    channels : ChannelProps[]
}

export const Category = ({id, name, channels} : CategoryProps) => {
    const [shouldAppear, changeAppearance] = useState<boolean>(true);
    return (
        <div className="navigation__channel-category category">
            <h2 className="category__heading heading heading--2" onClick={() => changeAppearance(!shouldAppear)} >{name}</h2>
            {shouldAppear &&
                <ul className="list channels category__items items">
                    { channels.map((channel: ChannelProps) => <Channel key={channel.id} {...channel} />) }
                </ul>}
        </div>
    );
}

export default Category;
