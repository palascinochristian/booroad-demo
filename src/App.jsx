import { BrowserRouter, Routes, Route } from "react-router";
//Layout
import DefaultLayout from "./layouts/DefaultLayout";
//Pages
import Home from "./pages/Home";
import TripPage from "./pages/TripPage";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/trips/:id" element={<TripPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
