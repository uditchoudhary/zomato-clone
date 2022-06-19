import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlaceOrder from "./components/bookings/PlaceOrder";
import Details from "./components/details/Details";
import TopHeader from "./components/TopHeader";
import LandingPage from "./views/landing/LandingPage";
import ListingPage from "./views/listing/ListingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopHeader />
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="listing" element={<ListingPage />} />
          <Route path="/details/restaurant/:restId" element={<Details />} />
          <Route path="/placeOrder/:restName" element={<PlaceOrder />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
