import Aboutus from "../components/Aboutus";
import Header from "../components/Header"
import Portfolio from "../components/Portfolio"
import Navigation from "../components/Navigation"
import Services from "../components/Services"
import Contact from "../components/Contact";
import Team from "../components/Team";

export default function Home(){
    return(
        <>
            <Navigation/>
            <Header/>
            <Services/>
            <Portfolio/>
            <Aboutus/>
            <Team/>
            <Contact/>
        </>
    );
}