import {
    ActionsBuy,
    Buy,
    CardContainer,
    CardContent,
    CardImg,
    CartButton,
    Content,
    Counter,
    ValueCoffee
} from "./style.ts";
import { Tag_Text, Text_S_Regular, Title_M, Title_S} from "../../../../styles/fonts.ts";
import {ShoppingCart} from "phosphor-react";
import {defaultTheme} from "../../../../styles/themes/default.ts";
import AddOperador from "./components/AddOperator.svg";
import SubOperador from "./components/SubOperator.svg";

interface CardProps {
    imgURL: string;
    tags: Array<string>;
    title: string;
    description: string;
    value: number;

}

export function Card({imgURL, tags, title, value, description}: CardProps) {
    return (
        <CardContainer>
            <CardImg>
                <img src={imgURL} alt="Café tradicional"/>
            </CardImg>
            <CardContent>
                <Tag_Text>{tags}</Tag_Text>
                <Content>
                    <Title_S>{title}</Title_S>
                    <Text_S_Regular>{description}</Text_S_Regular>
                </Content>
            </CardContent>
            <Buy>
                <ValueCoffee>
                    <Text_S_Regular>R$</Text_S_Regular>
                    <Title_M>{value}</Title_M>
                </ValueCoffee>
                <ActionsBuy>
                    <Counter>
                        <button>
                            <img src={SubOperador}/>
                        </button>
                        1
                        <button>
                            <img src={AddOperador}/>
                        </button>
                    </Counter>
                    <CartButton>
                        <ShoppingCart weight="fill" size={22} color={defaultTheme["base-card"]}/>
                    </CartButton>
                </ActionsBuy>
            </Buy>
        </CardContainer>
    );
}