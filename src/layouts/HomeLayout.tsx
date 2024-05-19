import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero";
import React from "react"

type Props = {
  children: React.ReactNode;
  showHero?: boolean;
  fullWidth?: boolean;
}

const HomeLayout = ({ children, showHero, fullWidth }: Props) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      {showHero && <Hero />}
      <div className={`fullWidth md:container mx-auto flex-1 py-10`}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default HomeLayout