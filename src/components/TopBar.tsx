import React from 'react';
import useLang from "../store/lang"
import { IoMdSearch } from "react-icons/io";
import { MdAddAPhoto } from "react-icons/md";





const TopBar: React.FC = () => {
    const { lang, changeLang } = useLang();
    return(
        <header className='h-14 w-screen border-b-2 border-gray-300 shadow-sm border-solid flex items-center justify-center'>
            <nav className='bg-amber-200 w-6xl h-11 flex items-center justify-between px-4'>
                <div id='logo-and-lang' className='w-48 h-8 bg-amber-50 flex items-center'>
                    <a href="">
                        <img src="img/khmer24.webp" alt="" className='w-36'/>
                    </a>
                    <div className='m-3 cursor-pointer' onClick={changeLang}>
                        {lang === "km" ? (
                            <img src="img/en-40x40.webp" alt="" className='size-6'/>
                        ) : (
                            <img src="img/km-40x40.webp" alt="" className="size-6" />
                        )}
                    </div>
                </div>
                <div id='search' className='w-md h-10 relative'>
                    <div className='w-full flex absolute top-1/2 -translate-y-1/2'>   
                        <button className='bg-blue-400 cursor-pointer py-1.5 border-2 border-r-[1px] w-36 flex-none'>All Category</button>
                        <input className='bg-blue-400 px-2 py-1.5 border-2 border-l-[1px] flex-1' type="text" />
                    </div>
                    <button className='right-2 cursor-pointer absolute top-1/2 -translate-y-1/2'>
                        <IoMdSearch className='size-6'/>
                    </button>
                </div>
                <div id='last-menu' className='w-2xs flex justify-between items-center bg-amber-100'>
                    <div id='login' className='flex flex-1 justify-between px-6 bg-blue-200'>
                        <b><a href="" className='mx-1'>Login</a></b>
                        <div className='mx-1'><b>Or</b></div>
                        <b><a href="" className='mx-1'>Register</a></b>
                    </div>
                    <div id='sell' className='bg-red-400 rounded-lg'>
                        <button className='flex items-center p-2 cursor-pointer'>
                            <MdAddAPhoto className='mx-0.5'/>
                            <b><span className='mx-0.5'>Sell</span></b>
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
};

export default TopBar;
