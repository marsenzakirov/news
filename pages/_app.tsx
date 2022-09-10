import "../styles/globals.css";
import Header from "../components/header";
import { ThemeProvider, useTheme } from "next-themes";

function MyApp({ Component, pageProps }) {
  const { theme, setTheme } = useTheme();
  setTheme("dark");
  return (
    <ThemeProvider attribute="class">
      <div className="h-screen bg-[#ECECEC] dark:bg-[#202226]">
        <Header />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
