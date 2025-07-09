import React from 'react';

type GalleryBrandProps = {
    imgUrl: string;
};

const GalleryBrand: React.FC<GalleryBrandProps> = ({imgUrl}) => {
    return (
        <div className='bg-yellow-400 min-w-28 size-28 flex flex-col justify-center items-center text-center'>
            <div id='image'>
                <img src={imgUrl} alt="" className='size-15'/>
            </div>
            <div id='tittle'>
                <p>Other - ផ្សេងៗ</p>
            </div>
        </div>
    );
};

export default GalleryBrand;