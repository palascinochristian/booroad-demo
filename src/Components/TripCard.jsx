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
      <div className="bg-white shadow-lg rounded-2xl w-75 border border-gray-200 transform transition duration-300 hover:scale-105 mx-auto">
        <div className>
          <h2 className=" bg-stone-700 rounded-t-2xl text-xl font-semibold text-gray-50 p-2 mb-0 z-10 relative shadow-[0px_5px_10px_rgba(0,0,0,0.4)]">
            {destination}
          </h2>
        </div>
        <img
          className="h-50 w-80 object-cover object-center rounded-b-2xl"
          src={destination_image}
          alt={destination}
        />
        <div className="text-sm text-gray-700 space-y-2 p-4">
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
