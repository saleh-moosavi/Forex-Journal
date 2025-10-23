import Toast from "./components/Toast";
import Header from "./components/Header";
import toastContext from "./context/Toast";
import { ToastState } from "./types/dataType";
import AnimateBG from "./components/AnimateBG";
import { lazy, Suspense, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

const Add = lazy(() => import("./pages/Add"));
const Index = lazy(() => import("./pages/Index"));

function App() {
  const [toast, setToast] = useState<ToastState>({
    isVisible: false,
    text: "",
    color: "bg-blue-600",
  });
  return (
    <toastContext.Provider
      value={{
        toast,
        setToast,
      }}
    >
      <div className="h-screen w-screen overflow-x-hidden">
        <Toast />
        <AnimateBG />
        <BrowserRouter>
          <Header />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/add" element={<Add />} />
              <Route path="/add/:id" element={<Add />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </toastContext.Provider>
  );
}

export default App;
