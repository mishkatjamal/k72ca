import React from 'react'

const Projectcomponents = (props) => {
   
  return (
    
            <>
             <div className="h-full lg:w-1/2 w-full">

                <div className="hover-karo h-full w-full relative overflow-hidden hover:rounded-[30px] transition-all">

                    <img className="h-full w-full object-cover transition-all" src={props.image1} alt="" />

                    <div className='show-karo opacity-0 absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/40 transition-all'>

                        <h2 className='lg:text-5xl text-2xl font-[font500] uppercase border-3 border-white rounded-full lg:px-5 px-2 lg:pt-2'>Voir le Projets</h2>

                    </div>

                </div>

            </div>
             <div className="h-full lg:w-1/2 w-full">

                <div className="hover-karo h-full w-full relative overflow-hidden hover:rounded-[30px] transition-all">

                    <img className="h-full w-full object-cover transition-all" src={props.image2} alt="" />

                    <div className='show-karo opacity-0 absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/40 transition-all'>

                        <h2 className='lg:text-5xl text-2xl font-[font500] uppercase border-3 border-white rounded-full lg:px-5 px-2 lg:pt-2'>Voir le Projets</h2>

                    </div>

                </div>

            </div>
            </>
           
  )
}

export default Projectcomponents