import { Link } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-2 border-t-highlight/20 bg-secondary">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute -left-20 top-1/2 h-40 w-40 animate-pulse rounded-full bg-highlight blur-3xl"></div>
        <div
          className="absolute -right-20 top-1/2 h-40 w-40 animate-pulse rounded-full bg-highlight blur-3xl"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative flex h-[80px] w-full items-center justify-between px-6 sm:px-12 lg:px-24">
        {/* Left Section - Copyright */}
        <div className="flex items-center gap-2">
          <h3 className="text-sm font-medium text-text md:text-base">
            Crafted by{" "}
            <a
              href="https://www.linkedin.com/in/fakhriyramadhan/"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-block"
            >
              <span className="relative z-10 font-semibold text-highlight transition-all duration-300 group-hover:text-text">
                Fakhriy Ramadhan
              </span>
              <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-highlight transition-all duration-300 group-hover:w-full"></span>
            </a>
          </h3>
        </div>

        {/* Center Section - Year */}
        <div className="hidden sm:block">
          <div className="rounded-full border-2 border-highlight/30 bg-primary/50 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-highlight hover:shadow-[0_0_20px_rgba(var(--highlight-rgb),0.3)]">
            <span className="font-mono text-sm font-semibold text-text">
              {new Date().getFullYear()}
            </span>
          </div>
        </div>

        {/* Right Section - Scroll to Top */}
        <Link to="home" smooth={true} duration={400}>
          <div className="group relative cursor-pointer">
            {/* Glow Effect */}
            <div className="absolute inset-0 animate-pulse rounded-full bg-highlight opacity-20 blur-md transition-all duration-300 group-hover:opacity-40"></div>

            {/* Button */}
            <div className="relative flex items-center gap-2 rounded-full border-2 border-highlight bg-primary px-4 py-2 transition-all duration-300 group-hover:bg-highlight group-hover:shadow-[0_0_20px_rgba(var(--highlight-rgb),0.4)]">
              <span className="hidden text-sm font-semibold text-text transition-colors duration-300 group-hover:text-primary sm:inline">
                Back to Top
              </span>
              <AiOutlineArrowUp
                className="text-text transition-all duration-300 group-hover:-translate-y-1 group-hover:text-primary"
                size={20}
              />
            </div>
          </div>
        </Link>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-highlight to-transparent opacity-50"></div>
    </footer>
  );
}
