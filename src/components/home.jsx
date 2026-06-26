import React from 'react'
import heroImage from '../assets/img/hero.jpg'
import htmlCard from '../assets/img/html-card.png'
import cssCard from '../assets/img/css-card.png'
import jsCard from '../assets/img/js-card.png'

const Home = () => {
  return (
    <div className='mx-5 flex flex-col md:gap-15 sm:gap-7 gap-5'>
    <section className='sm:flex-row my-5 mx-5 flex flex-col gap-5 sm:justify-between'>
        <div className=' text-[#F8F9FA] order-2 md:order-1 w-full sm:w-[40%] flex flex-col justify-center gap-3 text-center text-left'>
          <div className=' text-2xl font-bold sm:text-4xl'>Learn Web Development</div>
          <p className='w-full'>Explore our growing collection of courses on key web design and development subjects. An industry expert has written each course, helped by members of the Chrome team. Follow the modules sequentially, or dip into the topics you most want to learn about. </p>
        </div>
      <img
        src={heroImage}
        alt="hero"
        className='w-full order-1 md:order-2 md:w-[50%] h-auto rounded-xl'
      />
    </section>
    <section className='flex  text-[#F8F9FA] flex-col gap-7'>
      <div className=' sm:text-4xl text-3xl font-bold'>Courses</div>
      <div className='flex sm:flex-row flex-col md:gap-7 gap-5'>

      <div className='h-100 text-[#F8F9FA] w-85 border border-[#AFB2B6] flex flex-col p-3 gap-2 sm:gap-4 bg-[#0C1A27] rounded-xl'>
        <img className='w-full mx-auto ' src={htmlCard} alt="card" />
        <span className=' text-xl font-bold ' >Learn HTML</span>
        <p>A solid overview of HTML for developers, from novice to expert level HTML. </p>
        <button className='border border-blue-500 w-[50%] mx-auto rounded-xl text-blue-500 ' >Start Course</button>
      </div>
      <div className='h-100 text-[#F8F9FA] w-85 border border-[#AFB2B6] flex flex-col p-3 gap-2 sm:gap-4 bg-[#0C1A27] rounded-xl'>
        <img className='w-full mx-auto ' src={cssCard} alt="card" />
        <span className=' text-xl font-bold ' >Learn CSS</span>
        <p>A guide to CSS with modules covering everything from accessibility to z-index. </p>
        <button className='border border-blue-500 w-[50%] mx-auto rounded-xl text-blue-500 ' >Start Course</button>
      </div>
      <div className='h-100 text-[#F8F9FA] w-85 border border-[#AFB2B6] flex flex-col p-3 gap-2 sm:gap-4 bg-[#0C1A27] rounded-xl'>
        <img className='w-full mx-auto ' src={jsCard} alt="card" />
        <span className=' text-xl font-bold ' >Learn Javascript</span>
        <p>An in-depth course on the basics of JavaScript. </p>
        <button className='border border-blue-500 w-[50%] mx-auto rounded-xl text-blue-500 ' >Start Course</button>
      </div>
    </div>
    </section>

    <section className='w-full h-75'>

    </section>
    </div>

  )
}

export default Home