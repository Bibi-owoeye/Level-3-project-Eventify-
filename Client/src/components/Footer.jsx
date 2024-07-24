import React from 'react'
import googleplay from '../assets/googleplay.png'
import appleicon from '../assets/appleicon.png'

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">Company Info</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Careers</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">FAQs</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Terms of Service</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Help</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Account Support</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Listing Events</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Event Ticketing</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Ticket Purchase Terms & Conditions</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Categories</h3>
            <ul>

                
              <li className="mb-2"><a href="#" className="hover:underline">Concerts & Gigs</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Festivals & Lifestyle</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Business & Networking</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Food & Drinks</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Performing Arts</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Sports & Outdoors</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Exhibitions</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Workshops, Conferences & Classes</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:underline">Facebook</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Instagram</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">Twitter</a></li>
              <li className="mb-2"><a href="#" className="hover:underline">YouTube</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Download The App</h3>
            <div className="flex flex-col space-y-2">
              <a href="#" className="flex items-center justify-center p-2 bg-gray-800 rounded-md hover:bg-gray-700">
                <img src={googleplay} />
                <span className="ml-2 text-white">Get it on Google Play</span>
              </a>
              <a href="#" className="flex items-center justify-center p-2 bg-gray-800 rounded-md hover:bg-gray-700">
                <img src={appleicon} alt="App Store" className="h-8 w-8" />
                <span className="ml-2 text-white">Download on the App Store</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 border-t border-gray-700 pt-4">
          ©2023 Eventify. All rights reserved.
        </div>
      </div>
    </footer>


    </>
  )
}

export default Footer