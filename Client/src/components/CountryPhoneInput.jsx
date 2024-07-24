import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

const CountryPhoneInput = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [phone, setPhone] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        const countryOptions = response.data.map(country => ({
          value: country.cca2,
          label: country.name.common,
          phoneCode: country.idd.root + (country.idd.suffixes ? country.idd.suffixes[0] : ''),
          flag: country.flags.svg,
        }));
        setCountries(countryOptions);
      })
      .catch(error => {
        console.error('Error fetching country data:', error);
      });
  }, []);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const customStyles = {
    control: (provided) => ({
      ...provided,
      border:"none",
         outline:"none",
         boxShadow:"none",
    //   width:"40px",
      height: '10px',
    padding:"0"
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: '40px',
      width: '40px',
    //   display:"none",
    //   border:"1px solid red",
      borderRadius:"40px",
      padding: '0 6px',
    }),
    input: (provided) => ({
      ...provided,
      margin: '0px',
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: '40px',
    //   border:"1px solid blue",

    }),
  };


  return (
    <div >
      <label htmlFor="">Phone Number</label>
     <div className='flex border rounded w-[95%] p-0'>
     <Select
        options={countries}
        styles={customStyles}
        onChange={handleCountryChange}
        formatOptionLabel={(country) => (
          <div>
            <img src={country.flag} style={{ width: '40px' , outline:"0"}}/>
          </div>
        )}
      />
      <input
        type="tel"
        value={selectedCountry ? `${selectedCountry.phoneCode} ${phone}` : phone}
        onChange={handlePhoneChange}
        placeholder="Phone Number"
        style={{outline:"0"}}
      />
     </div>
    </div>
  );
};

export default CountryPhoneInput;