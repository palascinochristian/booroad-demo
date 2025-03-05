export default function Footer() {
  return (
    <footer className="bg-amber-50 text-gray-800 p-8 shadow-lg ">
      <div className="container mx-auto text-center">
        {/* Sezione principale */}
        <div className="mb-4">
          <h2 className="text-2xl sm:text-3xl font-semibold">BooRoad - Demo</h2>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            &copy; 2025 BooRoad. All rights reserved.
          </p>
        </div>

        {/* Sezione Crediti */}
        <div className="flex justify-center gap-8 mt-6 text-sm text-gray-500">
          <p>
            Developed with ❤️ by <span className="font-semibold">Group 5</span>
          </p>
          <p>Inspired by travels & adventures</p>
        </div>

        {/* Icone dei social o contatti */}
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook text-2xl text-gray-600 hover:text-gray-800"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter text-2xl text-gray-600 hover:text-gray-800"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram text-2xl text-gray-600 hover:text-gray-800"></i>
          </a>
        </div>

        {/* Dettagli viaggio */}
        <div className="mt-8 text-gray-600 text-sm">
          <p>
            Explore the world. Embrace new experiences. Go beyond the horizon.
          </p>
        </div>
      </div>
    </footer>
  );
}
