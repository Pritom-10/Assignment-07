

import { useParams } from 'react-router';
import useFriends from '../Component/useFriends';
import snooze from '../assets/bellsimplez.png'
import del from '../assets/del.png'
import archive from '../assets/archive.png'
import call from '../assets/call.png'
import text from '../assets/text.png'
import video from '../assets/video.png'
import { useContext } from 'react';
import { Timedecontext } from '../context/Timedecontext';
import toast from "react-hot-toast";
const Friend_detailes = () => {
  const {id} = useParams();
  const { data, navigation } = useFriends();
    if (navigation.state === "loading") {
      return (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      );
    }
  const expectedFriend = data.find((friend) => String(friend.id) === id);
 
  const {timelines,setTimelines}=useContext(Timedecontext);
  const handleCall = (type) => {
    const newTimeline = {
      id: Date.now(),
      name: expectedFriend.name,
      type: type,
    };
    setTimelines([...timelines, newTimeline]);
    if (type === 'call') {
      toast(
        <div className="flex gap-3 bg-[#244d3f]">
          <img className="w-5 h-5" src={call} alt="call" />
          <span>Called {expectedFriend.name}</span>
        </div>,   
      );
    }
    if (type === 'text') {
      toast(
        <div className='flex gap-3'>
          <img className='w-5 h-5' src={text} alt="text" />
          <span>Message {expectedFriend.name}</span>
        </div>
      );
    }
    if (type === 'video') {
      toast(
        <div className="flex gap-3">
          <img className="w-5 h-5" src={video} alt="video" />
          <span>Vedio {expectedFriend.name}</span>
        </div>,
      );
    }
  }
  
  return (
    <div className="w-11/12 mx-auto mt-12 grid grid-cols-1 items-center justify-center gap-6 lg:grid-cols-2">
      <div className="flex flex-col justify-center gap-3">
        <div className=" mt-6">
          <div key={id}>
            <div className="card bg-base-100 w-full shadow-sm">
              <figure className="px-10 pt-10">
                <img
                  src={expectedFriend.picture}
                  alt="Shoes"
                  className="rounded-full"
                />
              </figure>
              <div className="card-body items-center text-center ">
                <h2 className="card-title">{expectedFriend.name}</h2>
                <span
                  className={`p-2 rounded-full text-sm font-medium ${
                    expectedFriend.status === "overdue"
                      ? "bg-[#ef4444] text-white"
                      : expectedFriend.status === "almost due"
                        ? "bg-[#efad44] text-white"
                        : "bg-[#244d3f] text-white"
                  }`}
                >
                  {expectedFriend.status}
                </span>

                <div className="space-y-7">
                  <div className="flex justify-center items-center gap-5">
                    <p className="bg-[#cbfadb] p-2 rounded-full">
                      {expectedFriend.tags[0]}
                    </p>
                    <p className="bg-[#cbfadb] p-2 rounded-full">
                      {expectedFriend.tags[1]}
                    </p>
                  </div>
                </div>
                <p className="text-[#64748b]">"{expectedFriend.bio}"</p>
                <p className="text-[#64748b]">{expectedFriend.email}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-sm text-center">
          <div className="btn flex justify-center gap-2 items-center">
            <img src={snooze} alt="Snooze" />
            <span> Snooze 2 Weeks</span>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-sm text-center">
          <div className="btn flex flex-wrap items-center gap-2">
            <img src={archive} alt="Archive" />
            <p>Archive</p>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-sm text-center">
          <div className="btn flex flex-wrap items-center gap-2">
            <img src={del} alt="Delete" />
            <p> Delete</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex justify-center items-center gap-1 md:gap-6 lg:gap-12">
          <div className="card bg-base-100 w-68 shadow-sm">
            <p className="text-center p-3 md:p-5 lg:p-8">
              <span className="text-3xl">
                {expectedFriend.days_since_contact}
              </span>{" "}
              <br /> Days Since Contact
            </p>
          </div>
          <div className="card bg-base-100 w-68 shadow-sm">
            <p className="text-center p-3 md:p-5 lg:p-8">
              <span className="text-3xl">{expectedFriend.goal}</span> <br />{" "}
              Goal(Days)
            </p>
          </div>
          <div className="card bg-base-100 w-68 shadow-sm">
            <p className="text-center p-3 md:p-5 lg:p-8">
              <span className="text-2xl"> {expectedFriend.next_due_date}</span>{" "}
              <br /> Next Due
            </p>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-sm mt-4">
          <div className="flex justify-between p-8">
            <div className="spacre-y-4">
              <p className="font-medium">RelationShip Goal</p>
              <p className="text-[#64748b]">
                Connect every{" "}
                <span className="text-black font-bold">
                  {expectedFriend.goal} days
                </span>
              </p>
            </div>
            <div>
              <button className="btn">Edit</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 w-full shadow-sm mt-4 p-8">
          <h3 className="mb-2 text-2xl">Quick Check-In</h3>
          <div className="flex gap-2 md:gap-3 lg:gap-5">
            <div className="card bg-[#e9e9e9] w-1/3 shadow-sm">
              <div
                onClick={() => handleCall("call")}
                className="btn text-center p-10"
              >
                <img src={call} alt="" />
                <p>Call</p>
              </div>
            </div>
            <div className="card bg-[#e9e9e9] w-1/3 shadow-sm">
              <div
                onClick={() => handleCall("text")}
                className="btn text-center p-10"
              >
                <img src={text} alt="" />
                <p>Text</p>
              </div>
            </div>
            <div className="card bg-[#e9e9e9] w-1/3 shadow-sm">
              <div
                onClick={() => handleCall("video")}
                className="btn text-center p-10"
              >
                <img src={video} alt="" />
                <p>Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friend_detailes;