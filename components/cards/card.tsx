import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";

import CardMedia from "@mui/material/CardMedia";
const CardComponent = ({ item }) => {
  return (
    <Card className="max-w-[900px] mx-auto bg-[#fff] dark:bg-[#2B2E33] border-[1px] border-[#949494] dark:border-[#ECECEC] rounded-[15px] mb-7 text-[#000] dark:text-[#fff] ">
      <CardActionArea className="grid grid-cols-[120px_minmax(400px,_1fr)] gap-4 px-7 min-h-[120px] py-[10px]">
        <div className="w-[120px] h-[80px] overflow-hidden">
          <CardMedia
            className="w-[130px]"
            component="img"
            image={`/img/${item.preview_image}`}
            alt="green iguana"
          />
        </div>
        <CardContent className="p-0 h-full ">
          <h2 className="text-[32px] w-[677px] h-[80px] text-ellipsis leading-10 overflow-hidden line-clamp-2">
            {item.name}
          </h2>
          <p className="text-right">{item.date}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default CardComponent;
