import { ScrollBar } from "./components/scroll-bar";
import { Hero } from "./components/hero";
import { Work } from './components/work'

function App() {
  return (
    <div className="container mx-auto p-2">
      <ScrollBar />
      <div className="w-full flex items-center justify-center py-10 md:py-40">
        <Hero />
      </div>
      <div className="w-full flex items-center justify-center py-10 md:py-40">
        <Work />
      </div>
    </div>
  );
}

export default App;
