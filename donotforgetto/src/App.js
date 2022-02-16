import Layout from "./Components/Layout";
import Home from "./Components/Home";
import About from "./Components/About";
import Reminders from "./Components/Reminders";
import Error from "./Components/Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="reminders" element={<Reminders />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
