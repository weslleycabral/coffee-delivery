import { Text_M_Regular } from "../../../styles/fonts";
import { ItemContainer } from "./style";

interface ItemHero {
  icon: JSX.Element;
  text: string;
  color: string;
}

export function ItemHero({icon, text, color}: ItemHero) {

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