import React from 'react'
import { useState } from 'react';
import Page from './Page';
//import "../../../App.css"
import "./Section5.css";
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';


function Stu5And1() {
    const [isDark, setIsDark] = useState(false);

    return (
        //  <Page isDark={isDark} setIsDark={setIsDark} />

        <UserContext.Provider value={'사용자'} >
            <ThemeContext.Provider value={{ isDark, setIsDark }}>
                <Page />
            </ThemeContext.Provider>
        </UserContext.Provider>
    )
}

export default Stu5And1
