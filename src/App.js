import Homepage from "./pages/Homepage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
