import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Marvel from "./Components/Marvel";
function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/:id" element={<Marvel />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
