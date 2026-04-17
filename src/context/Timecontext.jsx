import { Timedecontext } from './Timedecontext';
import React, { useState } from 'react';
const Timecontext = ({ children }) => {
  const [timelines, setTimelines] = useState([]); 
  const data = {
    timelines,
    setTimelines
  };
  return <Timedecontext.Provider value={data}>{children}</Timedecontext.Provider>
};

export default Timecontext;