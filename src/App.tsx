import { lazy, Suspense } from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Add = lazy(() => import("./pages/Add"));
const Index = lazy(() => import("./pages/Index"));

function App() {
  return (
    <div className="h-screen w-screen overflow-x-hidden bg-gradient-to-t from-[#330055] to-[#000022]">
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/add" element={<Add />} />
            <Route path="/add/:id" element={<Add />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
