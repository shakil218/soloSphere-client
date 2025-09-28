// import React, { useEffect, useState } from 'react';
import Carousal from '../components/Carousal';
import CategoryTabs from '../components/CategoryTabs';

const Home = () => {
  // const [jobs,setJobs]=useState([]);
  // useEffect(()=>{
  //   fetch('http://localhost:5000/jobs')
  //   .then(res=>res.json())
  //   .then(data=> setJobs(data))
  // },[])
  return (
    <div>
      <Carousal></Carousal>
      <CategoryTabs></CategoryTabs>
    </div>
  );
};

export default Home;
