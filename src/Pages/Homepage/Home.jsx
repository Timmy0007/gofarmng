import React from 'react'
import Carousel from '../../Components/Carouseldiv'
import Section from '../../Components/section/section'
import Explore from '../../Components/ExploreCategories/ExploreCategories'
import Newest from '../../Components/NewestArrival/NewsetArrival'
import Subscribe from '../../Components/SubscribeNewsLetter/SubscribeNewsLetter'
import Footer from '../../Components/Footer/Footer'
import TopSellingProduct  from '../../Components/TopSellingProduct/TopSellingProduct'


const Home = () => {
  return (
    <>
    <div>
        <Carousel />
        <Section />
        <Explore />
        <TopSellingProduct/>
        <Newest />
        <Subscribe />
        <Footer />
    </div>
    </>
  )
}

export default Home