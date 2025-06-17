import React from "react";

const Product = () => {
  return (
    <>
      <div className="max-w-[1320px] mx-auto">
        <h1 className="text-4xl text-center mt-4">Our Products</h1>
      </div>

      <div className="max-w-[1320px]  mx-auto  grid lg:grid-cols-4 md:grid-cols-4 gap-5 py-8">
        <div className="text-center shadow-lg">
          <div className="overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1672242676660-923c3bd446d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D"
              className="hover:scale-125 duration-1000"
            />
          </div>
          <h1 className="py-1 text-2xl">Product 1</h1>
          <p className="py-1">
            A rich and creamy North Indian curry made with tender paneer cubes
            cooked.
          </p>
        </div>
        <div className="text-center shadow-lg">
          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8fDA%3D"
              className="hover:scale-125 duration-1000"
            />
          </div>
          <h1 className="py-1 text-2xl">Product 2</h1>
          <p className="py-1">
            A delicious, cheesy pizza loaded with fresh farm veggies like
          </p>
        </div>
        <div className="text-center shadow-lg">
          <div className="overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1484980972926-edee96e0960d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="hover:scale-125 duration-1000"
            />
          </div>
          <h1 className="py-1 text-2xl">Product 3</h1>
          <p className="py-1">
            Penne pasta tossed in a smooth and creamy white sauce with hints of
            garlic
          </p>
        </div>
        <div className="text-center shadow-lg">
          <div className="overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1672363353881-68c8ff594e25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGZvb2R8ZW58MHx8MHx8fDA%3D"
              className="hover:scale-125 duration-1000"
            />
          </div>
          <h1 className="py-1 text-2xl">Product 4</h1>
          <p className="py-1 ">
            A hearty and flavorful burger made with a crispy vegetable patty,
            fresh lettuce
          </p>
        </div>
      </div>
    </>
  );
};

export default Product;
