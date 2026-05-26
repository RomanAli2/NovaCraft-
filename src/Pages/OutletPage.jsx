import { Outlet } from "react-router-dom"
import HeaderSection from "../Components/HeaderSection"
import FooterSection from "../Components/FooterSection"

function OutletPage(){
    return(
        <>
        <HeaderSection/>
        <Outlet/>
        <FooterSection/>
        </>
    )
}

export default OutletPage