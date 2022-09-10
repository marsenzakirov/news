import Link from "next/link";
import Image from "next/image";
import FutureImage from "next/future/image";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const Header = () => {
  const { theme, setTheme } = useTheme();
  const [myTheme, setMyTheme] = useState<string>();
  const changeTheme = () => {
    setTheme(theme == "dark" ? "white" : "dark");
  };
  useEffect(() => {
    setMyTheme(theme);
  }, [theme]);
  return (
    <header className="h-[124px] bg-[#fff] dark:bg-[#2b2e33] border-b-[1px] border-[#949494] dark:border-[#ECECEC]">
      <div className="flex max-w-[1440px] mx-auto h-full">
        <Link href="/">
          <a className="flex gap-2 items-center ">
            <Image
              src={
                `/icons/logo_` + (theme == "dark" ? "dark" : "white") + ".svg"
              }
              alt="logo"
              width={64}
              height={64}
            />
            <p className="text-3xl font-bold">Нейрон</p>
          </a>
        </Link>
        {/* /start search input */}
        <form
          action=""
          className="h-[70px] w-[450px] my-auto flex items-center justify-between bg-[#E7E7E7] rounded-xl ml-16 py-2 pr-5 pl-2 text-xl dark:bg-[#373A42] border-2 border-[#949494] dark:border-[#838383]"
        >
          <input
            type="text"
            placeholder="Поиск"
            className="w-[360px] h-full bg-transparent outline-none"
          />
          <button className="">
            <Image
              src={
                `/icons/magnifier_` +
                (theme == "dark" ? "dark" : "white") +
                ".svg"
              }
              alt=""
              width={20}
              height={20}
            />
          </button>
        </form>
        {/* /end search input */}
        <button
          className={`ml-auto  my-auto w-[50px] h-[50px]  bg-[#E7E7E7] dark:bg-[#3C434E] rounded-full relative overflow-hidden`}
          onClick={() => {
            changeTheme();
          }}
        >
          {myTheme == "dark" ? (
            <>
              <motion.div
                className="h-fit w-fit absolute left-1/2  "
                initial={{
                  top: `50%`,
                  transform: `translateX(-50%) translateY(-50%)`,
                }}
                animate={{
                  top: `-50%`,
                  transform: `translateX(-50%) translateY(0)`,
                }}
                transition={{}}
              >
                <FutureImage
                  src={`/icons/moon.svg`}
                  alt="dark"
                  width={21}
                  height={21}
                />
              </motion.div>
              <motion.div
                className="h-fit w-fit absolute left-1/2 "
                initial={{
                  bottom: `0%`,
                  transform: `translateX(-50%) translateY(50%)`,
                }}
                animate={{
                  bottom: `50%`,
                  transform: `translateX(-50%) translateY(50%)`,
                }}
                transition={{}}
              >
                <FutureImage
                  src={`/icons/sun.svg`}
                  alt="sun"
                  width={21}
                  height={21}
                />
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                className="h-fit w-fit absolute left-1/2  "
                initial={{
                  top: `-50%`,
                  transform: `translateX(-50%) translateY(0)`,
                }}
                animate={{
                  top: `50%`,
                  transform: `translateX(-50%) translateY(-50%)`,
                }}
                transition={{}}
              >
                <FutureImage
                  src={`/icons/moon.svg`}
                  alt="dark"
                  width={21}
                  height={21}
                />
              </motion.div>
              <motion.div
                className="h-fit w-fit absolute left-1/2 "
                initial={{
                  bottom: `50%`,
                  transform: `translateX(-50%) translateY(50%)`,
                }}
                animate={{
                  bottom: `0%`,
                  transform: `translateX(-50%) translateY(100%)`,
                }}
                transition={{ }}
              >
                <FutureImage
                  src={`/icons/sun.svg`}
                  alt="sun"
                  width={21}
                  height={21}
                />
              </motion.div>
            </>
          )}
        </button>
      </div>
    </header>
  );
};
export default Header;
