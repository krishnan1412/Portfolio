import AboutImg from '/images/about.png'
import 'animate.css';

export const About = () => {
  return (
    <>
    <section className='flex flex-col md:flex-row bg-primary px-5 py-5' id='about'>
        <div className='md:w-1/2 py-5 animate-zoomIn timeline '>
            <img src={AboutImg} />
        </div>
        <div className='w-full md:w-1/2 flex  justify-center'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='animate__animated animate__fadeIn timeline animate__delay-150 text-4xl text-white font-hero-font border-b-4  mb-5 w-[180px] font-bold'>About Me</h1>          
            <p className='pb-6'>Hi my name is krishnan, I am full stack web developer website with react js and Tailwing CSS</p>
            <p>I am proficient in frontend skills like Reasct js, Redux, Redux Tool Kids, Axios, Tailwing CSS</p>
            </div></div>
    </section>
    </>
  )
}
