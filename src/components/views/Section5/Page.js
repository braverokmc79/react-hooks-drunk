import React, { useContext } from 'react'
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { ThemeContext } from './context/ThemeContext';

function Page({ isDark, setIsDark }) {

    const data = useContext(ThemeContext);
    console.log("data1 ", data);

    return (
        // <div className='page'>
        //     <Header isDark={isDark} />
        //     <Content isDark={isDark} />
        //     <Footer isDark={isDark} setIsDark={setIsDark} />
        // </div>

        <div className='page'>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default Page