import React, { useContext } from "react";
import UseFriends from "../../Component/useFriends";
import { Timedecontext } from "../../context/Timedecontext";
import { useState } from "react";
import call from '../../assets/call.png'
import text from '../../assets/text.png'
import video from '../../assets/video.png'
const Timelines = () => {

  const { timelines, setTimelines } = useContext(Timedecontext);
  const [filter, setFilter] = useState('')
  const filterData = filter === '' || filter==='all' ? timelines : timelines.filter(item => item.type === filter);

  
  return (
    <div className="w-8/12 mx-auto mt-10 space-y-4">
      <h2 className="text-3xl font-bold">Timeline</h2>
      <div>
        <fieldset className="fieldset">
          <select
            onChange={(e) => setFilter(e.target.value)}
            defaultValue="Pick a browser"
            className="select"
          >
            <option value='all'>Filter Timeline</option>
            <option value="call">Call</option>
            <option value="text">Text</option>
            <option value="video">Video</option>
          </select>
        </fieldset>
      </div>
      {/* {filterData.map((item) => (
        <div key={item.id}>
          <div className="card bg-base-100 w-full shadow-sm flex flex-row items-center gap-5 p-3">
            <img
              className="w-7"
              src={
                item.type === "call"
                  ? call
                  :  item.type === "text"
                    ? text
                    : video
              }
              alt={item.type}
            />
            <p className="font-bold ">
              <span>
                {item.type === "call" && "Call"}
                {item.type === "text" && "Text"}
                {item.type === "video" && "Video"}
              </span>{" "}
              with{" "}
              <span className="text-[#64748b] font-normal">{item.name}</span>
              <br />
              <span className="text-[#64748b] font-normal">
                {new Date().toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </p>
          </div>
        </div>
      ))} */}
      {timelines.length === 0 ? (
        <h2 className="text-center text-5xl font-bold">
          No timelines available
        </h2>
      ) : (
        filterData.map((info, id) => {
          return (
            <div key={id}>
              <div>
                <div className="card bg-base-100 w-full shadow-sm flex flex-row items-center gap-5 p-3">
                  <img
                    className="w-7"
                    src={
                      info.type === "call"
                        ? call
                        : info.type === "text"
                          ? text
                          : video
                    }
                    alt={info.type}
                  />
                  <p className="font-bold ">
                    <span>
                      {info.type === "call" && "Call"}
                      {info.type === "text" && "Text"}
                      {info.type === "video" && "Video"}
                    </span>{" "}
                    with{" "}
                    <span className="text-[#64748b] font-normal">
                      {info.name}
                    </span>
                    <br />
                    <span className="text-[#64748b] font-normal">
                      {new Date().toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Timelines;
