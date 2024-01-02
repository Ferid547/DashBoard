import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import TaxiPark from "./pages/TaxiPark";
import SignIn from "./pages/SignIn";
import NewTaxiPark from "./pages/NewTaxiPark";
import TestAbout from "./pages/TestAbout";
import TestHesab from "./pages/TestHesab";
import AddInvoys from "./pages/AddInvoys";
import UpdateTaxiPark from "./pages/UpdateTaxiPark";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<TestAbout />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/taxiPark" element={<TaxiPark />} />
          <Route path="/" element={<SignIn />} />
          <Route path="/addInvoys" element={<AddInvoys />} />
          <Route path="/hesab" element={<TestHesab />} />
          <Route path="/newTaxiPark" element={<NewTaxiPark />} />
          <Route path="/updateTaxiPark/:id" element={<UpdateTaxiPark />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
