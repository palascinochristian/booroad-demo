import { Link } from "react-router";

export default function Header() {
  return (
    <header className="bg-amber-50 p-4 shadow-lg sticky top-0 z-10 text-center flex justify-center">
      <Link to={"/"}>
        <img className="w-80 sm:w-64" src="./booroadlogo.png" alt="logo" />
      </Link>
    </header>
  );
}
