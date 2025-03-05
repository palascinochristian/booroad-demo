import trips from "../Data/trips";
import TripCard from "../Components/TripCard";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {trips.map((trip) => (
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
  );
}
