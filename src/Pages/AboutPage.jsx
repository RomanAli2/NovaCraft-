import '../App.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
function AboutPage(){
     useEffect(()=>{
    AOS.init()
    },[])
    return (
        <main className='bg-black pt-15'>
        <br/><br/>
        <section className="">
            <div data-aos="zoom-in" className='bg-gray-900 flex  flex-col gap-4 md:gap-0.5 md:flex-row justify-center md:justify-between items-center  m-8  rounded-2xl p-4'>
            <div className='text-center max-w-100 md:text-start'>
                <span><h1 className='text-blue-500 font-bold text-4xl'>Roman Ali</h1>
                <p className='font-medium text-white m-1 '>Founder & CEO</p>
                <p className='m-1 text-gray-100'>
                    We believe that talent grows faster in the right environment. That’s why NovaCraft Agency is built to create opportunities where people can learn together, build projects, gain experience, and prepare for a better future in the digital world.
                </p>
                </span>
            </div>
            <div>
                <img className='rounded-xl object-cover w-40' src='/ceo.png'/>
            </div>
            </div>
        </section><br/>
        {/*Section 2 About */}
        <section>
            <div data-aos="fade-up" className='bg-gray-900 rounded-2xl m-8'>
            <div className='text-center'><br/>
                <h1 className='text-3xl text-blue-500'>About NovaCraft Agency</h1>
                <br/>
                <p className='text-gray-200 p-2 text-start m-3'>
                NovaCraft Agency is a creative digital community focused on learning, creativity, and growth. Our mission is to help passionate individuals improve their skills in Web Development, Video Editing, and Graphic Design through real world practice and teamwork.<br/><br/>

                We believe that talent grows faster in the right environment. That’s why NovaCraft Agency is built to create opportunities where people can learn together, build projects, gain experience, and prepare for a better future in the digital world.<br/><br/>

                Our goal is not only to create modern digital projects but also to build a strong and supportive creative team driven by consistency, innovation, and passion. 🚀<br/>
                <strong className='text-blue-500'>Our Mission : To help individuals learn modern digital skills and turn creativity into real opportunities. </strong>
                </p>
<br/>
            </div>
            </div>
        </section>
        {/* Cards Section */}
        <section>
        <div className='flex flex-wrap justify-center gap-5 m-8 md:justify-between'>
        <div data-aos="zoom-in-up" className='rounded-2xl w-full   p-3 bg-gray-900 '>
        <h1 className='text-blue-500 text-2xl'>What We Do ?</h1>
        <p className='text-gray-100 mt-2'>Web Development ,
Video Editing,
Graphic Designing,
Creative Team Collaboration</p>
        </div>

         <div data-aos="zoom-in-up" className='rounded-2xl  w-full p-3 bg-gray-900 '>
        <h1 className='text-blue-500 text-2xl'>Why Choose Us ?</h1>
        <p className='text-gray-100 mt-2'>Learning Environment ,
           Real Practice Projects , Creative Teamwork,
            Skill Growth Opportunities</p>
          
        
        </div>

        </div>
        </section>
        </main>
    )
}

export default AboutPage 