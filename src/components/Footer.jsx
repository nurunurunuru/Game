import React from 'react'
import { BsEnvelopeFill, BsFacebook, BsGeoAltFill, BsInstagram, BsLinkedin, BsTelephoneFill, BsTwitch } from 'react-icons/bs'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className='max-padd-container mt-10'>
        <div className='max-padd-container bg-black text-white py-10 rounded-tr-3xl rounded-tl-3xl'>
         <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8'>
            {/* Logo */}
            <div>
                <Link to="/">
                <h4 className='bold-24 text-secondary'>
                    Esports
                </h4>
                </Link>
                <p className=' text-white mt-5'>
                    Level Up Your Game Experience Make you an ultimate weapon
                </p>
                <p className='mt-4 text-white/70'>
                © 2026 GameVerse. All Rights Reserved.
                </p>
            </div>
            {/* Quick-Links */}
            <div className=''>
                <h4 className='h4 mb-4'>Quick-Links</h4>
                <ul className='space-y-2 regular-15'>
                    <li className='text-gray-10'>
                        <a href="/about">About-Us</a>
                    </li>
                    <li className='text-gray-10'>
                        <a href="/properties">Products</a>
                    </li>
                    <li className='text-gray-10'>
                        <a href="/services">Services</a>
                    </li>
                    <li className='text-gray-10'>
                        <a href="/contact">Contact</a>
                    </li>
                    <li className='text-gray-10'>
                        <a href="/privacy-policy">Privacy-Policy</a>
                    </li>
                </ul>
            </div>
            {/* Contact */}
            <div>
                <h4 className='h4 mb-4'>Contact-Us</h4>
                <p className='text-gray-10 mb-2'>
                    <BsTelephoneFill className='inline-block mr-2'/>8888888888
                </p>
                <p className='text-gray-10 mb-2'>
                    <BsEnvelopeFill className='inline-block mr-2'/>{""}
                    Games@gmail.com
                </p>
                <p className='text-gray-10 mb-2'>
                    <BsGeoAltFill className='inline-block mr-2'/> Dhaka, Bangladesh
                </p>
            </div>
            {/* Social Media Links */}
            <div>
                <h4 className='h4 mb-4'>Folow-Us</h4>
                <div className='flex space-x-4 text-secondary'>
                    <a href="">
                    <BsFacebook/>
                    </a>
                    <a href="">
                    <BsLinkedin/>
                    </a>
                    <a href="">
                    <BsTwitch/>
                    </a>
                    <a href="">
                    <BsInstagram/>
                    </a>
                </div>
            </div>
         </div>
         <div className='mt-10 text-center text-gray-100'>
            <p>
                © 2026 GameVerse. <a href="#">All Rights Reserved.</a>
            </p>
         </div>
         <div>

         </div>
        </div>
    </footer>
  )
}

export default Footer