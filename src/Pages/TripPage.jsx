import React, { useState } from "react";
import { useParams } from "react-router";
import Accordion from "../components/Accordion";
import trips from "../Data/trips";
import SearchBar from "../components/SearchBar";
import ParticipantForm from "../components/ParticipantForm";
import ParticipantFormButton from "../components/ParticipantFormButton";

export default function TripPage() {
  const [member, setMember] = useState("");
  const [isOverlay, setOverlay] = useState(false);
  const { id } = useParams();
  const trip = trips[id - 1] || {};

  return (
    <>
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
            src={trip.destination_image}
            alt="Trip"
            className="w-full h-64 object-cover rounded-lg object-center"
          />
        </div>

        {/* SEZIONE PARTECIPANTI */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-semibold mb-4 flex justify-between items-center">
              Partecipanti
            </h2>
            <SearchBar setter={setMember} />
          </div>
          <Accordion member={member} trip={trip.participants || []} />
          <ParticipantFormButton
            setOverlay={setOverlay}
          ></ParticipantFormButton>
          <ParticipantForm
            isOverlay={isOverlay}
            setOverlay={setOverlay}
          ></ParticipantForm>
        </div>
      </div>
    </>
  );
}
