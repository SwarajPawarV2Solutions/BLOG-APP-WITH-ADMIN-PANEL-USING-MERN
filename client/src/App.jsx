import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/page";
import MainLayout from "./layout/MainLayout";
import OtherLayout from "./layout/OtherLayout";
import Login from "./pages/Login/page";
import SignUp from "./pages/SignUp/page";
const App = () => {
  return (
    <div className="px-64">
      {/* padding from x axis is 64 */}
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>

          <Route element={<OtherLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
