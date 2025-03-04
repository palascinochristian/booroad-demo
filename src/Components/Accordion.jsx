import AccordionComponent from "./AccordionComponent";

export default function Accordion({ trip, member }) {
  return (
    <div className="m-auto max-w-6xl">
      <div className="mt-2">
        {trip.map((elem, index) => (
          <AccordionComponent key={index} partecipant={elem} name={member} />
        ))}
      </div>
    </div>
  );
}
