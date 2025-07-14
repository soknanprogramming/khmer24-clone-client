import React from "react";

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Don’t render if closed

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-transparent  bg-opacity-50 z-50"
      onClick={onClose} // Click backdrop to close
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-80 relative"
        onClick={(e) => e.stopPropagation()} // Prevent backdrop click
      >
        {children}

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
      </div>
    </div>
  );
}


export default Popup;