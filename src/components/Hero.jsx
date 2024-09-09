import React from 'react'
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row'>
        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
          <div className='text-[#414141]'>
             <div className='flex items-center gpa-2'>
                
                <p className='font-medium text-sm md:text-base'> OUR BESTSELLERS</p>
             </div>
             <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
             <Link to="/collection" className='flex items-center mt-5'>
                    <button
                  type="submit"
                  className="bg-black text-white text-xs px-10 py-4"
                >
                  SHOP NOW
                </button>             
             </Link>
            </div> 
        </div>
        <img className='w-full sm:w-1/2' src={ assets.hero_img} alt="" />      
    </div>
  )
}

export default Hero
