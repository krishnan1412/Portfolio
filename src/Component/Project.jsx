import websiteImg1 from 'https://simplelearningbuckets.s3.us-east-1.amazonaws.com/ecommerce-websites.jpg'
import websiteImg2 from 'https://simplelearningbuckets.s3.us-east-1.amazonaws.com/food-ecommerce.jpg'
import websiteImg3 from 'https://simplelearningbuckets.s3.us-east-1.amazonaws.com/website-blog.jpgg'





export const Project = () => {
  const config = {
    projects:[
      {
        image: websiteImg1 ,
        description:' A Ecommerce website like swiggy, built with react' ,
        link: '#',
      },
      {
        image: websiteImg2 ,
        description:' Food Ecommerce website like swiggy, built with react js and css3' ,
        link: '#',
      },
      {
        image: websiteImg3 ,
        description:' Basic blog website like verger, bulit wiht react js and css3' ,
        link: '#',
      },
    ]
  }

  return (
   
    <section className="flex flex-col px-5 py-20 justify-center bg-secondary text-white" id='project'>
        <div className="w-full flex flex-col px-10 mb-5 ">
          
            <h1 className=" text-white text-6xl font-hero-font  ">Projects</h1>
            <p className=''>These are some of my best project using with react</p>
        </div>
        <div className="w-full flex flex-col md:flex-row px-10 gap-5">
          {config.projects.map((project, index)=>(
            <div key={index} className='relative'>
            <img className='h-[200px]' src={project.image} />
           <div className='project-desc'>
            <p className='text-center  text-white py-5'> {project.description}</p>
            <div className='flex justify-center'>
            <a className='btn mt-6' href={project.link} target='_blank'>View Project</a>
           </div>
           </div>
          
           </div>
          ))}
        
            {/* </div><div className='relative'>
            <img className='h-[200px]' src={websiteImg2} />
            <div className='project-desc'>
              <p className='text-center text-slate-900 py-5'>Food Ecommerce website</p>
            </div>
            </div>
            <div className='relative'>
            <img className='h-[200px]' src={websiteImg3} />
            <div className='project-desc'>
              <p className='text-center  text-slate-900 py-5'>Basic blog website</p>
            </div> */}
            </div>
            
    </section>
  )
}
