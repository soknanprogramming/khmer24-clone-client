import React from 'react';
import GalleryItem from './GalleryItem';

const MainCategories: React.FC = () => {
    return (
        <div className='bg-amber-400 w-6xl'>
            <GalleryItem imageURL='fake/computer-and-accessories.webp' tittle='Computers & Accessories' url=''/>
        </div>
    );
};

export default MainCategories;