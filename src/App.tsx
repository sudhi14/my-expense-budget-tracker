import Login from "./pages/Login/index.tsx";
import MainLayout from "./pages/MainLayout/index.tsx";
import { Container } from "@mui/material";
import { getRoutes } from "./routes/routes.tsx";

function App() {
  return <>{getRoutes()}</>;
}

export default App;
