import { DocumentDuplicateIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex h-36 relative'>
            <div className='flex w-full place-items-center bg-gradient-to-bl from-blue-600 to-purple-800 h-36 fixed top-0 z-50 '>
                <div className='flex flex-col md:flex-row w-full lg:px-3 justify-between'>
                    <div className='flex self-start '>
                        <DocumentDuplicateIcon className='h-10 w-10 md:w-16 md:h-16' />
                        <h1 className='self-center text-2xl md:text-4xl font-extrabold font-serif'>RECOMP</h1>
                    </div>

                    <div className='px-2 self-end space-x-10 font -serif font-bold text-md'>
                        <NavLink to='/'>Docs</NavLink>
                        <select className='bg-inherit'>
                            <option>JavaScript</option>
                            <option>TypeScript</option>
                        </select>
                        <NavLink to="">Blogs</NavLink>
                    </div>
                </div>
                <div id='curve' className='absolute w-full h-10 bottom-0 left-0 bg-white rounded-t-full '>
                </div>
            </div>
        </div>

    )
}

export default Navbar;