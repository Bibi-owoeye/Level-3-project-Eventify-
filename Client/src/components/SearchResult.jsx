import React, { useState } from 'react'

const SearchResult = () => {

    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isLocationOpen, setIsLocationOpen] = useState(false);

    const trendingTopics = [
    'Exhibitions', 'Art', 'Workshop', 'Business', 'Training', 'Festival',
    'Adventures', 'Kids', 'Music', 'Entertainment'
  ];


  return (
    <>
    <div className='h-[50vh] bg-custom-image bg-cover bg-center' style={{ backgroundColor: "#373547" }}>
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


    <div className='container'>

        <div className='sidebar w-[20%] ps-10'>
            <div className='mt-20 border-0 border-r border-dark-400'>

            <h2 className='font-bold'>Filters</h2>

            <h6 className='mr-2'>Price</h6>
            <div>
                <input type="checkbox" name="" id="" className='mr-2'/>
                <label htmlFor="">Free</label>
            </div>

            <div>
                <input type="checkbox" name="" id="" className='mr-2'/>
                <label htmlFor="">Paid</label>
            </div>
            <hr className='ms-4 me-3'/>

            <h6 className='mr-2'>Date</h6>
            <div>
                <input type="checkbox" name="" id="" className='mr-2'/>
                <label htmlFor="">Today</label>
            </div>

            <div>
                <input type="checkbox" name="" id="" className='mr-2'/>
                <label htmlFor="">Tomorrow</label>
            </div>

            <div>
                <input type="checkbox" name="" id="" className='mr-2'/>
                <label htmlFor="">This Week</label>
            </div>

            <div>
                <input type="checkbox" name="" id="" className='mr-2'/>
                <label htmlFor="">This Weekend</label>
            </div>
            <div>
                <input type="checkbox" name="" id="" className='mr-2'/>
                <label htmlFor="">Pick a Date</label>
            </div>
            <hr className='mx-3' />

            <h6 className='font-bold'>Category</h6>
            <div>
                <input type="checkbox" name="" id="" className='mr-2'/>
                <label htmlFor="">Adventure Travel</label>
            </div>

            <div>
                <input type="checkbox" name="" id="" className='mr-2'/>
                <label htmlFor="">Art Exhibitions</label>
            </div>

            <div>
                <input type="checkbox" name="" id="" className='mr-2'/>
                <label htmlFor="">Auctions and Fund raisers</label>
            </div>

            <div>
                <input type="checkbox" name="" id="" className='mr-2'/>
                <label htmlFor="">Beer Festivals</label>
            </div>
            <div>
                <input type="checkbox" name="" id="" className='mr-2'/>
                <label htmlFor="">Benefit Concerts</label>
            </div>
            <hr className='ms-4 me-3'/>
            
            <h6 className='font-bold'>Format</h6>
            <div className='
            '>
                <input type="checkbox" name="" id="" className='mr-2'/>
                <label htmlFor="">Community Engagement</label>
            </div>

            <div>
                <input type="checkbox" name="" id="" className='mr-2'/>
                <label htmlFor="">Concerts and Performances</label>
            </div>

            <div>
                <input type="checkbox" name="" id="" className='mr-2'/>
                <label htmlFor="">Conferences</label>
            </div>

            <div>
                <input type="checkbox" name="" id="" className='mr-2'/>
                <label htmlFor="">Experiental Events</label>
            </div>
            <div classname="">
                <input type="checkbox" name="" id="" className='mr-2'/>
                <label htmlFor="">Festivals and Fairs</label>
            </div>

            </div>
        </div>

        <div className='mainpage'>

        </div>


    </div>
    
    
    
    </>
  )
}

export default SearchResult