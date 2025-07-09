import React from 'react';
import GalleryBrand from './GalleryBrand';

const BrandOption: React.FC = () => {
    return (
        <div className="w-6xl grid gap-0 h-32">
            <div className="w-6xl flex bg-green-600 overflow-x-auto">
                {
                    Array.from({ length: 10 }, (_, index) => (
                        <GalleryBrand key={index} imgUrl={`https://images.khmer24.co/fields/21-10-19/s-msi-1634631286.png`} />
                    ))
                }
            </div>
        </div>
    );
}

export default BrandOption;