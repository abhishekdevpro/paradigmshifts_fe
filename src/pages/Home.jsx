import React from 'react'
import Header from '../Components/Header/Header'
import AwardsAndCertificates from '../Components/Awards/Awards'
import GlobalPartners from '../Components/Global/Global'
import Footer from '../Components/Footer/Footer'
import HeroSection from '../Components/Hero-section.jsx/Hero'
import PartnershipsAndPrograms from '../Components/Programs/Program'
import ProgramSlider from '../Components/Slider/Slider'
import ProjectCards from '../Components/Projects/ProjectCard'


function Home() {
  return (
   <>
     <Header/>
     <HeroSection/>
     <PartnershipsAndPrograms/>
     <ProjectCards />
     {/* <ProgramSlider/> */}
     {/* <AwardsAndCertificates /> */}
     <GlobalPartners />
     <Footer />
   </>
  )
}

export default Home