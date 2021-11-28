import Link from "next/link";
import { useState } from "react";
import {
  MdMenu,
  MdOutlineClose,
  MdDarkMode,
  MdLightMode,
} from "react-icons/md";
import { parseCookies } from "nookies";
import { useRouter } from "next/router";
import JsCookie from "js-cookie";
import { useTheme } from "next-themes";

function Navbar({}) {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const cookies = parseCookies();
  const token = cookies.token;

  const [showMenu, setShowMenu] = useState(false);

  const navigate = (path) => {
    router.push(path);
    setShowMenu(false);
  };

  return (
    <nav
      className="lg:px-12 px-5 py-5 flex items-center justify-between 
        dark:bg-secondary dark:text-white"
    >
      <Link href="/">
        <h3 className="font-display cursor-pointer text-gray-800 dark:text-white text-2xl">
          <span className="text-primary">Q</span>Code
        </h3>
      </Link>

      <div className="flex items-center">
        {theme === "light" ? (
          <MdDarkMode
            className="cursor-pointer"
            onClick={() => setTheme("dark")}
            size="25"
          />
        ) : (
          <MdLightMode
            className="cursor-pointer"
            onClick={() => setTheme("light")}
            size="25"
          />
        )}
        {token && (
          <MdMenu
            className="cursor-pointer ml-5"
            onClick={() => setShowMenu(true)}
            size="25"
          />
        )}
      </div>

      {showMenu && (
        <ul className="fixed z-50 bg-white dark:bg-secondary border shadow-lg rounded-md lg:right-12 right-3 top-0 mt-5  px-10 py-5">
          <li className="my-4 font-bold hover:text-primary">
            <button
              className="font-bold"
              onClick={() => navigate("/cheatsheet")}
            >
              My Cheatsheets
            </button>
          </li>
          <li className="my-4 hover:text-primary">
            <button
              className="font-bold"
              onClick={() => navigate("/create-cheatsheet")}
            >
              Create Cheatsheet
            </button>
          </li>
          <li
            onClick={() => {
              JsCookie.remove("token");
              router.replace("/");
              setShowMenu(false);
            }}
            className="my-4 font-bold cursor-pointer hover:text-primary"
          >
            Logout
          </li>

          <MdOutlineClose
            onClick={() => setShowMenu(false)}
            size="24"
            className="absolute top-3 right-3 cursor-pointer"
          />
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
