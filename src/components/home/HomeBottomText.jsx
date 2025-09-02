import React from 'react'
import { Link } from "react-router-dom";

const HomeBottomText = () => {
  return (
    <div className='flex justify-center gap-5'>
        <Link className='font-[font500] text-[6vw] border-3 border-white rounded-full lg:px-10 px-2 uppercase lg:leading-20 pb-0 lg:pt-3 pt-1 hover:border-[#D3FD50] hover:text-[#D3FD50]' to='/projects'>Projects</Link>
        <Link className='font-[font500] text-[6vw] border-3 border-white rounded-full lg:px-10 px-2 uppercase lg:leading-20 pb-0 lg:pt-3 pt-1 hover:border-[#D3FD50] hover:text-[#D3FD50]' to='/agence'>Agence</Link>
    </div>
  )
}

export default HomeBottomText