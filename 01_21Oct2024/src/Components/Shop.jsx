import React, { useState } from 'react';

function Shop() {
  
  const productData = {
    'Wood rail staircase': [
      {
        title: 'Wood Rail Staircase 1',
        price: '0$',
        img: '/test.png',
      },
      {
        title: 'Wood Rail Staircase 2',
        price: '0$',
        img: '/login.png',
      },
    ],
    'Main door grill': [
      {
        title: 'Main Door Grill 1',
        price: '0$',
        img: '/heroBg.jpeg',
      },
      {
        title: 'Main Door Grill 2',
        price: '0$',
        img: '/test.png',
      },
    ],
    'Ss glass railings': [
      {
        title: 'Stainless Steel Glass Railings 1',
        price: '0$',
        img: '/test.png',
      },
      {
        title: 'Stainless Steel Glass Railings 2',
        price: '0$',
        img: '/heroBg.jpeg',
      },
    ],
    'Ss design railing': [
      {
        title: 'SS Design Railing 1',
        price: '0$',
        img: '/test.png',
      },
      {
        title: 'SS Design Railing 2',
        price: '0$',
        img: '/heroBg.jpeg',
      },
    ],
    'Regular best': [
      {
        title: 'Regular Best Railings 1',
        price: '0$',
        img: '/test.png',
      },
      {
        title: 'Regular Best Railings 2',
        price: '0$',
        img: '/heroBg.jpeg',
      },
    ],
  };

  
  const [activeTab, setActiveTab] = useState('Wood rail staircase');

  
  const CategoriesBar = () => {
    const tabs = Object.keys(productData);

    return (
      <div className="w-full text-center py-6">
        {/* Categories Title */}
        <h2 className="text-3xl font-bold mb-4">Categories</h2>

        {/* Tabs Section */}
        <div className="flex items-center justify-center space-x-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-medium ${
                activeTab === tab
                  ? 'bg-black text-white'
                  : 'text-gray-400 hover:text-black'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Active Tab Indicator */}
        <div className="flex justify-center ">
          <div
            className="h-[2px] bg-[#000000] transition-all duration-300"
            style={{
              width: '50%', 
            }}
          />
        </div>
      </div>
    );
  };

  
  const activeProducts = productData[activeTab];

  return (
    <div className="bg-[#F8FBF8] w-screen h-screen flex flex-col py-10">
      <h1 className="self-center text-4xl">Shop</h1>
      <CategoriesBar />

      {/* Product Cards for the Active Tab */}
      <div className="flex justify-center mt-10 space-x-6">
        {activeProducts.map((product, index) => (
          <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={product.img} alt={product.title} />
            </a>
            <div className="p-5 ">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {product.title}
                </h5>
              </a>
              <div className='flex gap-[30px] justify-between align-middle'>
                <p className="mb-3 text-[1.3em] font-normal text-gray-700 dark:text-gray-400">
                  {product.price}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center px-8 h-[3em] text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add
                </a>
              </div>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
