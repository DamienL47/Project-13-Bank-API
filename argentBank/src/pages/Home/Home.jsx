import { NavBar } from "../../components/NavBar/NavBar";
import { MainHero } from "../../components/MainHero/MainHero";
import { MainFeatures } from "../../components/MainFeatures/MainFeatures";
import { Footer } from "../../components/Footer/Footer";
import { apiConnect } from "api/apiConnect";

export function Home() {
  console.log(apiConnect());
  return (
    <>
      <NavBar />
      <main>
        <MainHero />
        <MainFeatures />
      </main>
      <Footer />
    </>
  );
}
