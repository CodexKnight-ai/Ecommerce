import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Shop() {
  // Keeping the existing productData the same
  const productData = {
    'Wood rail staircase': [
      {
        id: 1,
        title: 'Classic Wooden Railing Design',
        price: '1500$',
        img: '/test.png',
        description: 'Elegant wooden railing with smooth finishing'
      },
      {
        id: 2,
        title: 'Modern Minimalist Wood Railing',
        price: '1800$',
        img: '/test.png',
        description: 'Sleek design with clean lines'
      },
      {
        id: 3,
        title: 'Rustic Wooden Staircase Railing',
        price: '1300$',
        img: '/test.png',
        description: 'Vintage-inspired wooden railing'
      }
    ],
    'Main door grill': [
      {
        id: 4,
        title: 'Intricate Geometric Door Grill',
        price: '2000$',
        img: '/heroBg.jpeg',
        description: 'Complex geometric pattern door grill'
      },
      {
        id: 5,
        title: 'Modern Minimalist Door Grill',
        price: '1700$',
        img: '/test.png',
        description: 'Simple yet stylish door entrance grill'
      }
    ],
    'Ss glass railings': [
      {
        id: 6,
        title: 'Frameless Glass Railing',
        price: '2500$',
        img: '/test.png',
        description: 'Transparent and modern glass railing'
      },
      {
        id: 7,
        title: 'Stainless Steel Framed Glass Railing',
        price: '2200$',
        img: '/heroBg.jpeg',
        description: 'Robust glass railing with steel frame'
      }
    ],
    'Ss design railing': [
      {
        id: 8,
        title: 'Contemporary SS Railing Design',
        price: '1900$',
        img: '/test.png',
        description: 'Cutting-edge stainless steel railing'
      },
      {
        id: 9,
        title: 'Industrial Style SS Railing',
        price: '2100$',
        img: '/heroBg.jpeg',
        description: 'Raw and industrial stainless steel design'
      }
    ],
    'Regular best': [
      {
        id: 10,
        title: 'Standard Quality Railing',
        price: '1200$',
        img: '/test.png',
        description: 'Reliable and cost-effective railing solution'
      },
      {
        id: 11,
        title: 'Best Selling Standard Railing',
        price: '1400$',
        img: '/heroBg.jpeg',
        description: 'Most popular standard railing design'
      }
    ]
  };

  const [activeTab, setActiveTab] = useState('Wood rail staircase');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const CategoriesBar = () => {
    const tabs = Object.keys(productData);

    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full text-center py-6 px-4"
      >
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Categories</h2>
        
        <div className="flex flex-wrap items-center justify-center space-x-2 md:space-x-4 mb-4">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-2 md:px-4 md:py-2 text-sm md:text-base font-medium rounded-lg transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-black'
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '50%' }}
            transition={{ duration: 0.5 }}
            className="h-[2px] bg-black"
          />
        </div>
      </motion.div>
    );
  };

  const ProductModal = ({ product, onClose }) => {
    if (!product) return null;

    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      >
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          className="bg-white rounded-lg max-w-md w-full p-6 relative"
        >
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 text-gray-600 hover:text-black"
          >
            ✕
          </button>
          
          <img 
            src={product.img} 
            alt={product.title} 
            className="w-full h-64 object-cover rounded-t-lg mb-4"
          />
          
          <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>
          
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold text-gray-800">{product.price}</span>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  const activeProducts = productData[activeTab];

  return (
    <div className="bg-[#F8FBF8] min-h-screen py-12 px-4 md:px-8 lg:px-16">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center text-4xl font-bold mb-10 text-gray-800"
      >
        Our Products
      </motion.h1>
      
      <CategoriesBar />

      {/* Product Cards for the Active Tab */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, staggerChildren: 0.1 }}
        className="flex flex-wrap justify-center gap-6"
      >
        <AnimatePresence>
          {activeProducts.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  className="w-full h-full object-cover" 
                  src={product.img} 
                  alt={product.title} 
                />
              </div>
              <div className="p-5">
                <h5 className="text-xl font-bold mb-2 text-gray-900">
                  {product.title}
                </h5>
                <div className='flex justify-between items-center mt-4'>
                  <p className="text-lg font-semibold text-gray-700">
                    {product.price}
                  </p>
                  <button
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Product Modal with Framer Motion Exit Animation */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Shop;