import React from 'react'
import { useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import Agencenichewala from '../components/agence/Agencenichewala';
import Agence3wala from '../components/agence/Agence3wala';

const Agence = () => {

    gsap.registerPlugin(ScrollTrigger)
    const imageDivRef = useRef(null)
    const imageRef = useRef(null)
    const imageArray = [
        "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
        "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
        "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
        "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
        "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
        "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
        "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
        "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
        "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
        "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
        "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
        "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
        "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
        "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg",
    ]
    

    // useGSAP(function(){
    //     let mm = gsap.matchMedia();
    //     gsap.to(imageDivRef.current,{
    //         scrollTrigger:{
    //             trigger:imageDivRef.current,
    //             start:"top 15%",
    //             end:"top -150%",
    //             pin:true,
    //             pinSpacing:true,
    //             pinReparent:true,
    //             scrub:1,
    //             anticipatePin:1,
    //             invalidateOnRefresh:true,
    //             onUpdate:(elem)=>{
    //                 let imageIndx;
    //                  if (elem.progress<1) {
    //                     imageIndx = Math.floor(elem.progress * imageArray.length);
    //                  } else {
    //                     imageIndx = imageArray.length-1
    //                  }
    //                 imageRef.current.src = imageArray[imageIndx]
                    
    //             }
    //         }
    //     })

        
    // })

    useGSAP(function(){
  let mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    // Desktop
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        start:"top 15%",
        end:"top -150%",
        pin:true,
        pinSpacing:true,
        pinReparent:true,
        scrub:1,
        anticipatePin:1,
        invalidateOnRefresh:true,
        onUpdate:(elem)=>{
          let imageIndx;
          if (elem.progress<1) {
            imageIndx = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndx = imageArray.length-1
          }
          imageRef.current.src = imageArray[imageIndx]
        }
      }
    })
  });

  mm.add("(max-width: 1023px)", () => {
    // Mobile / Tablet
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        start:"top 20%",
        end:"top -50%",  // 👈 mobile me pehle hi khatam kar do
        pin:true,
        pinSpacing:true,
        scrub:1,
        invalidateOnRefresh:true,
        onUpdate:(elem)=>{
          let imageIndx;
          if (elem.progress<1) {
            imageIndx = Math.floor(elem.progress * imageArray.length);
          } else {
            imageIndx = imageArray.length-1
          }
          imageRef.current.src = imageArray[imageIndx]
        }
      }
    })
  });
})


    return (
        <div>
                    <div className='section1 py-1 relative z-1'>
            <div ref={imageDivRef} className='absolute lg:top-30 top-50 lg:left-[30%] left-[20%] lg:h-[20vw] h-[70vw] lg:w-[15vw] w-[50vw]  rounded-xl overflow-hidden'>
                <img ref={imageRef} className='h-full w-full object-cover' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"  />
            </div>
            <div className='relative text-black font-[font500] z-2'>
            <div className='text-center mt-[50vh]'>
                <h1 className='text-[20vw] uppercase leading-[18vw]'>Soixan7e<br />
                    Douze
                </h1>
            </div>
            <div className='mt-[3vw] lg:pl-[40%] pl-5'>
                <p className='text-[3.5vw] leading-[3.5vw] '>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
            </div>
            </div>
        </div>
        <div className='sectoin2 h-screen'>
            <Agencenichewala/>
        </div>
        <Agence3wala/>
        </div>
    )
}

export default Agence