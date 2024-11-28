import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone 
} from 'lucide-react';

function Footer() {
  const services = [
    'Custom Metal Works',
    'Interior Design',
    'Glass Work',
    'Furniture Design',
    'Architectural Solutions'
  ];

  const socialLinks = [
    { icon: Facebook, url: '#', name: 'Facebook' },
    { icon: Instagram, url: '#', name: 'Instagram' },
    { icon: Linkedin, url: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className='bg-gradient-to-br from-gray-900 to-black text-white py-16 px-4 md:px-8 lg:px-16'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
        {/* About Us Column */}
        <div className='space-y-6'>
          <div className='flex items-center space-x-4'>
            <img 
              src='/image.png' 
              alt='Company Logo' 
              className='w-24 h-24 rounded-full ring-2 ring-blue-500 object-cover' 
            />
            <h2 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-400'>
              Prithvi Steel Art
            </h2>
          </div>
          <p className='text-gray-300 leading-relaxed'>
            Crafting exceptional architectural solutions with precision, creativity, 
            and passion. We transform metal, glass, and design into extraordinary spaces.
          </p>
          <a 
            href='#about' 
            className='inline-block text-blue-400 hover:text-blue-300 transition-colors group'
          >
            Learn More
            <span className='block h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform'></span>
          </a>
        </div>

        {/* Services Column */}
        <div>
          <h3 className='text-xl font-semibold mb-6 text-blue-400'>Our Services</h3>
          <ul className='space-y-3'>
            {services.map((service, index) => (
              <li key={index} className='group'>
                <a 
                  href='#' 
                  className='text-gray-300 hover:text-white transition-colors flex items-center'
                >
                  <span className='mr-2 text-blue-500 group-hover:translate-x-1 transition-transform'>→</span>
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3 className='text-xl font-semibold mb-6 text-blue-400'>Contact Information</h3>
          <div className='space-y-4'>
            <div className='flex items-center space-x-3'>
              <MapPin className='text-blue-500 h-5 w-5' />
              <p className='text-gray-300'>123 Design Street, Creative City</p>
            </div>
            <div className='flex items-center space-x-3'>
              <Phone className='text-blue-500 h-5 w-5' />
              <p className='text-gray-300'>+123 456 7890</p>
            </div>
            <div className='flex items-center space-x-3'>
              <Mail className='text-blue-500 h-5 w-5' />
              <p className='text-gray-300'>info@prithvisteelart.com</p>
            </div>
          </div>
        </div>

        {/* Social Media Column */}
        <div>
          <h3 className='text-xl font-semibold mb-6 text-blue-400'>Connect With Us</h3>
          <div className='space-y-4'>
            <p className='text-gray-300'>Follow our journey and stay updated!</p>
            <div className='flex space-x-6'>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-300 hover:text-white transition-colors group'
                >
                  <social.icon 
                    className='h-6 w-6 group-hover:scale-110 group-hover:text-blue-500 transition-transform'
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section with Animated Divider */}
      <div className='relative mt-12 pt-6'>
        <div className='absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent'></div>
        <div className='text-center text-gray-400'>
          <p>© 2024 Prithvi Steel Art. All Rights Reserved.</p>
          <p className='text-xs mt-2 opacity-75'>
            Designed with <span className='text-red-500'>♥</span> by Prithvi Steel Art
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;