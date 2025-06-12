import {BrowserRouter,Routes,Route} from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import Profile from "./Pages/Profile";
import "./App.css"
import { useState } from "react";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          <Route path="/signup" element={<SignupPage></SignupPage>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
