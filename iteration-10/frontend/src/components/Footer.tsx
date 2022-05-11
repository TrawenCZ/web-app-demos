import {Link} from "react-router-dom";
import fetcher from "../models/fetcher";
import {userId} from "../store/user";
import useSWR from "swr";
import {UserProps} from "./Edit/Main";

export const Footer = () => {
    const  { data, error } = useSWR(`http://localhost:4000/user/${userId}`, fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const user: UserProps = data.data

    return (
        <Link to="/edit-profile">
            <a href="edit-profile.html" className="navigation__profile profile link">
                <div
                    className="navigation__profile-picture profile__picture profile-picture"
                >
                    <img
                        src={user.picture}
                        alt="User's profile picture"
                        className="profile-picture__image image"
                    />
                </div>
                <div className="profile__info">
                    <div className="profile__name">{user.name}</div>
                    <div className="profile__slug">#1204</div>
                </div>
            </a>
        </Link>

    );
}
