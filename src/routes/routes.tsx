import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Finances from "../pages/Finances";
import Settings from "../pages/Settings";

export const getRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/finances" element={<Finances />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};
