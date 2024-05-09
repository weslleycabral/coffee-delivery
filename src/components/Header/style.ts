import styled from "styled-components";

const LinkStyle = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .25rem;
    padding: .5rem;
    border-radius: 6px;
    cursor: pointer;
    text-decoration: none;
`;

export const HeaderContainer = styled.header`
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    nav {
        display: flex;
        flex-direction: row;
        gap: .75rem;
    }
`;

export const UserLocation = styled(LinkStyle)`
    background-color: ${color => color.theme["purple-light"]};
    color: ${color => color.theme["purple-dark"]};
`;

export const CoffeeCart = styled(LinkStyle)`
    background-color: ${color => color.theme["yellow-light"]};
`;