import About from "../components/home/About";
import Header from "../components/home/Header";
import HowItWorks from "../components/home/HowItWorks";
import Packages from "../components/home/Packages";
import Purchase from "../components/home/Purchase";

export default function Home(){
    return(
        <>
          <Header />
          <About />
          <HowItWorks />
          <Packages />
          <Purchase />
        </>
    )
}