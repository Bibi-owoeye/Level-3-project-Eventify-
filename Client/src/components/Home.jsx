import React, { useState } from 'react'
import entertainment from '../assets/entertainment.png'
import edubus from '../assets/edubus.png'
import culture from '../assets/culture.png'
import techinnova from '../assets/techinnova.png'
import sports from '../assets/sports.png'
import travel from '../assets/travel.png'
import yellowbackground from  '../assets/yellowbackground.png'
import Vector from '../assets/Vector.png'
import eventbackground from '../assets/eventbackground.png'
import calendar from '../assets/calendar.png'
import Footer from '../components/Footer.jsx'
import Nav from './Nav.jsx'
import CardDetails from './CardDetails.jsx'


// import bgimage from '../assets/bgimage.jpg'



const Home = () => {

  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const trendingTopics = [
    'Exhibitions', 'Art', 'Workshop', 'Business', 'Training', 'Festival',
    'Adventures', 'Kids', 'Music', 'Entertainment'
  ];


  return (
    <>
    
    <div className='h-[50vh] bg-custom-image bg-cover bg-center' style={{ backgroundImage:"url('/bgimage.jpg')" }}>
    <div className="ml-[50px]">
        <p className="text-white text-[25px] pt-28 font-bold">Dont miss out</p>
        <p className="text-white text-[25px]  font-bold">Explore the vibrant events happening locally and globally</p>
    </div>
    <div className="max-w-4xl mx-auto relative">
      <div className="flex items-center bg-white rounded-t-lg shadow-md">
        <div className="flex-grow flex items-center pl-4 pr-2">
          <svg className="h-5 w-5 text-gray-400 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
          <input
            type="text"
            placeholder="Search Events, Categories, Location,..."
            className="w-full py-3 bg-transparent outline-none text-gray-600 placeholder-gray-400"
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
          />
        </div>
        <div className="relative flex items-center border-l border-gray-300 pl-4 pr-2">
          <svg className="h-5 w-5 text-gray-400 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <button
            className="text-gray-600 mr-2 focus:outline-none"
            onClick={() => setIsLocationOpen(!isLocationOpen)}
          >
            Mumbai
          </button>
          <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          {isLocationOpen && (
            <div className="absolute top-full right-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Detect Current Location
              </button>
              <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                Online
              </button>
            </div>
          )}
        </div>
      </div>
      {isSearchFocused && (
        <div className="bg-white rounded-b-lg shadow-md p-4">
          <h3 className="text-lg font-semibold mb-2">Trending Topics</h3>
          <div className="flex flex-wrap gap-2">
            {trendingTopics.map((topic, index) => (
              <span key={index} className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                {topic}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
    </div>

    <div className='container mx-auto p-4'>
        <h2 className='font-bold text-[30px]'>Explore Categories</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
          <div className=''>
            <img src={entertainment} alt="" className='w-32'/>
            <p className='font-semibold'>Entertainment</p>
          </div>

          <div>
            <img src={edubus} alt="" className='w-32' />
            <p className='font-semibold'>Education & Business</p>
          </div>

          <div>
            <img src={culture} alt="" className='w-32' />
            <p className='font-semibold'>Culture & Arts</p>
          </div>
        

        <div>
            <img src={sports} alt="" className='w-32'/>
            <p className='font-semibold'>Sports & Fitness</p>
          </div>

          <div>
            <img src={techinnova} alt="" className='w-32' />
            <p className='font-semibold'>Technology and Innovation</p>
          </div>

          <div>
            <img src={travel} alt="" className='w-32' />
            <p className='font-semibold'>Travel and Adventure</p>
          </div>
        </div>
        
    </div>
    <CardDetails/>

    <div className=''>
      <div className='h-[200px] pt-12 bg-cover bg-center' style={{ backgroundImage: `url(${yellowbackground})` }}>
        <p className='text-center font-bold text-[26px]'>Events specially curated for you</p>
        <p className='text-center text-[18px]'>Get event suggestions tailored to your interests! Don't let your favorite events slip away.</p>
        <button className="mt-4 w-46 inline-block mx-auto flex item-center bg-[#413f53] px-4 py-2 bg-blue-500 text-yellow-300 font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
      Get Started
      <img className='w-6 pl-2 mt-2' src={Vector} alt="" />   
    </button>
      </div>
    </div>

    <div className='h-[207px] bg-cover bg-center' style={{backgroundImage: `url(${eventbackground})`}}>
      <div className='pt-[64px] ms-[195px]'>
        <h3 className='text-[#ffe047] text-2xl'>Create an event with Eventify</h3>
        <p className='text-[#ffe047] text-[17px] pt-2'>Got a show, event, activity or a great experience? Partner with us & get listed on Eventify</p>
      </div>

          <div className='bg-[#ffe047] flex rounded border border-solid w-[230px] h-[50px] ms-[900px] mt-[-50px] ps-7'>
            <div className=''>
              <img className='h-[30px] mt-[9px]' src={calendar} alt="" />
            </div>
            <div className='ms-2 mt-[9px] text-xl font-medium'>Create Event</div>
          </div>
    </div>
    
    <div className='bg-white h-[40px]'></div>

    <div className="bg-[#ffe047] p-6 flex justify-center items-center">
      <div className="max-w-3xl flex flex-col md:flex-row items-center w-full">
        <div className="flex-grow mb-4 md:mb-0 md:mr-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Subscribe to our Newsletter</h2>
          <p className="text-gray-800">
            Receive our weekly newsletter & updates with new events from your favourite organizers & venues.
          </p>
        </div>
        <div className="flex md:w-auto">
          <input
            type="email"
            placeholder="Enter your e-mail address"
            className="flex-grow p-3 rounded-l-lg border border-gray-300"
          />
          <button className="bg-gray-900 text-yellow-400 p-3 rounded-r-lg font-semibold">
            Subscribe
          </button>
        </div>
      </div>
    </div>
<Footer/>
    </>
  )
}

export default Home