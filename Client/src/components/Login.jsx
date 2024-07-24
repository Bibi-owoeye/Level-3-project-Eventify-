import React from "react";
import img1 from "../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className="flex overflow-x-hidden">
      <section className="w-[40%] bg-[#2b293d] h-[37rem] pt-5">
        <img src={img1} className="w-44 ps-7" alt="" onClick={() =>navigate('/')}/>
        <h2 className="mt-24 text-[#FFFFFF] ps-14 font-bold leading-[3rem] text-4xl">
          Discover tailored <br /> events. <br /> Sign up for personalized{" "}
          <br /> recommendations <br /> today
        </h2>
      </section>
      <section className="w-[60%] flex justify-center bg-[#2b293d] h-[37rem] ">
        <div className=" w-[100%] bg-white flex items-center flex-col pt-14 rounded-l-3xl">
        <div className=" w-[70%] ">
          <h1 className="text-[#2b293d] font-Montserrat font-bold text-4xl leading-10 mb-7 ">
            Create account
          </h1>
          <div className="flex items-center justify-start">
            <button className=" py-3 px-8 gap-2 flex items-center border border-[#c5c5c5] rounded text-center text-[#64636f]">
              <img src={google} alt="" /> <span>Sign up with Google</span>
            </button>
            <button className=" py-3 px-8 gap-2 flex items-center  border border-[#c5c5c5] rounded text-center text-[#64636f] ml-10">
              <img src={facebook} alt="" /><span>Sign up with Facebook</span>
            </button>
          </div>
          <div className="flex ">
            <div className="w-[238px]  mt-12 border-t-2 border-gray-300 my-4"></div>
            <span className="mt-9 ml-2 text-[#64636f]">OR</span>
            <div className="w-[242px] ms-2 mt-12 border-t-2 border-gray-300 my-4"></div>
          </div>
          <form>
            <ul className="mt-6">
              {/* <li className="flex flex-col mt-6">
                <label htmlFor="fullname">Full Name</label>
                <input
                  className="border py-3 px-2 mt-1 outline-none rounded-[.4rem] "
                  type="text"
                  placeholder="Enter your full name"
                  name="fullname"
                />
              </li> */}
              <li className="flex flex-col mt-6">
                <label htmlFor="email">Email</label>
                <input
                  className="border py-3 px-2 mt-1 outline-none rounded-[.4rem] "
                  type="email"
                  placeholder="Enter your e-mail"
                  name="email"
                />
              </li>
              <li className="flex flex-col mt-6">
                <label htmlFor="password">Password</label>
                <input
                  className="border py-3 px-2 mt-1 outline-none rounded-[.4rem] "
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                />
              </li>
            </ul>
            <button className="mt-6 bg-[#2b293d] text-white w-[100%] py-3 rounded-[.4rem] ">
              Create Account
            </button>
          </form>
          <p className="text-[#676767] mt-3">
            Don't have an account? {" "}
            <Link className="text-[#474654]" to="/register">
              Sign up
            </Link>
          </p>
      </div>
        </div>
      </section>
    </div>
  );
};

export default Login;




























// import React from "react";
// import img1 from "../assets/Logo.png";
// import Product from "./Product";
// import { Link } from "react-router-dom";
// import google from "../assets/google.png";
// import facebook from "../assets/facebook.png";

// const Register = () => {
//   return (
//     <div className="flex  w-screen h-screen">
//       <section className="w-[40%] bg-[#2b293d] h-[120%] pt-5">
//         <img src={img1} className="w-44 ps-7" alt="" />
//         <h2 className="mt-24 text-[#FFFFFF] ps-14 font-bold leading-[3rem] text-4xl">
//           Discover tailored <br /> events. <br /> Sign up for personalized{" "}
//           <br /> recommendations <br /> today
//         </h2>
//       </section>
//       <section className="w-3/5 flex justify-center mt-14 rounded-l-3xl">
//         <div className="w-[70%] ">
//           <h1 className="text-[#2b293d] font-Montserrat font-bold text-4xl leading-10 mb-7 ">
//             Create account
//           </h1>
//           <div className="flex items-center justify-start">
//             <button className=" py-3 px-8 gap-2 flex items-center border border-[#c5c5c5] rounded text-center text-[#64636f]">
//               <img src={google} alt="" /> <span>Sign up with Google</span>
//             </button>
//             <button className=" py-3 px-8 gap-2 flex items-center  border border-[#c5c5c5] rounded text-center text-[#64636f] ml-10">
//               <img src={facebook} alt="" /><span>Sign up with Facebook</span>
//             </button>
//           </div>
//           <div className="flex ">
//             <div className="w-[238px]  mt-12 border-t-2 border-gray-300 my-4"></div>
//             <span className="mt-9 ml-2 text-[#64636f]">OR</span>
//             <div className="w-[242px] ms-2 mt-12 border-t-2 border-gray-300 my-4"></div>
//           </div>
//           <form>
//             <ul className="mt-6">
//               <li className="flex flex-col mt-6">
//                 <label htmlFor="fullname">Full Name</label>
//                 <input
//                   className="border py-3 px-2 mt-1 outline-none rounded-[.4rem] "
//                   type="text"
//                   placeholder="Enter your full name"
//                   name="fullname"
//                 />
//               </li>
//               <li className="flex flex-col mt-6">
//                 <label htmlFor="email">Email</label>
//                 <input
//                   className="border py-3 px-2 mt-1 outline-none rounded-[.4rem] "
//                   type="email"
//                   placeholder="Enter your e-mail"
//                   name="email"
//                 />
//               </li>
//               <li className="flex flex-col mt-6">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   className="border py-3 px-2 mt-1 outline-none rounded-[.4rem] "
//                   type="password"
//                   placeholder="Enter your password"
//                   name="password"
//                 />
//               </li>
//             </ul>
//             <button className="mt-6 bg-[#2b293d] text-white w-[100%] py-3 rounded-[.4rem] ">
//               Create Account
//             </button>
//           </form>
//           <p className="text-[#676767] mt-3">
//             Already have an account?{" "}
//             <Link className="text-[#474654]" to="/login">
//               Login
//             </Link>
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Register;



































// export default Register;

// import React from "react";
// import img1 from "../assets/Logo.png";
// import Product from "./Product";
// import { Link } from "react-router-dom";

// const Register = () => {
//   return (
//     <div className="bg-[#2b293d] w-screen h-screen flex">
//       <section className="w-[40%] bg-[#2b293d] h-[120%] pt-5">
//         <img src={img1} className="w-44 ps-7" alt="" />
//         <h2 className="mt-24 text-[#FFFFFF] ps-14 font-bold leading-[3rem] text-4xl">
//           Discover tailored <br /> events. <br /> Sign up for personalized{" "}
//           <br /> recommendations <br /> today
//         </h2>
//       </section>
//       <section className="bg-[#FFFFFF] w-3/4 rounded-l-3xl flex flex-col item-center justify-center ">
//         <div className="w-[70%]">
//           {" "}
//           <h1 className="text-[#2b293d] font-Montserrat font-bold text-4xl leading-10 mb-7 ">
//             Create account
//           </h1>{" "}
//           <div>
//             {" "}
//             <button className=" py-3 px-11 border border-[#c5c5c5] rounded text-center text-[#64636f]">
//               Sign up with Google
//             </button>{" "}
//             <button className=" py-3 px-11 border border-[#c5c5c5] rounded text-center text-[#64636f] ml-10">
//               Sign up with Facebook
//             </button>{" "}
//           </div>{" "}
//           <div className="flex ">
//             {" "}
//             <div className="w-[238px]  mt-12 border-t-2 border-gray-300 my-4"></div>
//             <span className="mt-9 ml-2 text-[#64636f]">OR</span>{" "}
//             <div className="w-[242px] ms-2 mt-12 border-t-2 border-gray-300 my-4"></div>{" "}
//           </div>{" "}
//           <form>
//             {" "}
//             <ul className="mt-6">
//               {" "}
//               <li className="flex flex-col mt-6">
//                 <label htmlFor="fullname">Full Name</label>{" "}
//                 <input
//                   className="border py-3 px-2 mt-1 outline-none rounded-[.4rem] "
//                   type="text"
//                   placeholder="Enter your full name"
//                   name="fullname"
//                 />
//               </li>
//               <li className="flex flex-col mt-6">
//                 <label htmlFor="email">Email</label>
//                 <input
//                   className="border py-3 px-2 mt-1 outline-none rounded-[.4rem] "
//                   type="email"
//                   placeholder="Enter your e-mail"
//                   name="email"
//                 />
//               </li>
//               <li className="flex flex-col mt-6">
//                 <label htmlFor="password">Password</label>
//                 <input
//                   className="border py-3 px-2 mt-1 outline-none rounded-[.4rem] "
//                   type="password"
//                   placeholder="Enter your password"
//                   name="password"
//                 />
//               </li>
//             </ul>
//             <button className="mt-6 bg-[#2b293d] text-white w-[100%] py-3 rounded-[.4rem] ">
//               Create Account
//             </button>
//           </form>
//           <p className="text-[#676767] mt-3">
//             Already have an account?{" "}
//             <Link className="text-[#474654]" to="/login">
//               Login
//             </Link>
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Register;
