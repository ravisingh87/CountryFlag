import React, { useEffect, useState } from 'react';
import { CountryDivStyle, CountryDivWrapper, CountryHeading, CountryImg } from './CountryStyle';
import axios from 'axios';

const Country = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    try {
      const res = await axios(' https://xcountries-backend.azurewebsites.net/all');
      setData(res.data);
    } catch (error) {
      console.error('Error fetching error.');
    }
  };
  console.log('data', data);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <CountryDivWrapper>
      {/* {data.map((items) => items.map((item) => item.name))} */}
      {data.map((item, idx) => (
        <CountryDivStyle key={`${item.name}_${idx}`}>
          <CountryImg src={item.flag} alt={item.name} />
          <CountryHeading>{item.name}</CountryHeading>
        </CountryDivStyle>
      ))}
    </CountryDivWrapper>
  );
};

export default Country;
