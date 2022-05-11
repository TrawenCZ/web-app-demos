import useSWR from "swr";
import {useParams} from "react-router-dom";
import fetcher from "../models/fetcher";
import {ChannelProps} from "./Channel";
import ChannelHeader from "./ChannelHeader";
import {Chat} from "./Chat";
import InputField from "./InputField";

export const Main = () => {
    const { channelId } = useParams();
    const  { data, error } = useSWR(`http://localhost:4000/channel/${channelId}`, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const channel: ChannelProps = data.data

    return (
        <main className="main-window main-channel">
            <ChannelHeader name={channel.name} />
            <Chat {...channel} />
            <InputField/>
        </main>
    );
}
