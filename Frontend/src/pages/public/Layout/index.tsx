import React from 'react'
import sampleimage from '../../../assets/pngs/Login.png'
import bg from "../../../assets/pngs/bitmap.png"
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
    return (
        <>
            <img src={bg} className='h-full position absolute z-[-1] w-full bg-gray-200' alt="background" />
            <div className='flex justify-center items-center gap-10 h-screen'>
                <div className='flex justify-evenly w-full p-10 gap-10'>
                    <div className='h-fit'>
                        <h1 className='text-[30px] font-bold text-green-500'>Trust me, NEPSE goes up</h1>
                        <img src={sampleimage} alt='illustration' className='object-contain h-[450px] w-[450px]' />
                    </div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout
