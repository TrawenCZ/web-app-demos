
export const SidebarEdit = () => {
    return (
        <nav className="navigation">
            <div className="navigation__setting-categories categories">
                <div className="navigation__setting-category category">
                    <h2 className="category__heading heading heading--2">User settings</h2>
                    <ul className="list category__items items">
                        <li className="setting category__item category__item--selected item">
                            <span className="item__name">My Account</span>
                        </li>
                        <li className="setting category__item item">
                            <span className="item__name">User Profile</span>
                        </li>
                        <li className="setting category__item item">
                            <span className="item__name">Privacy &amp; Safety</span>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
