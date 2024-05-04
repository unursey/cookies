import Page404 from "../../components/Page404/Page404";
import Hero from "../Hero/Hero";


export const Main = ({ path }) => {
  if (path === "home") {
    return (
      <>
        <Hero />
      </>
    );
  }

  if (path === "notfound") {
    return <Page404 />;
  }

  return <></>;
};


