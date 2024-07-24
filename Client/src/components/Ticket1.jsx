import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Counter/CounterSlice'
import { Link } from 'react-router-dom'
import CountryPhoneInput from './CountryPhoneInput'

const Ticket1 = () => {
 const [openModal1, setOpenModal1] = useState(false)
 const [openModal2, setOpenModal2] = useState(false)
 const [openModal3, setOpenModal3] = useState(false)
 const [errorMessage, setErrorMessage] = useState('')
 const [inputText, setInputText] = useState('');
 const [inputText2, setInputText2] = useState('');
 const [time, setTime] = useState(new Date());
 const [date, setDate] = useState(new Date());
 const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()

    const handleInputChange1 = (event) => {
      setInputText(event.target.value);
    };
    const handleInputChange2 = (event) => {
      setInputText2(event.target.value);
    };

    useEffect(() => {
      const timerID = setInterval(() => {
        setTime(new Date());
        setDate(new Date())
      }, 1000);
  
      // Cleanup interval on component unmount
      return () => {
        clearInterval(timerID);
      };
    }, []);
        const kolade = ()=>{
          if (inputText==""|| inputText2 == ""){
            setOpenModal3(openModal3)
            setErrorMessage('Please fill all the fields')
            setTimeout(() => {
              setErrorMessage("")
              
            }, 3000);
          }
          else{
            setOpenModal3(!openModal3)
          }
        } 

  return (
    <>
    <div>
         {!openModal1 &&  <button data-modal-target="static-modal" data-modal-toggle="static-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={()=>setOpenModal1(!openModal1)}>
    Select Tickets 1
  </button> 
 }
        {/* // <!-- Main modal --> */}
{/* Page one */}
<div id="static-modal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className={`${!openModal1?'hidden': '' } mx-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[rgb(245,245,245)]`}>
    <div className="relative py-3 w-full mx-auto max-w-xl">
        {/* <!-- Modal content --> */}
        <div className="relative  rounded-lg ">
            {/* <!-- Modal header --> */}
           <div className='flex'>
      <div>
      <div className="flex items-center justify-between  border-b rounded-t dark:border-gray-600"></div>
      <div className='flex bg-white'>
      <div >
            <h2 className='text-3xl h-[80px] p-5 '>Select Tickets</h2>
        </div>
       
      </div>
        <div className='flex justify-between bg-[rgb(245,245,245)] '>
            <h2 className='text-medium h-[60px] pt-8 pl-5 font-medium'>Ticket types</h2>
            <h2 className='text-medium h-[60px] pr-12  pt-8 pl-5  font-medium'>Quantity</h2>
        </div>
        <div className='h-[120px] flex gap-12 bg-white'>
            <div className='bg-[green] w-[20px]'></div>
            <div>
                <h2 className='text-2xl pt-4'>Standard Tickets</h2>
                <p className='text-xl pt-4'>200.00</p>
            </div>
            <div className='text-2xl pt-5 pl-28'>
                <button onClick={()=>{(count > 1) && dispatch(decrement())}} className='border rounded-full  m-3 p-1 text-center   h-[40px] w-[40px]'>-</button>
        {count}
        <button onClick={()=>dispatch(increment())} className='border rounded-full p-1 m-3 h-[40px] w-[40px]  text-center'>+</button>
        </div>
        </div>
       <div className='mt-28 shadow-top-xl mx-auto block text-center bg-white p-4'>
       <div >
          <span className='mx-4 text-xl'><b>Qty:</b><small className='text-green-500 text-xl'>{count}</small></span>
          <span className='ml-4 text-xl'><b>Total:</b><small className='text-green-500 text-xl'>#{parseFloat(200*(count))}</small></span>
          
        </div>
          <button className='bg-[#2B293D] p-3 w-[90%] mx-5 rounded text-white text-lg mt-6' data-modal-target="static-modal" data-modal-toggle="static-modal" type="button" onClick={()=>setOpenModal2(!openModal2)}>Proceed </button>
        
       </div>
      </div>
        <div>
        <button onClick={()=>setOpenModal1(!openModal1)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                    <svg class="w-7 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    
                </button>
        </div>
           </div>
       
        </div>
        </div>
        </div>
        {/* Page two */}
        <div id="static-modal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className={`${!openModal2?'hidden': '' } mx-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center md:inset-0  max-h-full bg-[rgb(245,245,245)]`}>
    <div className="relative py-6 w-full mx-auto max-w-xl">
        {/* <!-- Modal content --> */}
        <div className="relative bg-[rgb(245,245,245)] rounded-lg ">
            {/* <!-- Modal header --> */}
           <div className='flex'>
      <div>
      <div className="flex items-center justify-between  border-b rounded-t dark:border-gray-600"></div>
      <div className='flex bg-white'>
      <div >
            <h2 className='text-3xl h-[60px] p-3 '>Attendee Details</h2>
        </div>
       
      </div>
        <div className='bg-[rgb(245,245,245)] '>
           <div className='flex gap-20 pl-2 pt-3 px-3 text-sm text-grey-500'>
           <p>Sounds of Christmas {date.getFullYear()}</p>
           <p>{time.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
           </div>
            <h2 className='text-sm text-]
            \] h-[40px] pt-3 pl-5 font-medium'>Standard Tickets, Tickets #1</h2>
        </div>
        
        <div className='px-8 py-4 border-t-blue-800  bg-[rgb(245,245,245)] border-t-4' >
           <div className='bg-white p-4 rounded'>
           <div>
                <label htmlFor="" className='block text-sm'>Full Name</label>
                <input type="text" className='w-[95%] p-2 m-[0.5] rounded text-sm border-grey-500 border outline-none' onChange={handleInputChange1}  id='userName' placeholder='Enter Attendees full name'/>
            </div>
            <div>
            <label htmlFor="" className='block text-sm'>E-mail</label>
            <input type="text" className='w-[95%] p-2 m-[0.5] rounded text-sm border-grey-500 border outline-none' id='userEmail' placeholder='Enter your e-mail'  onChange={handleInputChange2}  />
            </div>
          <CountryPhoneInput/>
           </div>
           <p className='text-center text-sm mt-3'>I accept the <Link className='text-blue-400'>Terms of Service </Link>and have read the <Link  className='text-blue-400'>Privacy Policy </Link></p>
        </div>
       <div className='shadow mx-auto block text-center bg-white p-3'>
       <div >
          <span className='mx-4 text-xl'><b>Qty:</b><small className='text-green-500 text-xl'>{count}</small></span>
          <span className='ml-4 text-xl'><b>Total:</b><small className='text-green-500 text-xl'>#{parseFloat(200*(count))}</small></span>
          
        </div>
          <button className='bg-[#2B293D] p-2 w-[90%] mx-5 rounded text-white text-lg mt-6' data-modal-target="static-modal" data-modal-toggle="static-modal" type="button" onClick={kolade}>Continue to checkout </button>
        
       </div>
       { <p className='text-red-500 border-2 rounded text-center font-bold'>{errorMessage}</p>}
      </div>
        <div>
        <button onClick={()=>setOpenModal2(!openModal2)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                    <svg className="w-7 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    
                </button>
        </div>
           </div>
       
        </div>
        </div>
        </div>
        {/* Page Three */}
        <div id="static-modal" data-modal-backdrop="static" tabIndex="-1" aria-hidden="true" className={`${!openModal3?'hidden': '' } mx-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[rgb(245,245,245)]`}>
    <div className="relative p-10 w-full mx-auto max-w-xl">
        {/* <!-- Modal content --> */}
        <div className="relative bg-[rgb(245,245,245)] rounded-lg ">
            {/* <!-- Modal header --> */}
           <div className='flex'>
      <div>
      <div className="flex items-center justify-between  border-b rounded-t dark:border-gray-600"></div>
      <div className='flex bg-white'>
      <div >
            <h2 className='text-3xl h-[80px] p-5 '>Order Summary</h2>
        </div>
       
      </div>
      <div className='bg-white h-[90px] mx-auto w-[70%] mt-12 mb-20 relative shadow border-t-4 border-t-blue-500'>
        <p className='text-center text-blue-500 mt-2 font-medium'>Standard Ticket</p>
            <p className='ml-6  text-[12px] font-medium mt-2'>{inputText}</p>
            <div className='flex justify-between text-[12px] mt-1 ml-4'>
                <p className='ml-2'>{inputText2}</p>
                <p className='bg-blue-500 px-3 text-white'>#{parseFloat(200*(count))}</p>
            </div>
         <div className='bg-[rgb(245,245,245)] h-[30px] w-[30px] rounded-full absolute top-[25px] left-[-15px]'></div>
         <div className='bg-[rgb(245,245,245)] h-[30px] w-[30px] rounded-full absolute top-[25px] right-[-15px]'></div>
      </div>

       <div className=' shadow-top-xl mx-auto block text-center bg-white p-4 border-t-4'>
        <div className=' border-b-2 mb-3 w-[70%] mx-auto text-gray-500'>
        <p className='mx-4 text-lg'><small>SubTotal:</small><small className='ml-20'>#{parseFloat(200*(count))}</small></p>
          <p className='ml-4 text-lg'><small>Tax:</small><small className='ml-24'>11.80</small></p>
        </div>
          <span className='mx-4 text-xl'><b>Order Total:</b><small className='text-green-500 font-bold text-xl ml-[40px]'>#{parseFloat(200*(count))+ 11.8}</small></span>
          <button className='bg-[#2B293D] p-3 w-[90%] mx-5 rounded text-white text-lg mt-5'>Pay Now </button>
        
       </div>
      </div>
        <div>
        <button onClick={()=>setOpenModal3(!openModal3)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="static-modal">
                    <svg className="w-7 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    
                </button>
        </div>
           </div>
       
        </div>
        </div>
        </div>
        </div>
    
    </>
  )
}

export default Ticket1