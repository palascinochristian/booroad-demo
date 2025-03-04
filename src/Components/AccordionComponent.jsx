import { useState, useEffect } from "react";

export default function AccordionComponent({ partecipant, name }) {
  const [isActive, setActive] = useState(false);
  const [show, setShow] = useState(true);

  const handleClick = () => setActive(!isActive);

  const checkSearch = () => {
    if (name.trim() === "") {
      setShow(true);
      return;
    }
    const fullName = `${partecipant.firstName} ${partecipant.lastName}`;
    const reversedName = `${partecipant.lastName} ${partecipant.firstName}`;
    setShow(
      fullName.toLowerCase().includes(name.toLowerCase().trim()) ||
        reversedName.toLowerCase().includes(name.toLowerCase().trim())
    );
  };

  useEffect(() => {
    checkSearch();
  }, [name, partecipant]);

  if (!show) return null;

  return (
    <div className="m-auto max-w-6xl bg-white shadow-md rounded-md px-4 py-3 mb-2">
      {/* HEADER ACCORDION */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex gap-3">
          <h1 className="font-medium">{partecipant.lastName}</h1>
          <h1 className="font-medium">{partecipant.firstName}</h1>
        </div>

        {/* Icona + e - */}
        <div className="text-gray-500 transition-transform duration-200">
          {isActive ? (
            <i className="fa-solid fa-minus text-lg"></i>
          ) : (
            <i className="fa-solid fa-plus text-lg"></i>
          )}
        </div>
      </div>

      {/* CONTENUTO NASCOSTO */}
      {isActive && (
        <div className="mt-3 border-t pt-2 text-sm">
          <div className="grid grid-cols-2 gap-2">
            <p className="text-gray-500 text-right">EMAIL:</p>
            <p className="font-medium">{partecipant.email}</p>

            <p className="text-gray-500 text-right">CF:</p>
            <p className="font-medium">{partecipant.codiceFiscale}</p>

            <p className="text-gray-500 text-right">Cell:</p>
            <p className="font-medium">+39 {partecipant.phone}</p>
          </div>
        </div>
      )}
    </div>
  );
}
