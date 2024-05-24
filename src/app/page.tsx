import HeroSection from "./components/HeroSection";
import StickyNavCopy from "./components/StickyNavCopy";
import BurgerMenuContainer from "./components/BurgerMenuContainer";
import UnlockYourPotential from "./components/UnlockYourPotential";
import OurProcess from "./components/OurProcess";
import PortfolioSection from "./components/PortfolioSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="body">
      <HeroSection />
      <StickyNavCopy />
      <BurgerMenuContainer />
      <UnlockYourPotential />
      <OurProcess />
      <PortfolioSection />
      <Footer />
    </main>
  );
}
