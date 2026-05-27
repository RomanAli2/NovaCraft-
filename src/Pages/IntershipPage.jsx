import { useState,useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
function IntershipPage() {

  const [Intershiptitle, setIntershipTitle] = useState('');
  const [UserName, setUserName] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [UserEmail, setUserEmail] = useState('');
  const [userExperience, setUserExperience] = useState('');
  const [userForm, setUserForm] = useState(false);
 useEffect(()=>{
    AOS.init()
    },[])
  const Intership = [
    {
      img: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20201111215809/How-to-Become-a-Front-End-Developer-in-2020.png',
      Title: 'Frontend Development',
      about: 'Html, css, javascript, vue.js or react.js and tailwind css',
    },

    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBnLB30qZymgWqwpf0WyBtysQU-x7uUr9J_w&s',
      Title: 'Video Editing',
      about: 'Capcut, Canva, AI stories, youtube automation and AI cartoon',
    },

    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LX7EvUmCzbSxqQhao1neJWCBwAHLiopUag&s',
      Title: 'Graphic Designing',
      about: 'Adobe illustrator, photoshop, design using AI and Canva',
    }
  ];
const [showPopup, setShowPopup] = useState(false)
  // Open Form
  const Openform = (title) => {
    setIntershipTitle(title);
    setUserForm(true);
  };

  // Close Form
  const CloseForm = () => {
    setUserForm(false);
  };

  // Submit Form
  return (
    <main className="min-h-screen bg-black px-4 py-30">

      <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
        Internship Opportunities
      </h1>

      <p className="text-gray-300 text-center mt-4">
        Join NovaCraft Agency and improve your digital skills 🚀
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 max-w-7xl mx-auto">

        {Intership.map((items, index) => (

          <div
            key={index}
            data-aos="fade-up"
            className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500 "
          >

            <img
              src={items.img}
              className="w-full h-52 object-cover"
            />

            <div className="p-6">

              <h1 className="text-2xl font-bold text-blue-500">
                {items.Title}
              </h1>

              <p className="text-gray-200 mt-4 leading-7">
                {items.about}
              </p>

              <button
                onClick={() => Openform(items.Title)}
                className="mt-6 px-5 py-2 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white cursor-pointer"
              >
                Apply Now
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* Form Modal */}
      {userForm && (

        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">

          <div className="bg-gray-900 w-full max-w-2xl rounded-2xl p-8 border border-gray-700">

            <div className="flex items-center justify-between">

              <h1 className="text-3xl font-bold text-blue-500">
                Apply For Internship
              </h1>

              <button
                onClick={CloseForm}
                className="text-white text-2xl cursor-pointer"
              >
                ✕
              </button>

            </div>

            <form
            action='https://formspree.io/f/xykvbolq'
            method="POST"
            target="_blank"
            onSubmit={() => {
setShowPopup(true)

   
setTimeout(() => {
 setUserName('');
    setUserEmail('');
    setUserNumber('');
    setUserExperience('');
setShowPopup(false)
},3000)}}
              className="flex flex-col gap-5 mt-8"
            >

              <input
                type="text"
                value={Intershiptitle}
                readOnly
                name="Title"
                className="w-full border border-gray-600 bg-gray-800 text-white p-4 rounded-xl outline-none"
              />

              <input
                type="text"
                placeholder="Full Name"
                value={UserName}
                name="Name"
                onChange={(e) => setUserName(e.target.value)}
                className="w-full border border-gray-600 bg-gray-800 text-white p-4 rounded-xl outline-none"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                value={UserEmail}
                name="Email"
                onChange={(e) => setUserEmail(e.target.value)}
                className="w-full border border-gray-600 bg-gray-800 text-white p-4 rounded-xl outline-none"
                required
              />

              <input
                type="tel"
                placeholder="WhatsApp Number"
                value={userNumber}
                name="whatsapp number"
                onChange={(e) => setUserNumber(e.target.value)}
                className="w-full border border-gray-600 bg-gray-800 text-white p-4 rounded-xl outline-none"
                required
              />

              <input
                type="text"
                placeholder="Experience Year"
                value={userExperience}
                name="experience"
                onChange={(e) => setUserExperience(e.target.value)}
                className="w-full border border-gray-600 bg-gray-800 text-white p-4 rounded-xl outline-none"
              />

              <button
             
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 transition text-white py-4 rounded-xl font-semibold cursor-pointer"
              >
                Submit Application
              </button>

            </form>

          </div>

        </div>

      )}
{
showPopup && (

<div className="fixed top-5 right-5 bg-green-600 text-white px-6 py-4 rounded-xl shadow-2xl z-50 animate-bounce">

Form Successfully Submitted ✅

</div>

)
}
    </main>
  );
}

export default IntershipPage;