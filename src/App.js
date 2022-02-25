import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./views/landing/LandingPage";
import ListingPage from "./views/listing/ListingPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route index element={<LandingPage />} />
        <Route path="listing" element={<ListingPage />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
