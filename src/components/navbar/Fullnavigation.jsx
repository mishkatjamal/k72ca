import React, { useContext, useRef } from 'react'
import Navcontext, { NavbarContext } from '../../context/Navcontext'
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";

const Fullnavigation = () => {
    const [nav, setnav] = useContext(NavbarContext)
    const fullScreenRef = useRef(null)
    const stairParentref = useRef(null)

    useGSAP(function () {
        const tl = gsap.timeline()
        
        tl.pause()
        if (nav) {
            fullScreenRef.current.style.display = "block",
                tl.play()
        } else {
            fullScreenRef.current.style.display = "none",
                tl.reverse()
        }

    }, [nav])

    return (
        <div ref={fullScreenRef} className='h-screen w-full bg-black fixed z-50 overflow-hidden
 '>

            <div className='flex justify-between'>
                <div className='w-23 p-3'>
                    <svg className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                        <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
                </div >

                <div onClick={()=>{
                    setnav(false)
                }} className='w-20 h-30 relative cursor-pointer mt-1 mr-2'>
                    <div className='bg-[#d3FD50] h-full w-0.5 absolute origin-top -rotate-45'></div>
                    <div className='bg-[#d3FD50] h-full w-0.5 absolute origin-top rotate-45   right-0'></div>
                </div>
            </div>

            <div className='h-full w-full text-white pt-10 overflow-hidden'>

                <div>
                    <div className='link relative border-t-1 border-white'>
                        <h1 className='font-[font500] text-[8vw] uppercase text-center leading-[7vw] pt-2'>Projects</h1>
                        <div className='movelink absolute top-0 bg-[#D3FD50] text-black flex'>
                            <div className='moveX flex'>
                                <h2 className='font-[font500] text-[8vw] uppercase text-center leading-[7vw] pt-2 whitespace-nowrap'>pour Tout Voir</h2>
                                <img className='lg:h-28 h-9 lg:w-72 w-20 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" />
                                <h2 className='font-[font500] text-[8vw] uppercase text-center leading-[7vw] pt-2 whitespace-nowrap'>pour Tout Voir</h2>
                                <img className='lg:h-28 h-9 lg:w-72 w-20 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" />
                            </div>
                            <div className='moveX flex'>
                                <h2 className='font-[font500] text-[8vw] uppercase text-center leading-[7vw] pt-2 whitespace-nowrap'>pour Tout Voir</h2>
                                <img className='lg:h-28 h-9 lg:w-72 w-20 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" />
                                <h2 className='font-[font500] text-[8vw] uppercase text-center leading-[7vw] pt-2 whitespace-nowrap'>pour Tout Voir</h2>
                                <img className='lg:h-28 h-9 lg:w-72 w-20 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className='link relative border-t-1 border-white'>
                        <h1 className='font-[font500] text-[8vw] uppercase text-center leading-[7vw] pt-2'>agence</h1>
                        <div className='movelink absolute top-0 bg-[#D3FD50] text-black flex'>
                            <div className='moveX flex'>
                                <h2 className='font-[font500] text-[8vw] uppercase text-center leading-[7vw] pt-2 whitespace-nowrap'>pour Tout saviour</h2>
                                <img className='lg:h-28 h-9 lg:w-72 w-20 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/teamMembers/PLP_640x280-640x290.jpg" />
                                <h2 className='font-[font500] text-[8vw] uppercase text-center leading-[7vw] pt-2 whitespace-nowrap'>pour Tout saviour</h2>
                                <img className='lg:h-28 h-9 lg:w-72 w-20 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/teamMembers/MEGGIE_640X290_2-640x290.jpg" />
                            </div>
                            <div className='moveX flex'>
                                <h2 className='font-[font500] text-[8vw] uppercase text-center leading-[7vw] pt-2 whitespace-nowrap'>pour Tout saviour</h2>
                                <img className='lg:h-28 h-9 lg:w-72 w-20 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/teamMembers/PLP_640x280-640x290.jpg" />
                                <h2 className='font-[font500] text-[8vw] uppercase text-center leading-[7vw] pt-2 whitespace-nowrap'>pour Tout saviour</h2>
                                <img className='lg:h-28 h-9 lg:w-72 w-20 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/teamMembers/MEGGIE_640X290_2-640x290.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className='link relative border-t-1 border-white'>
                        <h1 className='font-[font500] text-[8vw] uppercase text-center leading-[7vw] pt-2'>contact</h1>
                        <div className='movelink absolute top-0 bg-[#D3FD50] text-black flex'>
                            <div className='moveX flex'>
                                <h2 className='font-[font500] text-[8vw] uppercase text-center leading-[7vw] pt-2 whitespace-nowrap'>Pour envoyer un fax</h2>
                                <img className='lg:h-28 h-9 lg:w-72 w-20 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" />
                                <h2 className='font-[font500] text-[8vw] uppercase text-center leading-[7vw] pt-2 whitespace-nowrap'>Pour envoyer un fax</h2>
                                <img className='lg:h-28 h-9 lg:w-72 w-20 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" />
                            </div>
                            <div className='moveX flex'>
                                <h2 className='font-[font500] text-[8vw] uppercase text-center leading-[7vw] pt-2 whitespace-nowrap'>Pour envoyer un fax</h2>
                                <img className='lg:h-28 h-9 lg:w-72 w-20 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" />
                                <h2 className='font-[font500] text-[8vw] uppercase text-center leading-[7vw] pt-2 whitespace-nowrap'>Pour envoyer un fax</h2>
                                <img className='lg:h-28 h-9 lg:w-72 w-20 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className='link relative border-y-1 border-white'>
                        <h1 className='font-[font500] text-[8vw] uppercase text-center leading-[7vw] pt-2'>blogue</h1>
                        <div className='movelink absolute top-0 bg-[#D3FD50] text-black flex'>
                            <div className='moveX flex'>
                                <h2 className='font-[font500] text-[8vw] uppercase text-center leading-[7vw] pt-2 whitespace-nowrap'>Lire les articles</h2>
                                <img className='lg:h-28 h-9 lg:w-72 w-20 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" />
                                <h2 className='font-[font500] text-[8vw] uppercase text-center leading-[7vw] pt-2 whitespace-nowrap'>Lire les articles</h2>
                                <img className='lg:h-28 h-9 lg:w-72 w-20 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png" />
                            </div>
                            <div className='moveX flex'>
                                <h2 className='font-[font500] text-[8vw] uppercase text-center leading-[7vw] pt-2 whitespace-nowrap'>Lire les articles</h2>
                                <img className='lg:h-28 h-9 lg:w-72 w-20 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/blog/blogImg/ier.com-16107673482102220.gif" />
                                <h2 className='font-[font500] text-[8vw] uppercase text-center leading-[7vw] pt-2 whitespace-nowrap'>Lire les articles</h2>
                                <img className='lg:h-28 h-9 lg:w-72 w-20 shrink-0 rounded-full object-cover' src="https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png" />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Fullnavigation