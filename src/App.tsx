import { ScrollBar } from "./components/scroll-bar";
import { Hero } from "./components/hero";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  console.log("1");
  useEffect(() => {
    console.log("2", count);
  }, [count]);

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
