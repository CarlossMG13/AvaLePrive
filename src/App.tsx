// Shared Components
import Navbar from "@/components/shared/Navbar";
import Footer from "./components/shared/Footer";

// Home Components (sections)
import HeroSection from "./components/home/HeroSection";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black">
        <HeroSection />
        {/* sections go here */}
      </main>
      <Footer />
    </>
  );
}

export default App;
