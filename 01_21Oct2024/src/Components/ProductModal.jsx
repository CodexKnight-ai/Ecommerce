import React from 'react';
import { motion } from 'framer-motion';

function ProductModal({ product, onClose }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
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
          aria-label="Close modal"
        >
          ✕
        </button>
        
        <figure>
          <img 
            src={product.img.replace('.png', '.webp')}
            alt={`Detailed view of ${product.title}`}
            className="w-full h-64 object-cover rounded-t-lg mb-4"
            loading="lazy"
            width="400"
            height="300"
          />
        </figure>
        
        <h2 id="modal-title" className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-xl font-semibold text-gray-800">{product.price}</span>
          <button 
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            aria-label={`Add ${product.title} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProductModal; 