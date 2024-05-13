import styled from "styled-components";

export const CardContainer = styled.div`
    position: relative;
    display: flex;
    width: 16rem;
    height: 19.375rem;
    padding: 1.25rem;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    
    border-radius: 6px 36px;
    background: ${color => color.theme["base-card"]};
`;

export const CardImg = styled.div`
    position: absolute;
    top: -20px;
`;

export const CardContent = styled.div`
    margin-top: 1rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    align-self: stretch;
    
    span {
        display: flex;
        padding: 0.25rem 0.5rem;
        justify-content: center;
        align-items: center;
    
        color: ${color => color.theme["yellow-dark"]};
        border-radius: 6.25rem;
        background: ${color => color.theme["yellow-light"]};
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    align-self: stretch;
    
    h4 {
        text-align: center;
        color: ${color => color.theme["base-subtitle"]};
    }
    
    p {
        color: ${color => color.theme["base-label"]};
        text-align: center;
    }
`;

export const Buy = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ValueCoffee = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .3rem;
    
    h3 {
        color: ${color => color.theme["base-text"]};
    }
`;

export const ActionsBuy = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
`;

export const Counter = styled.div`
    display: flex;
    height: 2.375rem;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    border-radius: 6px;
    background: ${color =>  color.theme["base-button"]};
    
    button {
        border: none;
        background: none;
        display: flex;
        
        cursor: pointer;
    }
`;

export const CartButton = styled.button`
    border: none;
    background: none;
    
    display: flex;
    padding: .5rem;
    justify-content: center;
    align-items: center;

    border-radius: 6px;
    background: ${color => color.theme["purple-dark"]};
`;