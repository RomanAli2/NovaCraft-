import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../Pages/HomePage"
import OutletPage from "../Pages/OutletPage"
import AboutPage from "../Pages/AboutPage"
import TeamPage from "../Pages/TeamPage"
function Router() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<OutletPage/>} >
        <Route  index element={<HomePage/>} />
        <Route path="/AboutPage" element={<AboutPage/>} />
        <Route path="/TeamPage" element={<TeamPage/>}/>
                </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router