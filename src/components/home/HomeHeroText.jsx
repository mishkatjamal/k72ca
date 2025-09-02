import React from 'react'
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className='font-[font300] text-[9.5vw] text-center leading-[9vw] uppercase lg:pt-3 pt-[50vh]'>

        <div>L'étincelle</div>

        <div className='flex items-center justify-center'>
            qui
            <div className='h-[7vw] w-[15vw] -mt-5 object-cover rounded-full overflow-hidden'><Video/></div>
            génère
            </div>

        <div>la créativité</div>

    </div>
  )
}

export default HomeHeroText