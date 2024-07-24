import { Link } from "react-router-dom"


const ChangeEmail = () => {
  return (
    <div className="flex">
      <div className=" bg-[#EEEEEE] w-[22%]">
        <div className=" ps-10 pt-10 mb-10">
            <h3 className=" text-[#2D2C3C] font-bold text-2xl">Account Settings</h3>
        </div>
        <div className="flex flex-col text-[#2D2C3C] font-semibold space-y-1">
            <Link to='/nav2/accountInfo' className="ps-10 py-2">Account Info</Link>
            <Link to='/nav2/changeEmail' className="bg-[#ffffff] ps-10 py-2">Change Email</Link>
            <Link to='/nav2/password' className="ps-10 py-2">Password</Link>
        </div>
      </div>
      <div className="bg-[#FFFFFF] px-5 w-[78%] h-[100vh]">
      <div className="mt-16 mx-9">
            <h4 className="text-[#2D2C3C] font-bold text-[25px] border-b border-gray-400 ps-2 pb-2">Change Email</h4>
        </div>
        <div className="flex flex-row p-1 mt-10">
            <label htmlFor="" className="font-semibold font-[inter sans-serif] text-[15px] text-end pt-3 w-[132px]">Current Email:</label>
            <p className="ms-4 p-3 font-semibold font-[inter sans-serif] text-[15px] text-end pt-3">teeboy@someserver.com</p>
        </div>
        <div className="flex flex-row p-1">
            <label htmlFor="" className="font-semibold font-[inter sans-serif] text-[15px] text-end pt-3 w-[132px]">New Email:</label>
            <input type="email" id="newEmail" name="newEmail" placeholder="Enter new email" className="ms-4 p-3 border w-[450px] rounded-lg"/>
        </div>
        <div className="flex flex-row p-1">
            <label htmlFor="" className="font-semibold font-[inter sans-serif] text-[15px] text-end pt-3 w-[132px]">Confirm Email:</label>
            <input type="email" id="confirmEmail" name="confirmEmail" placeholder="Enter confirm email" className="ms-4 p-3 border w-[450px] rounded-lg"/>
        </div>
        <div className='ms-[155px] my-10'>
            <button className='border w-[250px] p-4 rounded-lg bg-[#302c55] text-white font-semibold font-[inter sans-serif] text-[15px]'>Save New Email</button>
        </div>
      </div>
    </div>
  )
}

export default ChangeEmail
