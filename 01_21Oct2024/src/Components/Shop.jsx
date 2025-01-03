import React, { useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from './SEO/SEO';
import { Helmet } from 'react-helmet-async';
import { ProductData } from './ProductData';

// Lazy load the ProductModal component
const ProductModal = lazy(() => import('./ProductModal'));

function Shop() {
  // Comprehensive product data with unique details
  <ProductData/>

  const [activeTab, setActiveTab] = useState('Wood rail staircase');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const CategoriesBar = () => {
    const tabs = Object.keys(ProductData);

    return (
      
      <div className="w-full text-center py-6 px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Categories</h2>
        
        <div className="flex flex-wrap items-center justify-center space-x-2 md:space-x-4 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-3 py-2 md:px-4 md:py-2 text-sm md:text-base 
                font-medium rounded-lg 
                transition-colors duration-300 
                ${activeTab === tab
                  ? 'bg-black text-white'
                  : 'text-gray-600 bg-gray-100 hover:bg-gray-200'
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="h-[2px] bg-black w-1/2 mx-auto" />
      </div>
    );
  };

  // Add structured data for products
  const productStructuredData = {
    "@context": "https://schema.org/",
    "@type": "ItemList",
    "itemListElement": Object.values(ProductData).flat().map((product, index) => ({
      "@type": "Product",
      "position": index + 1,
      "name": product.title,
      "description": product.description,
      "image": `https://prithvisteelart.com${product.img}`,
      "offers": {
        "@type": "Offer",
        "price": product.price.replace('$', ''),
        "priceCurrency": "USD"
      }
    }))
  };

  // Add local business schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "Prithvi Steel Art",
    "image": "https://prithvisteelart.com/image.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Design Street",
      "addressLocality": "Creative City",
      "addressRegion": "State",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "YOUR_LATITUDE",
      "longitude": "YOUR_LONGITUDE"
    },
    "url": "https://prithvisteelart.com",
    "telephone": "+1234567890",
    "priceRange": "$$"
  };

  const activeProducts = ProductData[activeTab];

  return (
    <section className="bg-[#F8FBF8] min-h-screen py-12 px-4 md:px-8 lg:px-16">
      <SEO 
        title="Premium Steel & Glass Products | Prithvi Steel Art"
        description="Browse our collection of custom metal works, glass railings, and architectural solutions. High-quality craftsmanship for your home and business needs."
        keywords="steel products, glass railings, metal works, architectural solutions"
      />
      
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(productStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <h1 className="text-center text-4xl font-bold mb-10 text-gray-800">
        Our Premium Steel & Glass Products
      </h1>

      <CategoriesBar />

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activeProducts.map((product) => (
          <article 
            key={product.id}
            className="product-card bg-white rounded-lg shadow-md overflow-hidden"
          >
            <figure className="h-64 overflow-hidden">
              <img 
                loading="lazy"
                className="w-full h-full object-cover" 
                src={product.img.replace('.png', '.webp')} // Use WebP format
                alt={`${product.title} - ${product.description}`}
                width="400"
                height="300"
              />
            </figure>
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
          </article>
        ))}
      </div>

      {/* Modal with Suspense */}
      <Suspense fallback={<div>Loading...</div>}>
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </Suspense>
    </section>
  );
}

export default Shop;