import React from 'react';

const Cards = () => {
  return (
    <div className="flex justify-center items-center gap-12 w-11/12 mx-auto mt-12">
      <div className="card bg-base-100 w-full shadow-sm">
        <p className="text-center p-8">
          10 <br /> Total Friend
        </p>
      </div>
      <div className="card bg-base-100 w-full shadow-sm">
        <p className="text-center p-8">
          03 <br /> On Truck
        </p>
      </div>
      <div className="card bg-base-100 w-full shadow-sm">
        <p className="text-center p-8">
          6 <br /> Need Attention
        </p>
      </div>
      <div className="card bg-base-100 w-full shadow-sm">
        <p className="text-center p-8">
          12 <br /> Interactions This Month
        </p>
      </div>
    </div>
  );
};

export default Cards;