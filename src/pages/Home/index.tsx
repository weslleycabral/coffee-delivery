import {
  HeroIcons,
  HeroLeft,
  HeroRight,
  HeroTitle,
  SectionHero,
  SectionContent,
  CoffeeGrid } from "./style";

import HeroBanner from "../../assets/banner-coffee.png";
import { Text_L_Regular, Title_L, Title_XL } from "../../styles/fonts";
import { ItemHero } from "./components/ItemHero";
import { defaultTheme } from "../../styles/themes/default";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Card } from "./components/Card";
import listCoffees from "../../../data.json";

export function Home() {

  return (
    <>
      <SectionHero>
        <HeroLeft>
          <HeroTitle>
            <Title_XL>
              Encontre o café perfeito para qualquer hora do dia
            </Title_XL>
            <Text_L_Regular>
              Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </Text_L_Regular>
          </HeroTitle>
          <HeroIcons>
            <ItemHero
              color={defaultTheme["yellow-dark"]}
              icon={<ShoppingCart size={16} weight="fill"/>}
              text="Compra simples e segura" 
            />
            <ItemHero
              color={defaultTheme["base-text"]}
              icon={<Package size={16} weight="fill"/>}
              text="Embalagem mantém o café intacto" 
            />
            <ItemHero
              color={defaultTheme["yellow"]}
              icon={<Timer size={16} weight="fill"/>}
              text="Entrega rápida e rastreada" 
            />
            <ItemHero
              color={defaultTheme["purple"]}
              icon={<Coffee size={16} weight="fill"/>}
              text="O café chega fresquinho até você" 
            />
          </HeroIcons>
        </HeroLeft>
        <HeroRight>
          <img src={HeroBanner}/>
        </HeroRight>
      </SectionHero>
      <SectionContent>
        <Title_L>Nossos cafés</Title_L>
        <CoffeeGrid>
          {listCoffees.coffees.map(coffee => {
            <Card
                key={coffee.id}
                imgURL={coffee.image}
                title={coffee.name}
                description={coffee.description}
                tags={coffee.tags}
                value={coffee.price}
            />
          })}
        </CoffeeGrid>
      </SectionContent>
    </>
    
  );
}