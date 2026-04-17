import React from 'react';
import Banner from '../Component/Banner';
import Cards from '../Component/Cards';
import Friends from './Friends/Friends';
import { useLoaderData } from 'react-router';
const Homepage = () => {
  const { data } = useLoaderData();
  
  return (
    <div>
      <Banner />
      <Cards />
      <Friends/>
    </div>
  );
};

export default Homepage;