import React, { Component } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import MainContent from './MainContent'
import bonsaiBackground from '../../images/bonsai-background.png';

interface DefaultLayoutProps {
    isLoggedIn: boolean;
    handleLogout: () => void;
}
  
const DefaultLayout: React.FC<DefaultLayoutProps> = ({ isLoggedIn, handleLogout }) => {
    return (
        < div className='min-h-screen h-80  z-[10]'>
            <div className='bg-[#000000cc] h-[8%]'>
                <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
            </div>

            <div className='min-h-[87%]'>
                <div
                    className="fixed top-0 left-0 w-full h-full bg-cover bg-center z-[-1]"
                    style={{ backgroundImage: `url(${bonsaiBackground})` }}
                />
                <MainContent />
            </div>

            <div className='bg-[#000000cc] h-[5%] flex justify-end px-5 items-center z-[10]'>
                <Footer />
            </div>
        </div>
    )
}

export default DefaultLayout