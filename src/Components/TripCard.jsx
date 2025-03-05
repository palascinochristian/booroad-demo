import { Link } from "react-router";

export default function TripCard({
  destination,
  destination_image,
  startDate,
  endDate,
  groupLeader,
  link,
  participants,
}) {
  return (
    <Link to={link} className="block">
      <div className="bg-white shadow-lg rounded-2xl p-5 w-80 border border-gray-200 transform transition duration-300 hover:scale-105 mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {destination}
        </h2>
        <img
          className="rounded-xl h-50 w-80 object-cover object-center"
          src={destination_image}
          alt={destination}
        />
        <div className="text-sm text-gray-700 mt-3 space-y-2">
          <p className="font-semibold text-gray-600 flex items-center gap-2">
            <i className="fa-solid fa-calendar-alt text-gray-500"></i>
            Data Inizio:{" "}
            <span className="font-normal text-gray-800">{startDate}</span>
          </p>
          <p className="font-semibold text-gray-600 flex items-center gap-2">
            <i className="fa-solid fa-calendar-alt text-gray-500"></i>
            Data Fine:{" "}
            <span className="font-normal text-gray-800">{endDate}</span>
          </p>
          <p className="font-semibold text-gray-600 flex items-center gap-2">
            <i className="fa-solid fa-crown text-yellow-500"></i>
            Capogruppo:{" "}
            <span className="font-normal text-gray-800">
              {groupLeader
                ? `${groupLeader.firstName} ${groupLeader.lastName}`
                : "Nessuno"}
            </span>
          </p>
          <p className="font-semibold text-gray-600 flex items-center gap-2">
            <i className="fa-solid fa-users text-gray-500"></i>
            Partecipanti:{" "}
            <span className="font-normal text-gray-800">
              {participants?.length}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}
