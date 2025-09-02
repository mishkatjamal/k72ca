import React from 'react'
import Projectcomponents from './projectscomponents/Projectcomponents'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react'


const Projectscards = () => {
     const projects = [
        {
            image1:"https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
            image2:"https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg"
        },
        {
            image1:"https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
            image2:"https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg"
        },
         {
            image1:"https://k72.ca/uploads/caseStudies/Opto_Reseau_Brand/opto_thumbnail2-1280x960.jpg",
            image2:"https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg"
        },
        {
            image1:"https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
            image2:"https://k72.ca/uploads/caseStudies/A_table/thumbnailimage_atable2-1280x960.jpg"
        },
    ]

    gsap.registerPlugin(ScrollTrigger);
    useGSAP(function(){
        gsap.from('.hero',{
            height:"180px",
            stagger:{
                amount:1
            },
            scrollTrigger:{
                trigger:".hero",
                // markers:true,
                start:"top 60%",
                end:"top -230%",
                scrub:true,
                
            }
        })
    })






  return (
        <div className='py-[15vw] p-5'>
           <div>
             <h1 className="text-[12vw] font-[font500] uppercase text-black">Projets</h1>
           </div>
        <div className='lol -mt-18'>

           {projects.map(function(elem,indx){
            return <div key={indx} className='hero overflow-hidden lg:h-[500px] h-[200px] w-full flex lg:flex-row flex-col gap-3 lg:mt-3 mt-[20vh]'> 
                
                    <Projectcomponents image1={elem.image1} image2={elem.image2}/>
                    
                </div>
           })}
           
        </div>
    </div>
  )
}

export default Projectscards