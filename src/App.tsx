import { lazy, Suspense } from "react";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnimateBG from "./components/AnimateBG";

const Add = lazy(() => import("./pages/Add"));
const Index = lazy(() => import("./pages/Index"));

function App() {
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <AnimateBG />
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
