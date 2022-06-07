import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarDesktop from '../../components/navbarDesktop';
import ToolBarMobile from '../../components/toolbarMobile';
import list from '../../config/listRoute'

const MainApp = () => {
    return (
        <>
            <Router>
                <NavbarDesktop />
                <Routes >
                    {
                        list.map((item) =>
                            <Route key={item.name} exact path={item.path} element={<item.component />} />
                        )
                    }
                </Routes>
                <ToolBarMobile />
            </Router>
        </>
    )
}

export default MainApp