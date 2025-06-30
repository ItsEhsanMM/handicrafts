import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileNav from "./components/MobileNav";

function App() {
   return (
      <div
         className="font-yekan custom-container"
         dir="rtl"
      >
         <Header />
         <MobileNav />
         <Hero />
      </div>
   );
}

export default App;
