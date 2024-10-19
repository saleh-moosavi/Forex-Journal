import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Index from "./pages/Index";
import Add from "./pages/Add";

function App() {
  return (
    <div className="h-screen overflow-y-scroll overflow-x-hidden bg-gradient-to-tr from-stone-800 to-gray-700">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/add" element={<Add />} />
          <Route path="/add/:id" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
