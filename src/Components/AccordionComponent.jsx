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
    <div className="m-auto max-w-6xl bg-neutral-100 shadow-md rounded-md px-4 py-3 mb-2">
      {/* HEADER ACCORDION */}
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex items-center gap-3">
          <img
            className="rounded-full border-2 border-white shadow-[0px_2px_5px_rgba(0,0,0,0.5)]"
            src={partecipant.avatar}
            alt=""
          />
          <h2 className="font-medium">{`${partecipant.lastName} ${partecipant.firstName}`}</h2>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-2">
          <button className="text-gray-500 hover:text-green-200 transition duration-200 text-xs">
            <i className="fa-solid fa-pencil-alt text-lg"></i>
          </button>
          <button className="text-gray-500 hover:text-red-500 transition duration-200 text-xs">
            <i className="fa-solid fa-trash text-lg"></i>
          </button>
          <div className="text-gray-500 transition-transform duration-200">
            {isActive ? (
              <i className="fa-solid fa-minus text-lg"></i>
            ) : (
              <i className="fa-solid fa-plus text-lg"></i>
            )}
          </div>
        </div>
      </div>

      {/* CONTENUTO NASCOSTO */}
      {isActive && (
        <div className="mt-3 border-t pt-2 text-sm">
          <div className="flex flex-col">
            <div className="flex items-center">
              <p className="text-gray-500 w-14">EMAIL:</p>
              <p className="font-medium">{partecipant.email}</p>
            </div>
            <div className="flex items-center mt-2">
              <p className="text-gray-500 w-14">CF:</p>
              <p className="font-medium">{partecipant.codiceFiscale}</p>
            </div>
            <div className="flex items-center mt-2">
              <p className="text-gray-500 w-14">Cell: </p>
              <p className="font-medium">{partecipant.phone}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
