"use client";
import Footer from "@/components/Footer";
import OurService from "@/components/Service/OurService";
import TeamMembers from "@/components/AboutUs/TeamMembers";
import HeroContent from "@/components/Hero/HeroContent";
import Navbar from "@/components/Navbar";
import { Element } from "react-scroll";
import MarkoAboutPage from "@/components/AboutUs/AboutMainDescription";

export default function Home() {
    return (
        <>
            <Navbar />

            <Element name="HOME">
                <HeroContent />
            </Element>
           
            <Element name="ABOUT US">
                {/* <MarkoAboutPage /> */}
                <TeamMembers />
            </Element>
             <Element name="SERVICE">
                <OurService />
            </Element>
            <Footer />
        </>
    );
}
