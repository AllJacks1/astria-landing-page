import Differentiation from "./components/Differentiation";
import HeroSection from "./components/HeroSection";
import LeadMagnet from "./components/LeadMagnet";
import Navbar from "./components/Navigationbar";
import ProblemSection from "./components/ProblemSection";
import HowItWorks from "./components/ProcessSection";
import ServicesSection from "./components/ServicesSection";
import SocialProofBar from "./components/SocialProofBar";
import SolutionSection from "./components/SolutionSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <SocialProofBar />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <HowItWorks />
      <Differentiation />
      <LeadMagnet />
    </>
  );
}

export default App;
