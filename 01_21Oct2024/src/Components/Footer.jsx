import React from 'react';

function Footer() {
  return (
    <>
      <footer className='w-screen h-auto bg-[var(--fl-grey)] flex justify-between p-4'>
        {/* Column 1: About Us */}
        <div className='w-[22%] bg-red-500 p-3 flex flex-col'>
          <img src='/image.png' alt='Company Logo' className='w-12 h-12 mb-2' />
          <div>
            <h3 className='font-semibold text-white mb-1'>About Us</h3>
            <p className='text-white text-sm leading-tight'>
              We are manufacturers and traders of all types of architecture work
              in stainless steel, aluminium, mild steel, glass work railing, and
              furniture. We also offer custom work for various needs.
            </p>
            <a href='#' className='text-blue-300 mt-2 underline'>View More!</a>
          </div>
        </div>

        {/* Column 2: Services */}
        <div className='w-[22%] bg-red-500 p-3'>
          <h3 className='font-semibold text-white mb-1'>Our Services</h3>
          <ul className='text-white text-sm'>
            <li>Custom Metal Works</li>
            <li>Interior Design</li>
            <li>Glass Work</li>
            <li>Furniture Design</li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className='w-[22%] bg-red-500 p-3'>
          <h3 className='font-semibold text-white mb-1'>Contact Us</h3>
          <p className='text-white text-sm'>
            Address: 123 Street, City, Country<br />
            Phone: +123 456 7890<br />
            Email: info@company.com
          </p>
        </div>

        {/* Column 4: Social Media */}
        <div className='w-[22%] bg-red-500 p-3'>
          <h3 className='font-semibold text-white mb-1'>Follow Us</h3>
          <p className='text-white text-sm'>
            Stay connected through our social media platforms:
          </p>
          <ul className='text-white text-sm'>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;