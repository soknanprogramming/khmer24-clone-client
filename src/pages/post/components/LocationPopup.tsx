import React, { useState } from "react";
import Popup from "../../../components/Popup";

const fakeLocation = [
    {
        provine: {
            name: "Phnom Penh",
            districts: [
                {
                    name: "Chamkar Mon",
                    communes: ["expame", "tony"]
                },
                {
                    name: "gg Mon",
                    communes: ["gd", "ad"]
                },
            ]
        }
    },
    
]

const LocationPopup: React.FC = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    return (
        <div>
            <div onClick={() => {setPopupOpen(true)}} className="cursor-pointer px-3 flex items-center">
                <input type="text" className="w-full h-11 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 px-3" readOnly />
            </div>
            <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)}>
                <div>
                    <h1>LocationPopup</h1>
                </div>
            </Popup>
        </div>
    )
}

export default LocationPopup;
