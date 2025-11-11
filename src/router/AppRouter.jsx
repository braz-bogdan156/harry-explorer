import { Routes, Route, Navigate } from "react-router-dom";
import Characters from "../pages/Characters/Characters";
import CharacterDetails from "../pages/CharacterDetails/CharacterDetails";
import Spells from "../pages/Spells/Spells";
import Sidebar from "../components/Sidebar/Sidebar";
import "./layout.css";

export default function AppRouter() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/characters" replace />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterDetails />} />
          <Route path="/spells" element={<Spells />} />
        </Routes>
      </div>
    </div>
  );
}