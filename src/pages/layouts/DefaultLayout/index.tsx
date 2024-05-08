import { Outlet } from "react-router-dom";
import { Wrapper } from "./style";

export function DefaultLayout() {
    return (
        <Wrapper>
            <h1>Oi</h1>
            <Outlet/>
        </Wrapper>
    );
}