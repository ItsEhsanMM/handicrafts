import Header from "./components/Header";
import Hero from "./components/Hero";
import MobileNav from "./components/MobileNav";

import Footer from "./components/Footer";
import LassNews from "./components/lastnews";
import Newproduct from "./components/newproduct";
import Join from "./components/join";
import NewHeader from "./components/NewHeader";
import Pupiuler from "./components/pupiuler";
import Ghaly from "./components/ghaly";
import Special from "./components/Special";

function App() {
   return (
      <div
         className="font-yekan custom-container bg-background flex flex-col space-y-10"
         dir="rtl"
      >
         {/* <MobileHeader /> */}
         {/* <Header /> */}
         <NewHeader />
         <MobileNav />
         <Hero />
         <Ghaly />
         <Pupiuler />
         <Join />
         <Newproduct />
         <LassNews />
         <Footer />

         <Special />
      </div>
   );
}

export default App;
