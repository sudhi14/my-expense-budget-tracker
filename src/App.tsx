import { Container } from "react-bootstrap";
import MainLayout from "./pages/MainLayout/index.tsx";

function App() {
  return (
    <Container fluid className="global-container">
      <MainLayout />
    </Container>
  );
}

export default App;
