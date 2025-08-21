import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";

function App() {
  return (

    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<h2 className="text-center mt-10">404 – Sidan finns inte</h2>} />
      </Route>
    </Routes>
  );
}

export default App;