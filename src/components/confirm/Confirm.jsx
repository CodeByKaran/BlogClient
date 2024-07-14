import React from 'react';

const Confirm = ({ message, onConfirm, onCancel, show }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-400/10
        p-4 rounded-lg shadow-md w-[95%]
         backdrop-blur border border-gray-400/40">
        <p className="text-gray-300 text-start text-[16px] font-medium">{message}</p>
        <div className="mt-11 flex justify-end">
          <button className="bg-[#f35252] hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-3" onClick={onCancel}>
            Cancel
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
