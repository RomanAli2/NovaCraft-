import '../App.css'
import { NavLink } from 'react-router-dom'
function HeaderSection(){
    return(
    <>
<header className="bg-gray-900  border-b z-50 border-gray-700  fixed top-0 w-full">
    <nav className='flex-col flex gap-2 md:flex-row items-center justify-center md:justify-between p-5'>
    <div className="flex items-center gap-2">
        <span>
            <img className="w-10 xl:w-20 md:w-15" src="/icon.png"/>
        </span>
        <span className='text-md md:text-xl xl:text-2xl  poppins-thin'>
            <h1 className="text-blue-500">Nova<span className="text-white">Craft</span></h1>
        </span>
    </div>
    <div className='flex flex-wrap xl:text-lg justify-center md:justify-start  text-xs md:text-md text-white gap-4 md:gap-8'>
    <NavLink className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-white" }to="/"> Home</NavLink>
    <NavLink className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-white" } to="/AboutPage"> About</NavLink>
    <NavLink  className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-white" } to="/TeamPage"> Our Team</NavLink>
    <NavLink className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-white" } to="/ContactPage"> Contact</NavLink>
    <NavLink className={({ isActive }) => isActive ? "text-blue-400 font-bold" : "text-white" } to="/IntershipPage"> Interships</NavLink>
    </div>
    </nav>
</header>
    </>)
}

export default HeaderSection