import React from 'react'
import Header from '../Components/Header/Header'
import AwardsAndCertificates from '../Components/Awards/Awards'
import GlobalPartners from '../Components/Global/Global'
import Footer from '../Components/Footer/Footer'


function Home() {
  return (
   <>
     <Header/>
     <AwardsAndCertificates />
     <GlobalPartners />
     <Footer />
   </>
  )
}

export default Home