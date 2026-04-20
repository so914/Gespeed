import Hero from "../components/Hero";
import WhyUs from "../components/WhyUs";
import HowItWorks from "../components/HowItWorks";
import Services from "../components/Services";
import EstimateForm from "../components/EstimateForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CarSection from "../components/CarSection";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <main className="bg-white mt-[66px]">
        <Hero />
        <WhyUs />
        <Services />
        <CarSection />
        <HowItWorks />
        <EstimateForm />
    </main>
    <Footer/>
    </div>
  );
}
