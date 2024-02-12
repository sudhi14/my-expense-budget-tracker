import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Finances from "../pages/Finances";
import Settings from "../pages/Settings";
import Home from "../pages/Home";

export const getRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="finances" element={<Finances />} />
        <Route path="settings" element={<Settings />} />
      </Route>
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
};
