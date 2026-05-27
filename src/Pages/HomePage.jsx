import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import '../App.css'
function HomePage(){

    const Cards=[
        {Title:"Frontend Development",about:"Html, css, javascript, tailwindcss, vue.js or react.js"},
        {Title:"Video Editing", about:"Capcut, basic canva ,AI tools ,youtube automation"},
        {Title:"Graphic Designing" ,about:"Adobe photoshop ,adobe illustrator, canva , AI tools for designing"}
    ]
    useEffect(()=>{
AOS.init()
},[])
    return(
        <main className="">
  <section>
   <div  className="min-h-screen pt-32 border-b gap-5  flex-col md:flex-row md:justify-around  bg-black justify-center flex items-center ">
   <div data-aos="fade-right" className=' m-5' >

    <span>
      <p className="text-white  font-bold italic ml-2">Welcome to NovaCraft</p>
    </span>
    <span className="text-white " >
      <h1 className=" mt-1 font-bold text-3xl xl:text-7xl md:text-6xl">Crafting Digital <br/>
      Futures <span className="text-blue-500">Together</span>
      </h1><br/>
      <p className="text-sm md:text-lg xl:text-xl "> We are creative digital agency and learning community<br/>
       helping  individual  grow in web development ,video editing <br/> and graphic designing</p>
       <br/>
    <a className="text-white bg-blue-600 px-4 py-2 rounded-lg" href="#More">More <i className="fa-solid fa-arrow-right"></i></a>
    </span>
   </div>
   <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom">
    <img className="w-80 xl:w-150 md:w-120" src="/hero-pic.png" />
   </div>
   </div>
  </section>

  <section className="bg-black py-16 px-4">
<br/>
  {/* About Section */}
  <div id="More" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500" className="max-w-6xl mx-auto bg-black/90 shadow-lg rounded-3xl p-2 md:p-12">

    <h1 className="text-3xl md:text-5xl font-bold text-blue-500 md:text-center text-start mb-6">
      Welcome to Novacraft Agency
    </h1>

    <p className="text-start text-gray-100 text-md md:text-lg md:text-center leading-8 max-w-4xl mx-auto">
      NovaCraft Agency is a creative digital community built to help passionate
      people learn, grow, and improve their skills in web development,
      video editing, and graphic design. Our goal is not only to create
      digital projects but also to build a strong team where members can
      learn together, gain real experience, and create a better future
      through creativity, consistency, and teamwork.
    </p>

  </div>

  {/* Cards Section */}
  <div data-aos="flip-right" className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

    {Cards.map((item, index) => (
      <div
        key={index}
        className="bg-gray-900 p-6 m-2 rounded-2xl shadow-lg border border-blue-900  text-center hover:scale-105 hover:shadow-2xl transition duration-300"
      >

        <h1 className="text-2xl text-blue-500 font-bold mb-4">
          {item.Title}
        </h1>

        <p className="text-gray-100 leading-7">
          {item.about}
        </p>

      </div>
    ))}

  </div>

</section>
        </main>
    )
}

export default HomePage