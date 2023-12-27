import React, { Component } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import MainContent from './MainContent'

export default class DefaultLayout extends Component {
    render() {
        return (
            < div className='min-h-screen h-80 bg-slate-400'>
                <div className='bg-slate-600 h-[8%]'>
                    <Navbar />
                </div>

                <div className='bg-zinc-600 min-h-[84%]'>
                    <MainContent />
                </div>

                <div className='bg-gray-500 h-[8%]'>
                    <Footer />
                </div>
            </div>
        )
    }
}
