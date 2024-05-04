import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";
import s from "../Main/Main.module.scss";

export const Page = ({ pathname }) => (
  <>
    <header className={`header`}
    >
      <Header />
    </header>
    <main className={s.main}>
      <Main path={pathname} />
    </main>
    <Footer />
  </>
);
