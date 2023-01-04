import { BiFootball } from "react-icons/bi";
import { IoIdCard } from "react-icons/io5";
import { GiLeg } from "react-icons/gi";

interface IconProps {
  event: string;
}

export const Icon = ({ event }: IconProps) => {
  if (event === "score_change")
    return <BiFootball color="green" width="10px" />;
  if (event === "injury") return <GiLeg width="10px" />;
  if (event === "shot_on_target") return <BiFootball width="10px" />;
  if (event === "yellow_card") return <IoIdCard color="yellow" width="10px" />;
  if (event === "red_card") return <IoIdCard color="red" width="10px" />;
  return null;
};
