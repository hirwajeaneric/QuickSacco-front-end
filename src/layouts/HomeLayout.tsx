import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero";
import React from "react"

type Props = {
  children: React.ReactNode;
  showHero?: boolean
}

const HomeLayout = ({ children, showHero }: Props) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      {showHero && <Hero />}
      <div className="px-5 md:container mx-auto flex-1 py-10">
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default HomeLayout