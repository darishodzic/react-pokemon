import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/components' element={<NavBar />} />
      </Routes>
    </div>
  );
}

export default App;
