import React, { useState } from "react";
import { useParams } from "react-router";
import Accordion from "../components/Accordion";
import trips from "../Data/trips";
import SearchBar from "../components/SearchBar";

export default function TripPage() {
  const [member, setMember] = useState("");
  const { id } = useParams();
  const trip = trips[id - 1] || {};

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* HERO SECTION */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-bold mb-2">{trip.destination}</h1>
        <h2 className="text-2xl font-bold mb-2">
          {`${trip.groupLeader?.firstName}
          ${trip.groupLeader?.lastName}`}
        </h2>
        <p className="text-2xl-gray-600 mb-4">
          {`Data Inizio: ${trip.startDate}
          Data Fine: ${trip.endDate}`}
        </p>
        <p className="text-gray-600 mb-4">{trip.description}</p>
        <img
          src="https://picsum.photos/1200/400"
          alt="Trip"
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      {/* SEZIONE PARTECIPANTI */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 flex justify-between items-center">
          Partecipanti
        </h2>
        <SearchBar setter={setMember} />
        <Accordion member={member} trip={trip.participants || []} />
      </div>
    </div>
  );
}
