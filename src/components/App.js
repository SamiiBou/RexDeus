import '../styles/App.css';
import { Routes, Route } from "react-router-dom";
import Sidebar from './Sidebar';
import AIAgents from "./AIAgents";
import Plugin from "./Plugin";
import Inventory from "./Inventory";
import Wallets from "./Wallets";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/AIAgents" element={<AIAgents />} />
          <Route path="/Plugin" element={<Plugin />} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/Wallets" element={<Wallets />} />
        </Routes>
      </main>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Welcome to our website !</h1>
      <p>With our Unreal Engine plugin, you can create and animate intelligent characters powered by advanced AI. <br/>Enhancing immersion and interaction, our solution is perfect for bringing realistic and autonomous virtual agents to life.</p>
    </div>
  );
}

export default App;