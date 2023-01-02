import React from 'react'
import { NavLink } from 'react-router-dom';

const Home = () => {



    return (
        <div className=''>
            <div className='relative'>
                <div className='flex px-5 py-10 justify-between '>
                    <div className='space-x-5 font-semibold z-50'>
                        <NavLink to='/'>Home</NavLink>
                        <select className='bg-blue-500'>
                            <option>JavaScript</option>
                            <option>TypeScript</option>
                        </select>
                    </div>
                    <div className='flex justify-end space-x-5 z-50'>
                        <button className='btn hover:btn-primary'>Login</button>
                        <button className='btn btn-primary'>Signup</button>
                    </div>
                </div>


                <div id='curve' className='absolute bg-red w-full h-48 bg-blue-500 top-0 mix-blend-overlay '></div>
                <div id='curve' className='absolute bg-red w-[100%] h-full bg-white border-o top-18  rounded-t-[50px] mix-blend-normal z-0 p-10'>
                    <div className='-my-18 px-3 font-semibold text-center rounded-tr-lg rounded-tl-sm bg-slate-200'>
                        <p><strong className='text-[36px] italic'>W</strong>elcome to our website where you can find a wide range of reusable Tailwindcss and React components. Our mission is to make it easy for developers to create beautiful and functional user interfaces with minimal effort. All of our components are designed to be highly customizable and can be easily integrated into any project. Whether you are working on a new website or looking to add some polish to an existing one, our components are a great choice.</p>
                    </div>

                    <div className='border my-10 bg-slate-800 w-full md:w-72 h-64 text-white'>
                        <div className='flex border justify-center  '>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                            </svg>
                        </div>
                        <div className='flex flex-col border h-full py-5 px-1 overflow-hidden'>
                            <div className=' basis-3/4'>
                                <p className='py-3 text-center'>You can directly use components or just copy tailwind classes into your custom code.</p>
                            </div>
                            <div className='h-10 flex space-x-5 mx-auto'>
                                <div>
                                    <h1 className='text-3xl'>Components</h1>
                                </div>
                                <div className='self-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
