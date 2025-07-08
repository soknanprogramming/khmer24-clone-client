import React from 'react';
import { useParams } from "react-router-dom";
import LinkPage from '../components/LinkPage';
import useCategories from "../store/useCategories";
import { toSlug } from '../func/toSlug';
import OptionalMenu from '../components/OptionalMenu';



const BrandCategoryPage: React.FC = () => {
    const categories = useCategories((state) => state.categories);
    const { subCategoriesName, brandName } = useParams<{subCategoriesName: string, brandName: string}>()

    const thisCategories = categories.find((cat) => {
        return toSlug(cat.mainCategory.name) === subCategoriesName;
    })

    if(thisCategories === undefined) throw new Error("Error on BrandCategoryPage")
    
    const thisSubCategories = thisCategories.subCategories.find((cat) => {
        return toSlug(cat.name) === brandName
    })

    return (
        <div className="flex justify-center">
            <div className="w-6xl bg-amber-100 mt-1.5">
                <LinkPage levelMainCategories={thisCategories.mainCategory.name} levelSubCategories={thisSubCategories?.name}/>
                <OptionalMenu/>
                <h1>BrandCategory Page</h1>
            </div>
        </div>
    );
};

export default BrandCategoryPage;