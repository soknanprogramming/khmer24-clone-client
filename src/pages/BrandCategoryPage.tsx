import React, { useState, useEffect, use } from 'react';
import { useParams } from "react-router-dom";
import LinkPage from '../components/LinkPage';
import useCategories from "../store/useCategories";
import { toSlug } from '../func/toSlug';
import OptionMenu from '../components/OptionalMenu';
import BrandOption from '../components/BrandOption';
import type { getBrand } from '../types/getBrand';
import axios from "axios";


const BrandCategoryPage: React.FC = () => {
    const apiUrl = import.meta.env.VITE_API_URL;

    const categories = useCategories((state) => state.categories);
    const fetchCategories = useCategories((state) => state.fetchCategories);

    const { subCategoriesName, brandName } = useParams<{subCategoriesName: string, brandName: string}>()

    const [brands, setBrands] = useState<getBrand[]>([]);

    useEffect(() => {
        if (categories.length === 0) {
            fetchCategories();
            console.log("Fetching categories...");
        }
    }, [categories, fetchCategories]);

    // if (categories.length === 0) {
    //     return <div>Loading categories...</div>;
    // }

    const thisCategories = categories.find((cat) => {
        return toSlug(cat.mainCategory.name) === subCategoriesName;
    })

    // if (!thisCategories) {
    //     console.error("Error: Category not found for subCategoriesName:", subCategoriesName);
    //     return <div>Category not found: {subCategoriesName}</div>;
    // }

    if (!thisCategories) {
        throw new Error(`Category not found for subCategoriesName: ${subCategoriesName}`);
    }

    
    const thisSubCategories = thisCategories.subCategories.find((cat) => {
        return toSlug(cat.name) === brandName
    })

    useEffect(
        () => {
            const fetchBrands = async () => {
                try {
                    const response = await axios.get<getBrand[]>(`${apiUrl}/api/productCategory/${thisSubCategories?.id}`);
                    setBrands(response.data);
                } catch (error) {
                    console.error("Error fetching brands:", error);
                }
            };
            fetchBrands();
            console.log("Fetching brands for subCategory:", thisSubCategories?.name);
            
        },
            // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    )

    useEffect(() => {
        console.log("Brands:", brands);
    }, [brands]);


    return (
        <div className="flex justify-center">
            <div className="w-6xl bg-amber-100 mt-1.5">
                <LinkPage levelMainCategories={thisCategories.mainCategory.name} levelSubCategories={thisSubCategories?.name}/>
                <OptionMenu/>
                <BrandOption/>
                <h1>BrandCategory Page</h1>
                {
                    brands.map((brand) => (
                        <div key={brand.id}>
                            {brand.name}
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BrandCategoryPage;