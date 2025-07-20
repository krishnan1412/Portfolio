// import ResumeImg from '/images/resume.jpg'

export const Resume = () => {
const config = {
    link: "https://www.bing.com/ck/a?!&&p=827bd2bbcab9ce193d15aaeac09d658819dbffb22e56be4abddd2ff0384b58e5JmltdHM9MTczNTk0ODgwMA&ptn=3&ver=2&hsh=4&fclid=3164f070-fd75-6a24-124b-e3f2fcd36ba0&psq=sample+pdf+link&u=a1aHR0cHM6Ly90b29sc2ZhaXJ5LmNvbS90b29scy9kb2N1bWVudC10ZXN0L3NhbXBsZS1wZGYtZmlsZXM&ntb=1"
}

  return (
    <>
    <section className='flex flex-col md:flex-row bg-primary px-5 py-5 ' id='resume'>
            <div className='md:w-1/2 py-5 flex justify-center md:justify-end animate__animated animate__rotateIn transition delay-[50s] timeline'>
                <img className='w-[300px]' src=https://simplelearningbuckets.s3.us-east-1.amazonaws.com/resume.jpg />
            </div>
            <div className='w-full md:w-1/2 flex  justify-center'>
                <div className='flex flex-col justify-center text-white '>
                <h1 className='animate__animated animate__tada duration-500 timeline text-4xl text-white font-hero-font border-b-4  mb-5 w-[135px] font-bold'>Resume</h1>          
                <p className='pb-6'>You can view my resume<a href={config.link} target='_blank' className='btn'>Download</a></p>
                
                </div></div>
        </section>
    </>
  )
}
