import React from 'react';

type GalleryBrandProps = {
    id?: number
    title: string
    imgUrl: string
};

const GalleryBrand: React.FC<GalleryBrandProps> = ({title, imgUrl}) => {
    return (
        <div className='bg-yellow-400 min-w-28 size-28 flex flex-col justify-center items-center text-center'>
            <div id='image'>
                <img src={imgUrl} alt="" className='size-15'/>
            </div>
            <div>
                <p>{title}</p>
            </div>
        </div>
    );
};

export default GalleryBrand;