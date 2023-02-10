import "./App.css";
import Card from "./components/Card";
import Feature from "./components/Feature";
import Hero from "./components/Hero";
import Inventional from "./components/Inventional";
import Man from "./components/Man";
import Library from "./components/Library";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Inventional/>
      <Library/>
      <Feature/>
      <Man/>
      <Card/>
      <Cards/>
    </div>
  );
}

export default App;
