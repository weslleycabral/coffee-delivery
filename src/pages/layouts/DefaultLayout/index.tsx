import { Outlet } from "react-router-dom";
import { Wrapper } from "./style";
import { Header } from "../../../components/Header";

export function DefaultLayout() {
    return (
        <Wrapper>
            <Header/>
            <Outlet/>
        </Wrapper>
    );
}