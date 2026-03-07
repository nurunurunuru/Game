import React from 'react'
import { BsFire } from 'react-icons/bs'
import { FaYoutube, FaFacebookF, FaTrophy } from 'react-icons/fa'
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router'
import { useState } from 'react'

const Hero = () => {

  const [message, setMessage] = useState("")
  return (
    <>
    {/* ---------------- HERO SECTION ---------------- */}
    <section className='max-padd-container max-xl:mt-8 mb-16'>
  <div className='max-pad-container bg-hero bg-contain bg-center bg-no-repeat h-[736px] w-full rounded-tl-3xl rounded-tr-3xl mt-6'>
    
  </div>
</section>

 {/* ---------------- PLAYER + TOURNAMENT SECTION ---------------- */}
<section className='max-padd-container mb-24'>

  <div className='grid md:grid-cols-2 gap-10'>

    {/* PLAYER REGISTRATION */}
    <div className='bg-gradient-to-r from-purple-900 to-black text-white rounded-3xl p-12 shadow-xl text-center'>

      <h2 className='text-3xl md:text-4xl font-bold mb-4'>
        🎮 Player Registration
      </h2>

      <p className='max-w-md mx-auto text-gray-300 mb-8'>
        Want to participate in our upcoming gaming tournaments and get featured 
        on our platform? Register now and showcase your gaming skills to the world.
      </p>

      <div className='flex justify-center'>
        <a
          href='https://forms.gle/XgcHnEwdCxeBydep6'
          target='_blank'
          rel='noopener noreferrer'
          className='bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-xl text-lg transition-transform hover:scale-105'
        >
          Register Now 🚀
        </a>
      </div>

    </div>

    {/* JOIN TOURNAMENT */}
    <div className='bg-gradient-to-r from-indigo-900 to-black text-white rounded-3xl p-12 text-center shadow-xl'>

      <h2 className='text-3xl md:text-4xl font-bold mb-4'>
        🏆 Join The Tournament
      </h2>

      <p className='max-w-md mx-auto text-gray-300 mb-8'>
        Our exciting gaming tournaments are coming soon. Stay ready and prepare 
        your squad to compete with the best players.
      </p>

      <button
        onClick={() => setMessage("Wait for tournament")}
        className='bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl text-lg font-semibold transition-transform hover:scale-105'
      >
        Join Now
      </button>

      {message && (
        <p className='mt-6 text-yellow-400 font-semibold text-lg'>
          {message}
        </p>
      )}

    </div>

  </div>

</section>


    {/* ---------------- PROMOTION SECTION ---------------- */}
    <section className='max-padd-container mb-20'>
      <div className='bg-gradient-to-r from-gray-900 to-black text-white rounded-3xl p-10 shadow-lg'>
        <h2 className='text-3xl font-bold mb-6 text-center'>
          Promote Your Gaming Channel 🚀
        </h2>

        <div className='grid md:grid-cols-3 gap-8 text-center'>
          
          {/* YouTube Promotion */}
          <div className='bg-gray-800 p-6 rounded-2xl hover:scale-105 transition duration-300'>
            <FaYoutube className='text-red-600 text-4xl mx-auto mb-4'/>
            <h3 className='text-xl font-semibold mb-2'>YouTube Promotion</h3>
            <p className='text-gray-400 text-sm mb-4'>
              Grow your subscribers and boost your gaming videos with our featured promotion.
            </p>
            <button className='btn-secondary'>Promote Now</button>
          </div>

          {/* Facebook Promotion */}
<div className='bg-gray-800 p-6 rounded-2xl hover:scale-105 transition duration-300'>
  <FaFacebookF className='text-blue-500 text-4xl mx-auto mb-4'/>

  <h3 className='text-xl font-semibold mb-2'>Facebook Page Boost</h3>

  <p className='text-gray-400 text-sm mb-4'>
    Get more reach, likes and engagement for your gaming page.
  </p>

  <a
    href='https://www.facebook.com/kapellagamingyt'
    target='_blank'
    rel='noopener noreferrer'
    className='btn-secondary inline-block'
  >
    Boost Now
  </a>
</div>

          {/* Player Profile Promotion */}
          <div className='bg-gray-800 p-6 rounded-2xl hover:scale-105 transition duration-300'>
            <FaTrophy className='text-yellow-500 text-4xl mx-auto mb-4'/>
            <h3 className='text-xl font-semibold mb-2'>Pro Player Feature</h3>
            <p className='text-gray-400 text-sm mb-4'>
              Get featured as a pro player on our homepage and gain recognition.
            </p>
            <button className='btn-secondary'>Get Featured</button>
          </div>

        </div>
      </div>
    </section>

    {/* ---------------- SOCIAL MEDIA SECTION ---------------- */}
<section className='max-padd-container mb-16'>
  <h2 className='text-3xl font-bold mb-6 text-center'>
    Connect With Us 🌐
  </h2>

  <div className='flex justify-center gap-8'>
    {/* Facebook */}
    <a
      href='https://facebook.com/groups/781473424472406/' 
      target='_blank' 
      rel='noopener noreferrer'
      className='bg-blue-600 hover:bg-blue-700 p-5 rounded-full text-white text-2xl transition-transform hover:scale-110'
    >
      <FaFacebookF />
    </a>

    {/* WhatsApp */}
    <a
      href='https://wa.me/YourWhatsAppNumber' 
      target='_blank' 
      rel='noopener noreferrer'
      className='bg-green-500 hover:bg-green-600 p-5 rounded-full text-white text-2xl transition-transform hover:scale-110'
    >
      <FaWhatsapp />
    </a>

    {/* YouTube */}
    <a
      href='https://www.youtube.com/channel/YourYouTubeID' 
      target='_blank' 
      rel='noopener noreferrer'
      className='bg-red-600 hover:bg-red-700 p-5 rounded-full text-white text-2xl transition-transform hover:scale-110'
    >
      <FaYoutube />
    </a>
  </div>
</section>


    {/* ---------------- TOURNAMENT NEWS SECTION ---------------- */}
    <section className='max-padd-container mb-24'>
      <h2 className='text-3xl font-bold mb-10 text-center'>
        🏆 Tournament News & Updates
      </h2>

      <div className='grid md:grid-cols-3 gap-8'>

        {/* News Card 1 */}
        <div className='bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition'>
          <div className='p-6'>
            <h3 className='text-xl font-bold mb-3'>
              PUBG Global Championship 2026
            </h3>
            <p className='text-gray-600 text-sm mb-4'>
              The biggest PUBG tournament of the year with top teams worldwide competing for glory.
            </p>
            <Link className='text-red-600 font-semibold'>
              Read More →
            </Link>
          </div>
        </div>

        {/* News Card 2 */}
        <div className='bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition'>
          <div className='p-6'>
            <h3 className='text-xl font-bold mb-3'>
              Valorant Asia Championship
            </h3>
            <p className='text-gray-600 text-sm mb-4'>
              Asia’s best Valorant teams battle for the championship title.
            </p>
            <Link className='text-red-600 font-semibold'>
              Read More →
            </Link>
          </div>
        </div>

        {/* News Card 3 */}
        <div className='bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition'>
          <div className='p-6'>
            <h3 className='text-xl font-bold mb-3'>
              Free Fire World Series
            </h3>
            <p className='text-gray-600 text-sm mb-4'>
              The ultimate Free Fire showdown featuring elite squads from across the globe.
            </p>
            <Link className='text-red-600 font-semibold'>
              Read More →
            </Link>
          </div>
        </div>

      </div>
    </section>

    </>
  )
}

export default Hero