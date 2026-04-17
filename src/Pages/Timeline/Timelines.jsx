import React, { useContext } from "react";
import UseFriends from "../../Component/useFriends";
import { Timedecontext } from "../../context/Timedecontext";
import call from '../../assets/call.png'
import text from '../../assets/text.png'
import video from '../../assets/video.png'
const Timelines = () => {
  // const { data, navigation } = UseFriends();
  // if (navigation.state === "loading") {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <span className="loading loading-spinner loading-lg"></span>
  //     </div>
  //   );
  // }
  const {timelines,setTimelines} = useContext(Timedecontext);
 
  
  return (
    <div className="w-8/12 mx-auto mt-10 space-y-4">
      <h2 className="text-3xl font-bold">Timeline</h2>
      {timelines.length===0? <h2 className="text-center text-5xl font-bold">No timelines available</h2> : timelines.map((info, id) => {
        return (
          <div key={id}>
            <div>
              <div className="card bg-base-100 w-full shadow-sm flex flex-row items-center gap-5 p-3">
                <img className="w-7" src={info.type==='call'? call : info.type==='text'? text : video} alt={info.type} />
                <p className="font-bold ">
                  <span>{info.type === 'call' && 'Call'}
                    {info.type === 'text' && 'Text'}
                    {info.type === 'video' && 'Video'}
                  </span> with <span className="text-[#64748b] font-normal">
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
      })}
    </div>
  );
};

export default Timelines;
