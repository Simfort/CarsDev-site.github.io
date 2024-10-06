import './Slider.scss'
import slide1 from '../../../../assets/carSlider1.jpg'
import slide2 from '../../../../assets/carSlider2.jpg'
import { useEffect, useRef, useState } from 'react'

export default function HomeCarsSlider(){
    const [slide,setSlide]=useState({current:slide1,next:slide2})
    const divRef=useRef() as any
    useEffect(()=>{
        const timeout=setTimeout(()=>{
            setSlide((val)=>{return {current:val.next,next:val.current}})
        },10000)
        return  ()=>clearTimeout(timeout)
    },[slide])
    return <article className='home-slider'>
        <div ref={divRef} style={{backgroundImage:`url(${slide.current})`}} className='home-slider__images'>
            <button onClick={()=>{
                setSlide({current:slide.next,next:slide.current})
            }}  className='home-slider__button'></button>
        </div>
        <div className='home-slider__about'>
        <div className='home-slider__show'>
                <span style={{background:`${slide.current==slide1?'white':'rgba(128, 128, 128, 0.596)'}`}}></span>
                <span style={{background:`${slide.current==slide2?'white':'rgba(128, 128, 128, 0.596)'}`}}></span>
            </div>
        </div>
    </article>
}