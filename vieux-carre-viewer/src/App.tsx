import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Dataset from "@/pages/Dataset";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="dataset/:id" element={<Dataset />} />
      </Routes>
    </BrowserRouter>
  );
}
