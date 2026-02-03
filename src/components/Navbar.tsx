import { useState, useEffect, useMemo } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import NavbarMenuLink from "./NavbarMenuLink";
import NavbarMobileMenuLink from "./NavbarMobileMenuLink";

export default function Navbar({
  theme,
  setTheme,
  navbarMargin,
  logoPath,
  logoTitle,
  menu,
}: {
  theme: string;
  setTheme: Function;
  navbarMargin: { marginLeft: string; marginRight: string };
  logoPath: string;
  logoTitle: string;
  menu: string[];
}) {
  const [hamburger, setHamburger] = useState(false);
  const [scrollY, setScrollY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);
    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);

  function handleScrollY(): void {
    setScrollY(window.scrollY);
  }

  const memoizedNavbar = useMemo(
    () => (
      <>
        {/* Logo */}
        {logoPath && (
          <Link
            to="home"
            offset={-60}
            smooth={true}
            duration={400}
            className={`z-10 flex cursor-pointer items-center gap-2 justify-self-start transition-all duration-300 hover:scale-105 ${navbarMargin.marginLeft}`}
            onClick={() => hamburger && setHamburger(false)}
          >
            <div className="relative">
              <div className="absolute inset-0 animate-pulse rounded-full bg-highlight opacity-20 blur-md"></div>
              <img
                className="relative h-[40px] w-[40px] transition-transform duration-300 hover:rotate-12"
                src={logoPath}
                alt="Logo"
              />
            </div>
            {logoTitle && (
              <h1 className="ml-2 hidden self-center bg-gradient-to-r from-text to-highlight bg-clip-text text-2xl font-bold text-transparent sm:flex lg:text-3xl">
                {logoTitle}
              </h1>
            )}
          </Link>
        )}

        {/* Menu */}
        {menu && (
          <nav className="hidden justify-self-center text-lg font-semibold md:flex">
            {menu.map((menuLink) => (
              <NavbarMenuLink key={menuLink}>{menuLink}</NavbarMenuLink>
            ))}
          </nav>
        )}

        {/* Hamburger */}
        {menu && (
          <div
            className="z-10 cursor-pointer justify-self-center md:hidden"
            onClick={() => setHamburger(!hamburger)}
          >
            <div className="relative">
              {hamburger ? (
                <FaTimes
                  size={30}
                  className="animate-spin-once text-text transition-all duration-300 hover:text-highlight"
                />
              ) : (
                <FaBars
                  size={30}
                  className="text-text transition-all duration-300 hover:text-highlight"
                />
              )}
            </div>
          </div>
        )}

        {/* Theme Toggle */}
        <div
          className={`z-10 cursor-pointer justify-self-end transition-all duration-300 hover:scale-110 ${navbarMargin.marginRight}`}
          onClick={() =>
            setTheme(
              localStorage.getItem("nd-theme") === "light" ? "dark" : "light",
            )
          }
        >
          <div className="relative">
            <div className="absolute inset-0 animate-pulse rounded-full bg-highlight opacity-20 blur-md"></div>
            {theme === "dark" ? (
              <MdLightMode
                size={30}
                className="animate-fade-in relative text-text transition-all duration-300 hover:rotate-180 hover:text-highlight"
              />
            ) : (
              <MdDarkMode
                size={30}
                className="animate-fade-in relative text-text transition-all duration-300 hover:-rotate-180 hover:text-highlight"
              />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <nav
            className={`${
              hamburger
                ? "animate-slide-down absolute left-0 top-[58px] flex h-[calc(100vh-58px)] w-full flex-col items-center justify-center justify-self-center bg-primary/95 backdrop-blur-xl"
                : "hidden"
            }`}
          >
            {/* Decorative elements */}
            <div className="absolute left-1/4 top-1/4 h-32 w-32 animate-pulse rounded-full bg-highlight opacity-10 blur-3xl"></div>
            <div
              className="absolute bottom-1/4 right-1/4 h-40 w-40 animate-pulse rounded-full bg-highlight opacity-10 blur-3xl"
              style={{ animationDelay: "1s" }}
            ></div>

            {menu.map((menuLink, index) => (
              <div
                key={menuLink}
                className="animate-fade-in w-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <NavbarMobileMenuLink setHamburger={setHamburger}>
                  {menuLink}
                </NavbarMobileMenuLink>
              </div>
            ))}
          </nav>
        )}
      </>
    ),
    [hamburger, theme],
  );

  return (
    <header
      className={`${
        scrollY > 100
          ? "border-b-2 border-b-highlight bg-primary/90 shadow-[0_0_30px_rgba(var(--highlight-rgb),0.2)] backdrop-blur-xl"
          : "border-b-2 border-b-transparent bg-primary"
      } fixed z-10 grid h-[60px] w-full grid-cols-[1fr,1fr,1fr] items-center text-text transition-all duration-500`}
    >
      {/* Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-highlight to-highlight/50 transition-all duration-300"
        style={{
          width: `${
            (scrollY /
              (document.documentElement.scrollHeight - window.innerHeight)) *
            100
          }%`,
        }}
      ></div>

      {memoizedNavbar}
    </header>
  );
}
