import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from "./SideBar";
import {Main} from "./Main";
import {MainEdit} from "./Edit/Main";
import {SidebarEdit} from "./Edit/Sidebar";

export const Pages = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <div className="app">
                        <SideBar />
                    </div>
                }/>
                <Route path="channel/:channelId" element={
                    <div className="app">
                        <SideBar />
                        <Main />
                    </div>
                }/>
                <Route path="/edit-profile" element={
                    <div className="app">
                        <SidebarEdit/>
                        <MainEdit/>
                    </div>}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Pages;
