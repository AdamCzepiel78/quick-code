import Navbar from "./Navbar";
import { ToastContainer } from "react-toastify";
import { ThemeProvider, useTheme } from "next-themes";

function Layout({ children }) {
  const { theme, setTheme } = useTheme();

  return (
    <ThemeProvider attribute="class">
      <Navbar />
      <main className="lg:px-12 z-0 dark:bg-secondary  dark:text-white px-5 py-5 min-h-screen">
        <h1>{theme}</h1>
        {children}
      </main>
      <ToastContainer theme="colored" />
    </ThemeProvider>
  );
}

export default Layout;
