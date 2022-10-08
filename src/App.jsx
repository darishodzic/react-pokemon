import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Example from "./screens/Example";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/nav" element={<Nav />} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </div>
  );
}

export default App;
