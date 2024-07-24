import React from 'react';

const Card = ({ date,title, image }) => {
  return (
    <div className=''> 
      <div className="card grid shadow ">
      <img src={image} alt="" className='mx-auto p-2' />
      <div className = 'flex'>
      <div className='date w-[30%] ms-4'>{date}</div>
      <div className='w-[70%]'>
        <h2 className='font-bold'>{title}</h2>
        <p>The lord is good</p>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Card
