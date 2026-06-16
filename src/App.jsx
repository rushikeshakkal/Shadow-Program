import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {


  useEffect(() => {
    const elements = document.querySelectorAll('.animate-left, .animate-right')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15, 
      }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      
      <section className="navbar h-20 bg-linear-to-r from-pink-500 via-cyan-950 to-purple-900 flex items-center justify-center">
        <h1 className="logo text-2xl font-bold text-green-300 ml-20">
          Shadow Program
        </h1>
        <ul className="nav-links text-white flex justify-end gap-20 flex-1 mr-20">
          <li><a href="#Home">Home</a></li>
          <li><a href="#Gallery" className="active">Gallery</a></li>
          <li><a href="#Login">Login</a></li>
          <li><a href="#About">About</a></li>
        </ul>
      </section>

      
      <section id="hero" className="Hero w-full h-screen flex flex-col items-center justify-center gap-6">
        <h1 className="text-white text-center px-8">
          Explore the World of Industry
        </h1>
        <p className="px-8">
          Unlock a world of opportunities through immersive industry visits and
          professional interactions. Explore leading companies, gain practical
          insights, and take the first step toward your future career. 🚀
        </p>
      </section>

      
      <section
        id="About"
        className="w-full min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center gap-16 py-24 px-8"
      >
        <h2 className="text-4xl font-bold text-center text-cyan-300">
          Why Shadow Program?
        </h2>

        
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl w-full">
          <div className="animate-left flex-1 bg-linear-to-br from-cyan-800 to-purple-900 rounded-2xl h-60 flex items-center justify-center text-2xl font-bold text-white">
            🏭 Industry Visits
          </div>
          <div className="animate-right flex-1 space-y-4">
            <h3 className="text-2xl font-bold text-cyan-300">Real-World Exposure</h3>
            <p className="text-gray-300 leading-relaxed">
              Step inside leading companies and see how industries actually work.
              Our curated visits give you a front-row seat to innovation,
              operations, and the people who drive them.
            </p>
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 max-w-5xl w-full">
          <div className="animate-right flex-1 bg-linear-to-br from-pink-800 to-orange-700 rounded-2xl h-60 flex items-center justify-center text-2xl font-bold text-white">
            🤝 Mentorship
          </div>
          <div className="animate-left flex-1 space-y-4">
            <h3 className="text-2xl font-bold text-pink-300">Connect with Professionals</h3>
            <p className="text-gray-300 leading-relaxed">
              Build relationships with experienced mentors who've walked the path
              you're aiming for. Get guidance, feedback, and a network that opens
              doors before you even graduate.
            </p>
          </div>
        </div>

        
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl w-full">
          <div className="animate-left flex-1 bg-linear-to-br from-green-800 to-teal-700 rounded-2xl h-60 flex items-center justify-center text-2xl font-bold text-white">
            🚀 Career Launch
          </div>
          <div className="animate-right flex-1 space-y-4">
            <h3 className="text-2xl font-bold text-green-300">Launch Your Future</h3>
            <p className="text-gray-300 leading-relaxed">
              Turn exploration into opportunity. Shadow Program alumni land
              internships and roles faster — because they arrive with clarity,
              connections, and confidence.
            </p>
          </div>
        </div>
      </section>

      <section id='companies' className='w-full min-h-screen bg-gray-950 text-white'>
          <h2 className='text-4xl font-bold text-center pt-30 text-yellow-300'>Explore the Companies Behind Innovation</h2>
          <p className='text-center pt-8'>Discover leading organizations across technology, manufacturing, finance, and consulting through immersive industry visits and real-world exposure.</p>

          <div id='industries' className='flex flex-wrap min-h-screen px-18 pt-30'>
            <div id='industries-name' className='w-100 h-85 bg-gray-600'>
              <div><img src="https://marathiimages.timesnownews.com/thumb/msid-118247647,width-1280,height-720,resizemode-75/118247647.jpg" alt="" /></div>
              <div>
                <h2 className='text-2xl pt-5 font-bold pl-8'> <a className='text-cyan-300'>G</a><a className='text-red-500'>o</a><a className='text-yellow-300'>o</a><a className='text-cyan-300'>g</a><a className='text-green-500'>l</a><a className='text-red-500'>e</a></h2>
                <p className='pl-5 pt-2'><a className='text-red-300'>Venue</a>: Google Office , BKC , Mumbai</p>
              </div>
            </div>
            <div id='industries-name' className='w-100 h-85 bg-gray-600'>
              <div><img src="https://www.corning.com/microsites/hr/careers/images/1184_1184_pune_plant.jpg.transform/mobile-360/img.jpg" className='w-100 h-55 bg-cover' /></div>
              <div>
                <h2 className='text-2xl pt-5 font-bold pl-8 text-cyan-300'>CORNING</h2>
                <p className='pl-5 pt-2'><a className='text-red-300'>Venue</a>: Varale ,Pune Maharashtra</p>
              </div>
            </div>
            <div id='industries-name' className='w-100 h-85 bg-gray-600'>
              <div><img src="https://i0.wp.com/opportunitycell.com/wp-content/uploads/2022/09/04-04-2019-1113.jpg?fit=668%2C446&ssl=1" className='w-100 h-55' /></div>
              <div>
                <h2 className='text-2xl pt-5 font-bold pl-8 text-green-500'>Deloitte</h2>
                <p className='pl-5 pt-2'><a className='text-red-300'>Venue</a>: Lower Parel, Mumbai</p>
              </div>
            </div>
            
          </div>

          <div className='Others'>
            <div id='industries-name' className='w-100 h-85 bg-gray-600'>
              <div><img src="https://i0.wp.com/opportunitycell.com/wp-content/uploads/2023/03/Screenshot-2023-03-28-at-10.17.15-PM.png?fit=1568%2C1244&ssl=1" className='w-100 h-55' /></div>
              <div>
                <h2 className='text-2xl pt-5 font-bold pl-8 text-green-500'>TCS</h2>
                <p className='pl-5 pt-2'><a className='text-red-300'>Venue</a>: TCS House, Mumbai</p>
              </div>
            </div>
            <div id='industries-name' className='w-100 h-85 bg-gray-600'>
              <div><img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/IT7A2275_copy_%28cropped%29.jpg" className='w-100 h-55' /></div>
              <div>
                <h2 className='text-2xl pt-5 font-bold pl-8 text-green-500'>NSE</h2>
                <p className='pl-5 pt-1'><a className='text-red-300'>Venue</a>: Bandra Kurla Complex (BKC), Mumbai</p>
              </div>
            </div>
          </div>
            
      </section>



    </>
  )
}

export default App
