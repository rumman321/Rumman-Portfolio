
import { Link, NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { FaFileDownload } from "react-icons/fa";


const Navber = () => {
  
  return (
    <nav className="z-[1000] mx-auto sticky top-4 flex items-center justify-between py-4 px-4 w-11/12 bg-[#F2F6FA] border border-solid rounded-xl dark:bg-dark-lite shadow-sm dark:shadow-md dark:border-dark-deep dark:text-white-deep">
      <div>
        <Link to="/">
          <p className="text-dark-deep font-semibold text-3xl dark:text-white-deep">
            <span className="text-primary1">
              <span>//</span>R
            </span>
            M
            <span className="text-orange-500">\\</span>
          </p>
        </Link>
      </div>

      {/* Desktop Navigation */}
      {/* <ul className="space-x-8 hidden lg:flex">
        <li>
          <NavLink to="/" className="nav">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about-me" className="nav">
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className="nav">
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/works" className="nav">
            Works
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact-me" className="nav">
            Contact
          </NavLink>
        </li>
      </ul> */}

      <div className="flex items-center gap-4">
        

        {/* Resume Button */}
        <div className="max-sm:hidden space-x-3">
        <a
                download={true}
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1quT29DWxtCWF30NiuxwpAgXjkAUnfsS3/view?usp=sharing"
                className='btn btn-primary gap-2'
              >
                  <FaFileDownload /> Download Resume
              </a>
        </div>

        {/* Mobile Menu Toggle */}
        <CiMenuFries
          className="text-[1.8rem] mr-1 cursor-pointer lg:hidden flex"
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
        />
      </div>

      {/* Dropdown Menu */}
      {/* <aside
        className={`absolute top-[65px] right-0 w-full md:w-4/12 rounded-md transition-transform duration-300 transform bg-white dark:bg-[#121212] p-4 text-center shadow-md ${
          mobileSidebarOpen
            ? "translate-y-0 opacity-100 z-[2000]"
            : "translate-y-[-200px] opacity-0 z-[-1]"
        }`}
      >
        <ul className="space-y-3">
          <li>
            <Link
              to="/"
              className="block hover:text-primary transition-colors ease-in-out duration-300"
              onClick={() => setMobileSidebarOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block hover:text-primary transition-colors ease-in-out duration-300"
              onClick={() => setMobileSidebarOpen(false)}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="block hover:text-primary transition-colors ease-in-out duration-300"
              onClick={() => setMobileSidebarOpen(false)}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/works"
              className="block hover:text-primary transition-colors ease-in-out duration-300"
              onClick={() => setMobileSidebarOpen(false)}
            >
              Works
            </Link>
          </li>
          <li>
            <Link
              to="/contact-me"
              className="block hover:text-primary transition-colors ease-in-out duration-300"
              onClick={() => setMobileSidebarOpen(false)}
            >
              Contact Me
            </Link>
          </li>
        </ul>
      </aside> */}
    </nav>
  );
};

export default Navber;
