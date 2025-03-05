import { useState } from "react";

export default function ParticipantFormButton({ setOverlay }) {
  const handleClick = () => {
    setOverlay(true);
  };
  return (
    <>
      <div
        onClick={handleClick}
        className="font-medium m-auto max-w-md bg-neutral-100 shadow-md rounded-md px-4 py-3 mb-2 cursor-pointer"
      >
        <h1 className="text-center">AGGIUNGI PARTECIPANTE</h1>
        <h1 className="text-center">
          <i className="fa-solid fa-plus text-lg"></i>
        </h1>
      </div>
    </>
  );
}
