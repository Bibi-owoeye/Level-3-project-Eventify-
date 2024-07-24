import { useState } from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios'
import camera from '../assets/camera.png'

const AcctSettingInfo = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!image){
            alert('Please select an image to upload'); 
            return;
        }

        const formData = new FormData();
        formData.append('profilePicture', image);
        try{
            const response = await axios.post(url, formData, {
                headers: { 
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Image uploaded successfully:', response.data);
        } catch(err){
            console.log('Error uploading image', Error);
        }
    };

  return (
    <div>
    <form className="flex" onSubmit={handleSubmit}>
      <div className=" bg-[#EEEEEE] w-[22%]">
        <div className=" ps-10 pt-10 mb-10">
            <h3 className=" text-[#2D2C3C] font-bold text-2xl">Account Settings</h3>
        </div>
        <div className="flex flex-col text-[#2D2C3C] font-semibold space-y-1">
            <Link to='/nav2/accountInfo' className="bg-[#ffffff] ps-10 py-2">Account Info</Link>
            <Link to='/nav2/changeEmail' className="ps-10 py-2">Change Email</Link>
            <Link to='/nav2/password' className="ps-10 py-2">Password</Link>
        </div>
      </div>
      <div className="bg-[#FFFFFF] px-5 w-[78%]">
        <div className="mt-16 mx-9">
            <h4 className="text-[#2D2C3C] font-bold text-[25px] border-b border-gray-400 ps-2 pb-2">Account Information</h4>
        </div>
        <div className="ms-40 mt-10">
                <h6 className="font-semibold font-[inter sans-serif] text-[17px]">Profile Photo</h6>
            <div className='relative w-[150px] h-[150px] bg-gray-400 rounded-full overflow-hidden border-2 border-solid border-gray-300 mb-10 mt-5'>
                {preview ? (
                    <img src={preview} alt="profile preview" className='w-full h-full object-cover' />
                ) : (
                    <div className="flex items-center justify-center w-[100%] h-[100%] bg-[#f0f0f0] text-[#aaa] text-[18px] font-bold">Your Photo</div>
                )

                }
                <input type="file" accept="image/*" onChange={handleImageChange} className='flex relative bottom-[175px] p-[100px] items-center justify-center w-[100%] h-[100%] opacity-0'/>
            </div>
                <div className='absolute top-[305px] left-[570px] z-10 border rounded-full p-1 border-gray-400 bg-[#ffffff]'>
                <img src={camera} alt=""/>
                </div>
        </div>
        <div >
            <h6 className="ms-40 font-semibold font-[inter sans-serif] text-[17px]">Profile Information</h6>
            <div className="flex flex-row ms-12 p-1">
                <label htmlFor="" className="font-semibold font-[inter sans-serif] text-[15px] pt-3 w-[85px] text-end">First Name:</label>
                <input type="text" placeholder="Enter first name" className="ms-4 p-3 border w-[450px] rounded-lg"/>
            </div>
            <div className="flex flex-row ms-12 p-1">
                <label htmlFor="" className="font-semibold font-[inter sans-serif] text-[15px] w-[85px] text-end pt-3">Last Name:</label>
                <input type="text" placeholder="Enter last name" className="ms-4 p-3 border w-[450px] rounded-lg"/>
            </div>
            <div className="flex flex-row ms-12 p-1">
                <label htmlFor="" className="font-semibold font-[inter sans-serif] text-[15px] w-[85px] text-end pt-3">Website:</label>
                <input type="text" placeholder="Enter website" className="ms-4 p-3 border w-[450px] rounded-lg"/>
            </div>
            <div className="flex flex-row ms-12 p-1">
                <label htmlFor="" className="font-semibold font-[inter sans-serif] text-[15px] w-[85px] text-end pt-3">Company:</label>
                <input type="text" placeholder="Enter company name" className="ms-4 p-3 border w-[450px] rounded-lg"/>
            </div>
        </div>
        <div>
            <h2 className="ms-[155px] mt-10 font-semibold font-[inter sans-serif] text-[19px]">Contact Details</h2>
            <p className="ms-[155px]">These details are private and only used to contact you for ticketing or prizes</p>
            <div className="flex flex-row p-1">
                <label htmlFor="" className="font-semibold font-[inter sans-serif] text-[15px] text-end pt-3 w-[132px]">Phone Number:</label>
                <input type="number" placeholder="Enter phone number" className="ms-4 p-3 border w-[450px] rounded-lg"/>
            </div>
            <div className="flex flex-row ms-12 p-1">
                <label htmlFor="" className="font-semibold font-[inter sans-serif] text-[15px] pt-3 w-[85px] text-end">Address:</label>
                <input type="text" placeholder="Enter address" className="ms-4 p-3 border w-[450px] rounded-lg"/>
            </div>
            <div className="flex flex-row ms-12 p-1">
                <label htmlFor="" className="font-semibold font-[inter sans-serif] text-[15px] pt-3 w-[85px] text-end">City/Town:</label>
                <input type="text" placeholder="Enter city" className="ms-4 p-3 border w-[450px] rounded-lg"/>
            </div>
            <div className="flex flex-row ms-12 p-1">
                <label htmlFor="" className="font-semibold font-[inter sans-serif] text-[15px] pt-3 w-[85px] text-end">Country:</label>
                <input type="text" placeholder="Enter country" className="ms-4 p-3 border w-[450px] rounded-lg"/>
            </div>
            <div className="flex flex-row ms-12 p-1">
                <label htmlFor="" className="font-semibold font-[inter sans-serif] text-[15px] pt-3 w-[85px] text-end">Pincode:</label>
                <input type="number" placeholder="Enter pincode" className="ms-4 p-3 border w-[450px] rounded-lg"/>
            </div>
        </div>
        <div className='ms-[155px] my-10'>
            <button type='submit' className='border w-[250px] p-4 rounded-lg bg-[#302c55] text-white font-semibold font-[inter sans-serif] text-[15px]'>Save My Profile</button>
        </div>
      </div>
    </form>
    </div>
  )
}

export default AcctSettingInfo
