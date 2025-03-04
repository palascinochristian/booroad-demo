import { Link } from "react-router";

export default function TripCard({
  destination,
  startDate,
  endDate,
  groupLeader,
  link,
}) {
  return (
    <Link to={link} className="block">
      <div className="bg-white shadow-lg rounded-2xl p-5 w-80 border border-gray-200 transform transition duration-300 hover:scale-105">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {destination}
        </h2>
        <div className="text-sm text-gray-700">
          <p className="font-semibold text-gray-600">
            Data Inizio:{" "}
            <span className="font-normal text-gray-800">{startDate}</span>
          </p>
          <p className="font-semibold text-gray-600">
            Data Fine:{" "}
            <span className="font-normal text-gray-800">{endDate}</span>
          </p>
          <p className="font-semibold text-gray-600">
            Capogruppo:{" "}
            <span className="font-normal text-gray-800">
              {groupLeader?.firstName} {groupLeader?.lastName}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}
