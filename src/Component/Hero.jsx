// import HeroImg from '/images/hero.png'
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineInstagram  } from "react-icons/ai";
// import { MdOutlineFacebook } from "react-icons/md";

export const Hero = () => {
  const config = {
    subtitle:'Im a full-stack developer'
  }
  return (
    <>
    <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center '>
        <div className='md:w-1/2 flex flex-col'>
        <h1 className=' text-white text-6xl font-hero-font'>Hi,<br /> Im Krishnan
        <p className='text-2xl'>{config.subtitle}</p>
        </h1>
        <div className='flex py-10 gap-5'>
            <a className='hover:text-white cursor-pointer' href="https://x.com/Krishnan1428/" target='_blank'><AiOutlineTwitter size={40} /></a>
            <a className='hover:text-white cursor-pointer' href="https://www.instagram.com/krishnan_roman/" target='_blank'><AiOutlineInstagram  size={40} /></a>
            <a className='hover:text-white cursor-pointer' href="https://www.linkedin.com/in/krishnan-u-aab88623b/" target='_blank'><AiOutlineLinkedin size={40} /></a>
        </div>
        </div>
        <img className='md:w-1/3 animate-rotateIn' src=https://simplelearningbuckets.s3.us-east-1.amazonaws.com/hero.png />
    </section>
    </>
  )
}
