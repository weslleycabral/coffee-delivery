import { createContext } from "react";

enum CoffeeTag {
    TRADICIONAL = "TRADICIONAL",
    GELADO = "GELADO",
    COM_LEITE = "COM LEITE",
    ESPECIAL = "ESPECIAL",
    ALCOÓLICO = "ALCOÓLICO"
}

enum CoffeeName {
    TRADICIONAL = "Expresso Tradicional",
    AMERICANO = "Expresso Americano",
    CREMOSO = "Expresso Cremoso",
    GELADO = "Expresso Gelado",
    CAFE_COM_LEITE = "Café com Leite",
    CAPPUCCINO = "Capuccino",
    LATTE = "Latte",
    MACCHIATO = "Macchiato",
    MOCACCINO = "Mocaccino",
    CHOCOLATE_QUENTE = "Chocolate Quente",
    CUBANO =  "Cubano",
    HAVAIANO = "Havaiano",
    ARABE = "Árabe",
    IRLANDÊS = "Irlandês"
}

interface Coffee {
    id: string;
    name: CoffeeName;
}

interface CoffeeInfo {
    coffee: Coffee;
    img: string;
    tag: CoffeeTag;
    description: string;
    price: number;
}

interface CoffeeContextType {
    coffees: Array<CoffeeInfo>;
}

interface CoffeeContextProvidesProps {
    children: React.ReactNode;
}

export const CoffeeContext = createContext({} as CoffeeContextType);

export function CoffeeContextProvider({ children }: CoffeeContextProvidesProps) {


    return (
        <></>
        // <CoffeeContext.Provider>
        //     {children}
        // </CoffeeContext.Provider>
    );
}