import "./App.css";
import Homepage from "./Pages/Homepage";
import { Route, Routes } from "react-router-dom";
import Chatpage from "./Pages/Chatpage";
// app
function App() {
  return (
    <div className="App">
      <Routes>
        {/* home page route */}
        <Route path="/" element={<Homepage />} />
        {/* chat page route */}
        <Route path="/chats" element={<Chatpage />} />
      </Routes>
    </div>
  );
}

export default App;
