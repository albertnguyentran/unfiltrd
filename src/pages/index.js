import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSections'
import InfoSection from '../components/InfoSection'
import Footer from '../components/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <InfoSection />
            <Footer />
        </>
    )
}

export default Home
