import React from 'react';
import MainCategories from '../components/MainCategories';
import Ad from '../components/Ad';
import AdLists from '../components/AdLists';

const Home: React.FC = () => (
    <div className='flex justify-center'>
        <div className='w-6xl bg-amber-100 mt-1.5'>
            <Ad />
            <h1 className='tracking-wider my-2 '><b>Welcome to ume24.com, the biggest online market in Cambodia.</b></h1>
            <MainCategories />
            <AdLists />
        </div>
    </div>
);

export default Home;
