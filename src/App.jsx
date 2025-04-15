import { Route, Routes } from "react-router";
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./routes/Homepage";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";


function App() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
       
      </Route>
    </Routes>
  );
}

export default App;
