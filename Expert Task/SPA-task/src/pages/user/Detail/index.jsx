import React from 'react'
import { BiCheckSquare } from 'react-icons/bi'
import { CiShare2 } from 'react-icons/ci'
import { FaRegHeart, FaStar } from 'react-icons/fa'
import { PiGreaterThanLight } from 'react-icons/pi'
import Detailimg from "../../../assets/images/card1img.webp"
import CalenderBox from '../../../components/calender'

const Detail = () => {
  return (
    <div className='grid place-items-center'>
<main className='w-[90%]'>
    <div className='flex  flex-wrap items-center gap-2 px-4 py-2'>
        <a href="/" className='text-gray-500'>Home</a>
        <span className='text-sm'><PiGreaterThanLight /></span>
        <p>Cabin in Latvia</p>
    </div>
    <div className=' flex flex-wrap items-center justify-between lg:gap-0 gap-7 mb-3'>
        <h1 className='text-4xl font-bold text-black mb-3.5'>Dream Getaway Awaits You Here</h1>
        <div className='  flex items-center gap-4  h-fit px-3 '>
            <span className='text-xl rounded-md hover:bg-gray-200 px-3 py-2 border-black/30 border'><CiShare2 /></span>
            <span className='text-xl rounded-md hover:bg-gray-200 px-3 py-2  border-black/30 border'><FaRegHeart /></span>
        </div>
    </div>
    <div className='w-full'>
<img src={Detailimg} className='w-full '/>
    </div>
    <section className='grid  grid-cols-1 lg:grid-cols-[4fr_2fr]'>
        <div>
    <div className='flex  flex-wrap items-center gap-2 px-3'>
        <h3>Cabin in Latvia</h3>
        <span><FaStar /></span>
        <span>5.0 (2) reviews</span>
        
    </div>

    <h2>1 bedroom ·1 bath ·1 guest ·1 bed</h2>
    <div className=''>
<div>

</div>
<div>
    <p>Hosted by Satyam</p>
    <p>Superhost · 2 years hosting</p>
</div>

    </div>
    <div>
       <h2>Description</h2> 
       <p>Glamping Tuscan Style in an Aframe Cabin Tent, nestled in a beautiful olive orchard. AC, heat, Queen Bed, TV, Wi-Fi and an amazing view. Close to Weeki Wachee River State Park, mermaids, manatees, Chassahwitzka River and on the SC Bike Path. Kayaks available for rivers. Bathhouse, fire pit, Kitchenette, fresh eggs. Relax & enjoy fresh country air. No pets please. Ducks, hens and roosters roam the grounds. We have a Pot Cake Rescue from Bimini, Retriever and Pom dog. The space is inspiring and relaxing. Enjoy the beauty of the orchard. Spring trees are in blossom and harvested in Fall....</p>
       <a href="">Show more</a>
    </div>
<section>
    <h1>What this place offers</h1>
    <div className='flex  flex-wrap items-center justify-between '>
       <ul className='md:w-[40%] w-full content'>
        <li><span><BiCheckSquare/></span><span >unlimited cloud storage</span></li>
        <li><span><BiCheckSquare/></span><span>self-lighting fire pit</span></li>
        <li><span><BiCheckSquare/></span><span>hot shower (sun required)</span></li>
        <li><span><BiCheckSquare/></span><span>natural heating (bring a coat)</span></li>
        <li><span><BiCheckSquare/></span><span>hammock (two trees and a rope)</span></li>
        <li><span><BiCheckSquare/></span><span>cool box (hole in the ground)</span></li>
       </ul>
       <ul className='content md:w-[40%] w-full'>
        <li><span><BiCheckSquare/></span><span>VIP parking for squirrels</span></li>
        <li><span><BiCheckSquare/></span><span>outdoor furniture (tree stumps)</span></li>
        <li><span><BiCheckSquare/></span><span>kitchenette (aka fire pit)</span></li>
        <li><span><BiCheckSquare/></span><span>air conditioning (breeze from the west)</span></li>
        <li><span><BiCheckSquare/></span><span>water supply (river a mile away)</span></li>
        <li><span><BiCheckSquare/></span><span>water supply (river a mile away)</span></li>
       </ul>

    </div>
</section>
</div>
<div className='px-5 lg:pt-3 pt-10'>
<CalenderBox/>
</div>
</section>
</main>
    </div>
   
  )
}

export default Detail