"use client"

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import TechStackSection from './components/TechStackSection'
import ArchitectureSection from './components/ArchitectureSection'
import ScreenshotsSection from './components/ScreenshotsSection'
import DownloadSection from './components/DownloadSection'
import SupportSection from './components/SupportSection'

export default function SoftDreamsPage() {
    return (
        <>
            <Navbar />
            <main>
                <HeroSection />
                <FeaturesSection />
                <TechStackSection />
                <ArchitectureSection />
                <ScreenshotsSection />
                <DownloadSection />
                <SupportSection />
            </main>
            <Footer />
            <BackToTop />
        </>
    )
}
