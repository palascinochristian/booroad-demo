export default function CardForm({ isOverlay, setOverlay }) {
  if (!isOverlay) return null;
  const close = () => {
    setOverlay(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setOverlay(false);
  };
  return (
    <>
      <div className="fixed inset-0 bg-black/75 bg-50 z-40 flex items-center justify-center shadow-md ">
        <div className="absolute  font-medium m-auto max-w-4xl bg-white shadow-md rounded-md px-4 p-5 mb-2 ">
          <button
            onClick={close}
            className="absolute top-0 right-2 hover:cursor-pointer text-lg text-gray-700"
          >
            <i className="fa-regular fa-circle-xmark"></i>
          </button>
          <form action="" className="mx-auto " onSubmit={handleSubmit}>
            <div className="">
              <h1 className="p-2">
                <input
                  type="text"
                  placeholder="Destinazione"
                  className=" mr-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                />
                <input
                  type="text"
                  placeholder="Data di inizio"
                  className="px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                />
              </h1>
              <h1 className="p-2">
                <input
                  type="text"
                  placeholder="Data di fine"
                  className="mr-2 px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                />
                <input
                  type="text"
                  placeholder="Capogruppo"
                  className="px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                />
              </h1>
              <h1 className="p-2">
                <input
                  type="text"
                  placeholder="immagine"
                  className="pl-3 border-y border-l border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                />
                <button className=" border-y border-r pr-2 border-gray-300 rounded-r-md hover:cursor-pointer">
                  ...
                </button>
              </h1>
              <h1 className="p-2">
                <textarea
                  rows={5}
                  minLength={5}
                  placeholder="Descrizione"
                  className="w-full px-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                ></textarea>
              </h1>
              <button
                type="submit"
                className="hover:cursor-pointer px-4 ml-2 mx-auto bg-gray-100 text-gray-700 py-1 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition-colors duration-300 active:bg-gray-300"
              >
                Aggiungi
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
