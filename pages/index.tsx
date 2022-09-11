import Head from "next/head";
import Image from "next/image";
import { useTheme } from "next-themes";
import Card from "../components/cards/card";
import newsList from "../public/json/articles.json";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <main className="max-w-[1440px] mx-auto">
        {newsList.map((item, i) => {
          return <Card item={item}/>;
        })}
      </main>
    </>
  );
}
