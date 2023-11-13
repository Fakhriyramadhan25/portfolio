import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Skills from "../components/Skills";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";
import About from "../components/About";

export default function Homepage({
  setFaviconTitle,
  theme,
  setTheme,
}: {
  setFaviconTitle: Function;
  theme: string;
  setTheme: Function;
}) {
  useEffect(() => {
    setFaviconTitle("/Spade.png", "Fakhriy Ramadhan");

    if (
      localStorage.getItem("nd-theme") === "dark" ||
      localStorage.getItem("nd-theme") === "light"
    )
      setTheme(localStorage.getItem("nd-theme"));
    else
      setTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light",
      );
  }, []);

  return (
    <>
      <Navbar
        theme={theme}
        setTheme={setTheme}
        navbarMargin={{
          marginLeft:
            "ml-[1rem] 2sm:ml-[4rem] sm:ml-[6rem] md:ml-[4rem] lg:ml-[8rem] xl:ml-[14rem] 2xl:ml-[20rem]",
          marginRight:
            "mr-[1rem] 2sm:mr-[4rem] sm:mr-[6rem] md:mr-[4rem] lg:mr-[8rem] xl:mr-[14rem] 2xl:mr-[20rem]",
        }}
        logoPath="/Spade.png"
        logoTitle=""
        menu={["Home","About", "Portfolio", "Skills"]}
      />
      <Home
        h2Title="Hi! I am"
        h1Title="Fakhriy Ramadhan"
        description={null}
        typedInfo={{
          textBefore: "A",
          strings: ["GIS Developer", "Software Engineer", "Geospatial Data Science"],
          typeSpeed: 80,
          backSpeed: 50,
          backDelay: 2000,
        }}
        internalLink={{
          to: "portfolio",
          text: "Check Portfolio",
        }}
        externalLinks={[
          {
            link: "https://github.com/Fakhriyramadhan25",
            image: FaGithub,
            text: "Github",
          },
          {
            link: "https://www.linkedin.com/in/fakhriyramadhan/",
            image: FaLinkedin,
            text: "LinkedIn",
          },
        ]}
      />
      <About
        title={
          <>
            About <span className="text-highlight">me</span>
          </>
        }
      />
      <Portfolio />
      <Skills />
      

      <Footer />
    </>
  );
}
