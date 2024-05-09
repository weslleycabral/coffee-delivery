import styled from "styled-components";

export const ItemContainer = styled.div`
    gap: .75rem;
    display: flex;
    align-items: center;

    div {
        color: white;
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100px;
    }

    p {
        color: ${color => color.theme["base-text"]};
    }
`;