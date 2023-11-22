import { Footer } from "components/Footer/Footer";
import s from "./style.module.css";
import { NavBar } from "components/NavBar/NavBar";

export function Error404() {
  return (
    <>
      <NavBar />
      <h1 className={s.title}> Erreur 404 </h1>
      <p className={s.paraf}>La page demandée n'existe pas</p>
      <a className={s.link} href="/">
        Retourner à la page d'accueil.
      </a>
      <Footer />
    </>
  );
}
