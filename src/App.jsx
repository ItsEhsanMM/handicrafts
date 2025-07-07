import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileNav from "./components/MobileNav";
import Special from "./components/Special";

function App() {
   return (
      <div
         className="font-yekan custom-container bg-background flex flex-col space-y-20"
         dir="rtl"
      >
         <Header />
         <MobileNav />
         <Hero />
         <Special />
      </div>
   );
}

export default App;
