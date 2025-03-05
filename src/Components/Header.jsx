import { Link } from "react-router";

export default function Header() {
  return (
    <header className="bg-white p-4 shadow-lg sticky top-0 z-10 text-center">
      <Link to={"/"}>
        <h1>BooRoad - Demo</h1>
      </Link>
    </header>
  );
}
