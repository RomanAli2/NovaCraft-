
function TeamPage(){
    const OurTeam=[
        {Name:'Roman Ali' , Title:'Founder & CEO' , About:'Web Development , Guiding strategic, operational and innovation-driven initiatives' ,img:'/team/roman.jpeg',portfolio:'https://romanali.vercel.app/'},
        {Name:'Ali Zain' , Title:'Co-Founder & CMO' , About:'Video Editor , Chief Marketing Officer & Social Manager',img:'/team/aliz.jpeg',portfolio:'https://alizain-nu.vercel.app/'},
        {Name:'Aoun Ashraf' , Title:'CFO & Risk Management' , About:'Graphics Designer , Chief Financial Officer & Financial Planning & Risk Management' ,img:'/team/aoun.jpeg',portfolio:'https://aoun-ashraf.vercel.app/'},
        {Name:'Abdullah Mustafa' , Title:'COO & Team Handler' , About:'Video Editor , Chief Operating Officer &  Team Handler',img:'/team/abdullah.jpeg',portfolio:'https://abdullah-mustafa.vercel.app/'},

    ]
    return(<>
    <main className="min-h-screen pt-30 bg-black">
<div className="bg-gray-900 m-8 rounded-2xl"><br/>
<h1 className="text-blue-500 text-center text-3xl font-bold">Our Team</h1><br/>
<div className="grid grid-cols-1 gap-4 m-3  md:grid-cols-4">
    {OurTeam.map((items,index)=>(
    <div data-aos="fade-up" className="bg-gray-800 flex text-center flex-col justify-center rounded-xl "><br/>
    <div className="flex justify-center"><img className="rounded-full w-35 h-35" src={items.img}/></div>
    <span ><h1 className="text-lg font-bold text-blue-500">{items.Name}</h1></span>
    <p className="text-sm font-bold text-gray-100">{items.Title}</p><br/>
    <p className="text-xs m-2 text-gray-100">{items.About}</p>
    <a href={items.portfolio} target="_blank" className="px-2 absolute top-0 right-0 hover:bg-blue-900 py-1.5 bg-gray-700 text-white rounded-md"><i className="fa-solid fa-arrow-right-to-bracket"></i></a>
   <br/>
    </div>
))}<br/>
</div>

</div>

    </main>

    </>)
}

export default TeamPage