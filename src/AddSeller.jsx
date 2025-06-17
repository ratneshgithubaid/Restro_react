import React from 'react';

const AddSeller = () => {
  return (
    <div className="bg-yellow-200 min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-semibold text-center mb-8">
          📦 Add New Seller
        </h1>

        {/* Form */}
        <form className="space-y-6">
          {/* Seller Name */}
          <div className="flex flex-col">
            <label className="text-xl mb-1">Seller Name</label>
            <input
              type="text"
              placeholder="e.g. John Traders"
              className="p-2 border rounded-md w-full"
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col">
            <label className="text-xl mb-1">Email Address</label>
            <input
              type="email"
              placeholder="seller@email.com"
              className="p-2 border rounded-md w-full"
            />
          </div>

          {/* Shop Name */}
          <div className="flex flex-col">
            <label className="text-xl mb-1">Shop Name</label>
            <input
              type="text"
              placeholder="e.g. John Kirana Store"
              className="p-2 border rounded-md w-full"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="text-xl mb-1">Phone Number</label>
            <input
              type="number"
              placeholder="6375323147"
              className="p-2 border rounded-md w-full"
            />
          </div>

          {/* Shop Address */}
          <div className="flex flex-col">
            <label className="text-xl mb-1">Shop Address</label>
            <input
              type="text"
              placeholder="City, Street, Pincode"
              className="p-2 border rounded-md w-full"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition duration-300"
            >
              ✅ Add Seller
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSeller;
