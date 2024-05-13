import { Text_M_Regular } from "../../../../styles/fonts.ts";
import { ItemContainer } from "./style.ts";

interface Index {
  icon: JSX.Element;
  text: string;
  color: string;
}

export function ItemHero({icon, text, color}: Index) {

  return (
    <ItemContainer>
      <div style={{ backgroundColor: color}}>
        {icon}
      </div>
      <Text_M_Regular>
        {text}
      </Text_M_Regular>
    </ItemContainer>
  );
}