import {Header} from "./Header";
import useSWR from 'swr';
import fetcher from '../models/fetcher';
import {Category, CategoryProps} from "./Category";
import {Footer} from "./Footer";

export const SideBar = () => {
    const { data, error } = useSWR('http://localhost:4000/channel', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    const categories: CategoryProps[] = data.data

    return (
        <nav className="navigation">
            <Header/>
            <div className="navigation__channels-categories categories">
                { categories.map((category: CategoryProps) => <Category key={category.id} {...category} />) }
            </div>
            <Footer/>
        </nav>
    )
}

export default SideBar;
