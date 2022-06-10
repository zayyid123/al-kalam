import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarDesktop from '../../components/navbarDesktop';
import ToolBarMobile from '../../components/toolbarMobile';
import list from '../../config/listRoute'

const MainApp = () => {
    const [nomorSurah, setNomorSurah] = React.useState(0)

    return (
        <>
            <Router>
                <NavbarDesktop />
                <Routes >
                    {
                        list.map((item) =>
                            <Route key={item.name} exact path={item.path} element={<item.component nomorSurah={nomorSurah} setNomorSurah={setNomorSurah} />} />
                        )
                    }
                </Routes>
                <ToolBarMobile />
            </Router>
        </>
    )
}

export default MainApp