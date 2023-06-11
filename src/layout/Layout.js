import Footer from './../components/footer/Footer'
import Header from './../components/header/Header'
import React from 'react'
import Home from '@/pages'


const Layout = ({ children }) => {
    return (
        <div className=' mx-auto h-full  flex flex-col justify-between max-w-[1400px]'>
             <Header/> 
            <div className='h-fit w-full mx-auto'>
            { children }
            </div>
             <Footer/> 
        </div>
    )
}

export default Layout