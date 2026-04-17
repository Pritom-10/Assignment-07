import React from 'react';
import { useLoaderData } from "react-router";
import { useNavigation } from "react-router-dom";
const useFriends = () => {
  const data = useLoaderData();
  
   const navigation = useNavigation();
  return { data, navigation };
};

export default useFriends;