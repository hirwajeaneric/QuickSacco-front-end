import CallToAction from "@/components/sections/CallToAction";
import FastAndEffiscient from "@/components/sections/FastAndEffiscient";
import FeedBack from "@/components/sections/FeedBack";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";
import HelmetComponent from "@/components/HelmetComponent";
import Hero from "@/components/sections/Hero";
import ProcessSection from "@/components/sections/ProcessSection";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HelmetComponent title="Welcome to QuickSacco" description="The quickest way to apply for a Loan in SACCO" />
      
      <Header />
      <Hero />
      <ProcessSection />
      <FastAndEffiscient />
      <FeedBack />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home

