import { openDB } from "./utils/indexedDB";
import Loading from "./components/Loading";
import AnimateBG from "./components/AnimateBG";
import Header from "./components/header/Header";
import { lazy, Suspense, useEffect } from "react";
import { DataProvider } from "./context/DataContext";
import { ToastProvider } from "./context/ToastContext";
import { PopUpProvider } from "./context/PopUpContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Add = lazy(() => import("./pages/Add"));
const Index = lazy(() => import("./pages/Index"));
const Profile = lazy(() => import("./pages/Profile"));
const Toast = lazy(() => import("./components/Toast"));
const PopUp = lazy(() => import("./components/PopUp"));

export default function App() {
  useEffect(() => {
    openDB();
  }, []);

  return (
    <ToastProvider>
      <DataProvider>
        <PopUpProvider>
          <div className="h-screen w-screen overflow-x-hidden">
            <Toast />
            <PopUp />
            <AnimateBG />
            <BrowserRouter>
              <Header />
              <Suspense fallback={<Loading />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/add" element={<Add />} />
                  <Route path="/add/:id" element={<Add />} />
                  <Route path="/profile" element={<Profile />} />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </div>
        </PopUpProvider>
      </DataProvider>
    </ToastProvider>
  );
}
