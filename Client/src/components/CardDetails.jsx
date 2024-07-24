import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios';
// import img from '../assets/react.svg';

const CardDetails = () => {
    const [data, setData] = useState([])
    const [date, setDate] = useState(new Date())
    
    useEffect(() => {
     
      axios.get('https://jsonplaceholder.typicode.com/photos?_limit=10')
        .then(response => {
          setData(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, [])
  return (
    <div>
            <div className="App p-4">
      <div className="grid  gap-4 shadow grid-cols-4 p-16">
        {data.map((item , index)=>(

            <Card
          key={index}
          title={item.title}
          image={item.thumbnailUrl}
          date = {date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric' })}
        //   content="This is some example content for the card. It can be any text you like."
        //   footer={<button className="btn">Click Me</button>}
        //   customClasses="hover:shadow-lg transition-shadow duration-300"
        />
        ))
    } 
      </div>
    </div>
    </div>
  )
}

export default CardDetails