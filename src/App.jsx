import { Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import HomePage from "./pages/HomePage";
import EvidenceVault from "./pages/EvidenceVault";
import EvidenceDetailWrapper from "./pages/EvidenceDetailWrapper";
import BuyerRequests from "./pages/BuyerRequests";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow pt-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vault" element={<EvidenceVault />} />
          <Route path="/vault/:id" element={<EvidenceDetailWrapper />} />
          <Route path="/requests" element={<BuyerRequests />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
