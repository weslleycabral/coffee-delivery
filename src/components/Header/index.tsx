import { CoffeeCart, HeaderContainer, UserLocation } from "./style";
import LogoSite from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { Text_S_Regular } from "../../styles/fonts";
import { defaultTheme } from "../../styles/themes/default";

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoSite}/>
      <nav>
        <UserLocation>
          <MapPin size={22} weight="fill" color={defaultTheme["purple"]}/>
          <Text_S_Regular>Nome da cidade</Text_S_Regular>
        </UserLocation>

        <CoffeeCart>
          <ShoppingCart size={22} weight="fill" color={defaultTheme["yellow-dark"]}/>
        </CoffeeCart>
      </nav>
    </HeaderContainer>
  );
}