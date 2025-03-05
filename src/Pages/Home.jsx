import trips from "../Data/trips";
import TripCard from "../Components/TripCard";
import SearchBarTrips from "../components/SearchBarTrips";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState(" ");
  const checkSearch = (elem) => {
    if (search.trim() == "") return true;
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
    <>
      <div>
        <SearchBarTrips setSearch={setSearch} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {trips.map((trip) =>
            !checkSearch(trip) ? null : (
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
            )
          )}
        </div>
      </div>
    </>
  );
}
