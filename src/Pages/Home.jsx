import trips from "../Data/trips";
import TripCard from "../Components/TripCard";
import SearchBarTrips from "../components/SearchBarTrips";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");

  const checkSearch = (elem) => {
    if (search.trim() === "") return true;
    const fullName = `${elem.groupLeader.firstName} ${elem.groupLeader.lastName}`;
    const reversedName = `${elem.groupLeader.lastName} ${elem.groupLeader.firstName}`;
    const leaderCheck =
      fullName.toLowerCase().includes(search.toLowerCase().trim()) ||
      reversedName.toLowerCase().includes(search.toLowerCase().trim());
    const tripCheck = elem.destination
      .toLowerCase()
      .includes(search.toLowerCase().trim());
    return leaderCheck || tripCheck;
  };

  return (
    <div className="p-4">
      <SearchBarTrips setSearch={setSearch} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card per aggiungere un nuovo viaggio */}
        <div className="bg-white shadow-lg rounded-2xl w-75 h-95 border border-gray-200 transform transition duration-300 hover:scale-105 mx-auto">
          <div className="bg-neutral-100 h-95 rounded-2xl static drop-shadow-[0_5px_5px_rgba(0,0,0,0.3)]">
            <div className="bg-neutral-300 h-full p-2 rounded-2xl flex">
              <div className="bg-neutral-100 w-60 h-3/4 rounded-full mx-auto mt-4 flex items-center justify-center">
                <span className="text-[150px]">
                  <i className="fa-solid fa-plus text-neutral-500 hover:text-neutral-700 transition-all duration-300 hover:scale-110"></i>
                </span>
              </div>
            </div>
          </div>
        </div>

        {trips.filter(checkSearch).map((trip) => (
          <div className="col" key={trip.id}>
            <TripCard
              destination={trip.destination}
              destination_image={trip.destination_image}
              startDate={trip.startDate}
              endDate={trip.endDate}
              groupLeader={trip.groupLeader}
              link={`trips/${trip.id}`}
              participants={trip.participants}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
