import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";

const Agence3wala = () => {
    const blackwala = useRef(null)
    const imagePin = useRef(null)
    gsap.registerPlugin(ScrollTrigger)
    
    useGSAP(function(){
        gsap.to(blackwala.current,{
            backgroundColor:"black",
            duration:2,
            scrollTrigger:{
                trigger:blackwala.current,
                // markers:true,
                start:"top center",
                end:"botttom 20%",
                 scrub: true,
            }
        })
    })

    return (
        <div ref={blackwala} className="h-full w-full overflow-hidden relative bg-white">
            <div className="lg:h-[100vh] h-[80vh] w-full pt-10 relative">
                <img ref={imagePin} className="lg:h-screen h-[80vw] object-cover rounded-4xl absolute left-1/2 -translate-x-1/2 top-40 z-10" src="https://k72.ca/uploads/teamMembers/SophieA_640X960-640x960.jpg" />

                <div className="flex w-full lg:mt-[12vw] mt-[50vw]">
                    <div className="moveX1 w-full px-[30vw]">
                        <h1 className="text-[#d3fd30] font-[font500] text-[9vw]">SOPHIE</h1>
                    </div>
                    <div className="moveX1 w-full  px-[30vw]">
                        <h1 className="text-[#d3fd30] font-[font500] text-[9vw]">SOPHIE</h1>
                    </div>
                    <div className="moveX1 w-full  px-[30vw]">
                        <h1 className="text-[#d3fd30] font-[font500] text-[9vw]">SOPHIE</h1>
                    </div>
                </div>

                <div className="flex w-full z-20 lg:bottom-0 bottom-30 right-0 absolute">
                    <div className="moveX2 w-full px-[20vw] flex gap-5 items-center">
                        <h1 className="text-[#d3fd30] font-[font500] text-[9vw]">AUGER</h1>
                        <small className="font-[font500] text-2xl">Conseillère</small>
                    </div>
                    <div className="moveX2 w-full px-[20vw] flex gap-5 items-center">
                        <h1 className="text-[#d3fd30] font-[font500] text-[9vw]">AUGER</h1>
                        <small className="font-[font500] text-2xl">Conseillère</small>
                    </div>

                    <div className="moveX2 w-full flex gap-5 items-center">
                        <h1 className="text-[#d3fd30] font-[font500] text-[9vw]">AUGER</h1>
                        <small className="font-[font500] text-2xl">Conseillère</small>
                    </div>


                </div>


            </div>

            <div className="lg:h-40 h-0 w-full bg-black"></div>

        </div>
    )
}

export default Agence3wala