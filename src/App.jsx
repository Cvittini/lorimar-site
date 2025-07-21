import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import HealthySnacks from "./Pages/HealthySnacks";
import Blog from "./Pages/Blog";
import FitnessPlan from "./Pages/FitnnessPlan"
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Feedback from "./Pages/Feedback";
import TopNav from "./Componets/TopNav";
import './App.css'

function App() {

  return (
    <>
    <TopNav />
    <Router>
      <Routes>
        <Route path="/lorimar-site" element={<Home />} />
        <Route path="/lorimar-site/events" element={<Events />} />
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/HealthySnacks" element={<HealthySnacks />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/itnessplan" element={<FitnessPlan />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
    </>
  )

}

export default App
