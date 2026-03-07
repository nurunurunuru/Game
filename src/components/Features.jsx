import React from 'react'
import Title from './Title'
import { TbArrowBackUp, TbTruckDelivery } from 'react-icons/tb'
import { RiSecurePaymentLine } from 'react-icons/ri'

const Features = () => {
  return (
    <section className='max-padd-container py-16'>
        <Title title={'Our Features'} titleStyles={'text-center'}/>
        {/* Container */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 bg-white rounded-xl'>
            <div className='p-4 rounded-3xl'>
                <TbArrowBackUp className='bold-32 mb-3 text-yellow-500'/>
                <h4 className='h4 capitalize'>Upgrade without worry!</h4>
                <p>If your game key doesn’t work or your gear has issues, we offer a smooth and gamer-friendly return process. No stress, no delays — just quick support and instant resolution so you can get back to playing.</p>
            </div>
            <div className='p-4 rounded-3xl'>
                <TbTruckDelivery className='bold-32 mb-3 text-secondary'/>
                <h4 className='h4 capitalize'>No more waiting to level up!</h4>
                <p>Get your digital game codes instantly after purchase. For physical gaming gear, we ensure lightning-fast shipping so you can jump into action as soon as possible.</p>
            </div>
            <div className='p-4 rounded-3xl'>
                <RiSecurePaymentLine className='bold-32 mb-3 text-red-500'/>
                <h4 className='h4 capitalize'>Your safety is our priority</h4>
                <p>We use encrypted payment gateways to protect your transactions. Shop confidently with secure payment options and verified systems trusted by thousands of gamers.</p>
            </div>
        </div>
    </section>
  )
}

export default Features