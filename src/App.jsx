import Hero from "./components/Hero";
import Newproduct from "./components/newproduct";
import Join from "./components/Newsletter";
import Carpet from "./components/Carpet";
import Special from "./components/Special";
import Popular from "./components/Popular";
import LastNews from "./components/LastNews";

function App() {
   return (
      <section className="flex flex-col space-y-10">
         <Hero />
         <Special />
         <Carpet />
         <Popular />
         <Join />
         <Newproduct />
         <LastNews />
      </section>
   );
}

export default App;
