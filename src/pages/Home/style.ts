import styled from "styled-components";

export const SectionHero = styled.section`
    display: flex;
    flex-direction: row;
    padding-top: 6rem;
    padding-bottom: 6rem;
    gap: 3.5rem;
`;

export const HeroLeft = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 4.125rem;
    h1 {
        color: ${color => color.theme["base-title"]};
    }

    p {
        color: ${color => color.theme["base-subtitle"]};
    }
`;

export const HeroRight = styled.div`
    width: auto;
`;

export const HeroTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const HeroIcons = styled.div`
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto;
    grid-row-gap: 20px;
    grid-column-gap: 40px;
`;

export const SectionContent = styled.section`
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    padding-bottom: 9rem;
    gap: 3.375rem;

    h2 {
        color: ${color => color.theme["base-subtitle"]};
    }
`;

export const CoffeeGrid = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-auto-rows: auto;
    grid-column-gap: 1.25rem;
    grid-row-gap: 2.5rem;
`;