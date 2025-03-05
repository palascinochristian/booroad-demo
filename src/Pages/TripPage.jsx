import React, { useState } from "react";
import { useParams } from "react-router";
import Accordion from "../components/Accordion";
import trips from "../Data/trips";
import SearchBar from "../components/SearchBar";
import ParticipantForm from "../components/ParticipantForm";
import ParticipantFormButton from "../components/ParticipantFormButton";
import { Link } from "react-router";

export default function TripPage() {
  const [member, setMember] = useState("");
  const [isOverlay, setOverlay] = useState(false);
  const { id } = useParams();
  const trip = trips[id - 1] || {};

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* HERO SECTION */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <Link to="/">
          <i className="fa-solid fa-arrow-left text-2xl mb-2"></i>
        </Link>
        <h1 className="text-3xl font-bold mb-2 text-center sm:text-left">
          {trip.destination}
        </h1>

        <h2 className="text-xl font-bold mb-2 flex items-center justify-center sm:justify-start">
          <i className="fa-solid fa-crown text-yellow-500 mr-2"></i>
          {`${trip.groupLeader?.firstName} ${trip.groupLeader?.lastName}`}
        </h2>

        <div className="flex flex-col sm:flex-row sm:justify-between text-gray-600 mb-4">
          <p className="flex items-center">
            <i className="fa-solid fa-calendar-alt text-gray-500 mr-2"></i>
            {`Data Inizio: ${trip.startDate}`}
          </p>
          <p className="flex items-center">
            <i className="fa-solid fa-calendar-alt text-gray-500 mr-2"></i>
            {`Data Fine: ${trip.endDate}`}
          </p>
        </div>

        <p className="text-gray-600 mb-4 text-center sm:text-left">
          {trip.description}
        </p>
        <img
          src={trip.destination_image}
          alt="Trip"
          className="w-full h-64 object-cover rounded-lg object-center"
        />
      </div>

      {/* SEZIONE PARTECIPANTI */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold mb-4 sm:mb-0">Partecipanti</h2>
          <SearchBar setter={setMember} />
        </div>
        <Accordion member={member} trip={trip.participants || []} />
        <ParticipantFormButton setOverlay={setOverlay} />
        <ParticipantForm isOverlay={isOverlay} setOverlay={setOverlay} />
      </div>
    </div>
  );
}
