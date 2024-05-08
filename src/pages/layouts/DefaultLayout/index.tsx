import { Outlet } from "react-router-dom";
import { Wrapper } from "./style";

export function DefaultLayout() {
    return (
        <Wrapper>
            <Outlet/>
        </Wrapper>
    );
}