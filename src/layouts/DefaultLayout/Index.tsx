import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header/Index";
import { LayoutContainer } from "./styles";
import { GlobalStyle } from "../../styles/global";

export function DefaultLayout() {
    return (
        <div>
            <LayoutContainer>
            <Header/>
            <Outlet />
            </LayoutContainer>
        </div>
    )
}