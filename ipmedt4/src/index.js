import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GoalPage from "./pages/GoalPage";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Car from "./pages/Car";
import Profile from "./pages/Profile";
import Layout from "./pages/Layout";
import Tips from "./pages/Tips";
import NextAppointment from "./pages/NextAppointment";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="goalpage" element={<GoalPage />} />
          <Route path="car" element={<Car />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Tips" element={<Tips />} />
          <Route path="NextAppointment" element={<NextAppointment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);