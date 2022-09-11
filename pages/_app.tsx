import "../styles/globals.css";
import Header from "../components/header";
import { ThemeProvider, useTheme } from "next-themes";
import Navigation from "../components/navigation";

function MyApp({ Component, pageProps }) {
  const { theme, setTheme } = useTheme();
  setTheme("dark");
  return (
    <ThemeProvider attribute="class">
      <div className="h-full bg-[#ECECEC] dark:bg-[#202226] text-[#000000] dark:text-[#fff]">
        <Header />
        <Navigation />

        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
