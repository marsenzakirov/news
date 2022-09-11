import Link from "next/link";
import { List, ListItem } from "@mui/material";

const Navigation = () => {
  let navItems = [
    { text: "Главное", link: "/news/main" },
    { text: "Москва", link: "/news/moscow" },
    { text: "Интересное", link: "/news/intresting" },
    { text: "Технологии", link: "/news/tech" },
    { text: "наука", link: "/news/science" },
  ];

  return (
    <nav className={`flex justify-center my-[40px] `}>
      <List className="flex gap-[38px]  bg-[#fff] dark:bg-[#2B2E33] px-5 w-fit rounded-[43px] border-[1px] border-[#949494] dark:border-[#ECECEC]">
        {navItems.map((item, i) => (
          <ListItem key={i} disablePadding className=" w-fit hover:bg-[#7d7d7d] rounded-[32px] h-[45px] px-3">
            <Link href={`${item.link}`}>
              <a className="text-center p-4 ">{item.text}</a>
            </Link>
          </ListItem>
        ))}
      </List>
    </nav>
  );
};
export default Navigation;
