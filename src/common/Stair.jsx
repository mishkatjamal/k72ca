
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { useRef } from "react";
import { useLocation } from 'react-router-dom';
const Stair = (props) => {
    const currentLocation = useLocation()
    const stairParentref = useRef(null)
    const pageref = useRef(null)

  useGSAP(function(){
    const tl = gsap.timeline()
    tl.to(stairParentref.current,{
      display:"block",
    })
    tl.from(".stair",{
      height:0,
      stagger:{
        amount:-0.25,
      }
    })
    tl.to(".stair",{
      y:"100%",
      stagger:{
        amount:-0.25,
      },
    })
     tl.to(stairParentref.current,{
      display:"none",
    })
     tl.to(".stair",{
      y:"0%",
    })

    gsap.from(pageref.current,{
        opacity:0,
        delay:1.3,
    })

  },[currentLocation])
  
  return (

        <div>
             <div ref={stairParentref} className='h-screen w-full fixed top-0 z-10'>
       <div className='h-full w-full flex'>
        <div className='stair bg-black h-full w-1/5'></div>
        <div className='stair bg-black h-full w-1/5'></div>
        <div className='stair bg-black h-full w-1/5'></div>
        <div className='stair bg-black h-full w-1/5'></div>
        <div className='stair bg-black h-full w-1/5'></div>
      </div>
     </div>
     <div ref={pageref}>
        {props.children}
        </div>
        </div>
  )
}

export default Stair