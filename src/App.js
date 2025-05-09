import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";

import { Toaster } from "react-hot-toast";
import Home from "./pages/HomePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
