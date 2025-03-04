import trips from "../Data/trips";
import TripCard from "../Components/TripCard";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {trips.map((trip) => (
        <div className="col" key={trip.id}>
          <TripCard
            destination={trip.destination}
            startDate={trip.startDate}
            endDate={trip.endDate}
            groupLeader={trip.groupLeader}
            link={`trips/${trip.id}`}
          />
        </div>
      ))}
    </div>
  );
}
