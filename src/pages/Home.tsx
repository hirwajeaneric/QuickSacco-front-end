import FastAndEffiscient from "@/components/FastAndEffiscient";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      <ProcessSection />
      <FastAndEffiscient />
      <Footer />
    </div>
  )
}

export default Home

