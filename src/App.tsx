import Toast from "./components/Toast";
import { openDB } from "./utils/indexedDB";
import toastContext from "./context/Toast";
import Loading from "./components/Loading";
import { ToastState } from "./types/dataType";
import AnimateBG from "./components/AnimateBG";
import Header from "./components/header/Header";
import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Add = lazy(() => import("./pages/Add"));
const Index = lazy(() => import("./pages/Index"));

function App() {
  const [toast, setToast] = useState<ToastState>({
    isVisible: false,
    text: "",
    color: "bg-blue-600",
  });
  useEffect(() => {
    openDB();
  }, []);

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
