import UseFriends from "../../Component/useFriends";
import { Link } from "react-router-dom";
const Friends = () => {
  const { data, navigation } = UseFriends();

  if (navigation.state === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
 
    
  
  return (
    <div>
      <div className=" mx-auto w-11/12 mt-12">
        <hr className="mb-8 text-gray-200" />
        <h2 className="text-2xl font-medium">Your Friends</h2>
      </div>

      <div className="grid grid-cols-2 w-11/12 mx-auto mt-6 gap-5 lg:grid-cols-4 md:grid-cols-3">
        {data.map((friend, id) => {
          return (
            <Link to={`/friends/${friend.id}`} key={id}>
              <div className="card bg-base-100 w-full shadow-sm mx-auto">
                <figure className="px-10 pt-10">
                  <img
                    src={friend.picture}
                    alt="Shoes"
                    className="rounded-full"
                  />
                </figure>
                <div className="card-body items-center text-center ">
                  <h2 className="card-title">{friend.name}</h2>
                  <p>
                    <span className="text-[#64748b]">
                      {friend.days_since_contact}d ago
                    </span>
                  </p>
                  <div className="space-y-7">
                    <div className="flex justify-center items-center gap-5">
                      <p className="bg-[#cbfadb] p-2 rounded-full">
                        {friend.tags[0]}
                      </p>
                      <p className="bg-[#cbfadb] p-2 rounded-full">
                        {friend.tags[1]}
                      </p>
                    </div>
                    <span
                      className={`p-2 rounded-full text-sm font-medium ${
                        friend.status === "overdue"
                          ? "bg-[#ef4444] text-white"
                          : friend.status === "almost due"
                            ? "bg-[#efad44] text-white"
                            : "bg-[#244d3f] text-white"
                      }`}
                    >
                      {friend.status}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Friends;
