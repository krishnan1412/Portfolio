

export const Contact = () => {
const config = {
    email: 'krishnan27roman@gmail.com',
    phone: 6384668811,
}

  return (
     <>
        <section className='flex flex-col bg-secondary px-5 py-32' id="contact">
                <div className='flex flex-col items-center text-white'>
                    
                    <h1 className='animate__animated animate__heartBeat timeline animation-timing:1000 text-4xl text-purple-900 border-#7c117c font-hero-font border-b-4 border-slate-900  mb-5 w-[135px] font-bold'>Contact</h1>          
                    <p className='pb-6'>If you want to discuss more in detail, please contact</p>
                    <p className="py-4"><span className="font-bold">Email:</span><a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_bhlank">{config.email}</a></p>
                    <p className="py-4"><span className="font-bold">Phone:</span>{config.phone}</p>
                    
                    </div>
            </section>
        </>
  )
}
