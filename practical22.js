// Install: npm install axios chart.js react-chartjs-2
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

function Weather() {
  const [data,setData] = useState({labels:[], datasets:[]});
  
  useEffect(()=>{
    axios.get('https://api.openweathermap.org/data/2.5/onecall?lat=35&lon=139&appid=YOUR_API_KEY')
      .then(res=>{
        const labels = res.data.daily.map(d => new Date(d.dt*1000).toLocaleDateString());
        const temps = res.data.daily.map(d => d.temp.day);
        setData({labels, datasets:[{label:'Temp', data:temps, borderColor:'blue', fill:false}]});
      });
  },[]);
  
  return <Line data={data} />;
}

export default Weather;
