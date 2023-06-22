"use client"
import React from 'react';
import { useRouter } from 'next/navigation';

export default function Navbar(){
    const router = useRouter();

    return (<nav className="flex py-12 items-center mx-auto justify-center transform -translate-x-1/2 top-0 md:left-1/2 md:right-1/2 absolute w-full lg:w-1/2">
        <div className='flex items-center justify-center mx-auto'>
            <ul className = "flex items-center text-xl font-bold mx-auto">
                <li className='mx-16 flex items-center cursor-pointer'>
                    <span className='hover:text-gray-400' onClick={() => {router.push('/about')}}>About</span>
                </li>
                <li className='mx-16 flex items-center cursor-pointer'>
                    <span className='hover:text-gray-400' onClick={() => {router.push('/pricing')}}>Pricing</span>
                </li>
                <li className='mx-16 flex items-center cursor-pointer'>
                    <span className='hover:text-gray-400' onClick ={() => {router.push('/contact')}}>Contact</span>
                </li>
            </ul>
            <div className='ml-12 md:ml-64 w-96 text-center items-center flex text-xl font-bold'>
                <a onClick = {() => {router.push('/login')}} className='mx-12 flex w-32 cursor-pointer'>Sign in</a>
                <a onClick={() => {router.push('/signup')}} className='py-2 px-6 flex md:px-6 bg-green-500 rounded-lg cursor-pointer'>Sign Up</a>
            </div>
        
        </div>
    </nav>)

}