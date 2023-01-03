import React from 'react'
import { NavLink } from 'react-router-dom';
import Layout from './Layout';
import { ArrowRightIcon, CodeBracketIcon } from '@heroicons/react/24/solid';
import Tree from '../../Public/tree.svg'
const Home = () => {



    return (
        <Layout>
            <div className='px-5'>
                <div className='font-semibold text-center shadow-2xl drop-shadow-2xl '>
                    <p className='bg-gradient-to-br from-slate-300 to-slate-500 px-5 rounded-sm'><strong className='text-[36px] italic'>W</strong>elcome to our website where you can find a wide range of reusable Tailwindcss and React components. Our mission is to make it easy for developers to create beautiful and functional user interfaces with minimal effort. All of our components are designed to be highly customizable and can be easily integrated into any project. Whether you are working on a new website or looking to add some polish to an existing one, our components are a great choice.</p>
                </div>


                <div className='my-10 p-5 flex'>
                    <div className='relative mix-blend-multiply opacity-50 blur-2xl'>
                        <div className='absolute w-48 h-48 rounded-full bg-red-300 top-20'></div>
                        <div className='absolute w-screen h-48 rounded-full bg-blue-300 top-5 left-10'></div>
                        <div className='absolute w-48 h-48 rounded-full bg-green-300 top-10 left-20'></div>
                        <div className='absolute w-screen h-48 rounded-full bg-purple-300 -top-10 left-40'></div>
                    </div>
                    <img className='self-center px-3 w-64 h-72' src={Tree} alt="tree"></img>

                    <div className='drop-shadow-2xl'>
                        <h1 className=' text-2xl md:text-4xl font-serif text-center'>Rapidly build modern websites without ever leaving your HTML.</h1>
                        <p className='my-5 text-justify'>Utility classes help you work within the constraints of a system instead of littering your stylesheets with arbitrary values. They make it easy to be consistent with color choices, spacing, typography, shadows, and everything else that makes up a well-engineered design system.
                            Learn more, utility-first fundamentals
                        </p>
                    </div>
                </div>

                <div className='my-5 md:py-4 flex flex-col md:flex-row '>
                    <div className='flex flex-row h-72 bg-slate-800 w-full md:w-72 rounded-lg text-white'>
                        <div className='flex flex-col divide-y-2'>
                            <CodeBracketIcon className='h-10 w-full text-yellow-400 ' />
                            <p className='px-1 text-[15px] text-center overflow-y-scroll'>Recomp offers a wide variety of high quality components that have allowed us to ship features faster. Recomp has been used by more than a hundred engineers in our organization. What's more, Recomp's well architected customization system has allowed us to differentiate ourselves in the marketplace."</p>
                            <div className='flex self-center space-x-4'>
                                <h1 className='font-serif text-[28px] text-yellow-400'>All Components</h1>
                                <ArrowRightIcon className='h-12 self-center text-yellow-300' />
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </Layout>
    )
}

export default Home;
