import React, { Component } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import MainContent from './MainContent'

export default class DefaultLayout extends Component {
    render() {
        return (
            < div className='min-h-screen h-80 '>
                <div className='bg-[#004761] h-[8%]'>
                    <Navbar />
                </div>

                <div className='min-h-[87%] bg-slate-200'>
                    <MainContent />
                </div>

                <div className='bg-[#004761] h-[5%] flex justify-center items-center'>
                    <Footer />
                </div>
            </div>
        )
    }
}
