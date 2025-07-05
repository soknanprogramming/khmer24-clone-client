import React from 'react';
import useLang from "../store/lang"
import khmer24 from "../assets/img/khmer24.webp";
import km_40x40 from "../assets/img/km-40x40.webp"
import en_40x40 from "../assets/img/en-40x40.webp"



const TopBar: React.FC = () => {
    const { lang, changeLang } = useLang();
    return(
        <header className='h-14 w-screen border-b-2 border-gray-300 shadow-sm border-solid flex items-center justify-center'>
            <nav className='bg-amber-200 w-6xl h-11 flex items-center px-4'>
                <div id='logo-and-lang' className='w-48 h-8 bg-amber-50 flex items-center'>
                    <a href="">
                        <img src={khmer24} alt="" className='w-36'/>
                    </a>
                    <div className='m-3 cursor-pointer' onClick={changeLang}>
                        {lang === "km" ? (
                            <img src={en_40x40} alt="" className='size-6'/>
                        ) : (
                            <img src={km_40x40} alt="" className="size-6" />
                        )}
                    </div>
                </div>
                <div id='search' className='w-md'>
                    <button className='bg-blue-400 border-2 border-r-[1px]'>All Category</button>
                    <input className='bg-blue-400 border-2 border-l-[1px]' type="text" />
                </div>
                <div id='login' className='flex '>
                    <a href="" className='mx-1'>Login</a>
                    <div className='mx-1'>Or</div>
                    <a href="" className='mx-1'>Register</a>
                </div>
                <div id='sell'>
                    <button>Sell</button>
                </div>
            </nav>
        </header>
    )
};

export default TopBar;
