import CallToAction from "@/components/CallToAction";
import FastAndEffiscient from "@/components/FastAndEffiscient";
import FeedBack from "@/components/FeedBack";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HelmetComponent from "@/components/HelmetComponent";
import Hero from "@/components/Hero";
import ProcessSection from "@/components/ProcessSection";

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

