import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DefaultLayout() {
  return (
    <>
      <Header />
      <main className="flex-grow flex justify-around bg-[url(https://img.freepik.com/premium-vector/hand-drawn-seamless-pattern-with-travel-icons-summer-vacation-doodle-sketch-traveling-holidays-relaxation_1154070-1334.jpg)]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
