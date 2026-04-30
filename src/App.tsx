import { ScrollBar } from "./components/scroll-bar";
import { Hero } from "./components/hero";

function App() {
  return (
    <div className="container mx-auto">
      <ScrollBar />
      <div className="w-full flex items-center justify-center py-40">
        <Hero />
      </div>
      <div></div>
    </div>
  );
}

export default App;
