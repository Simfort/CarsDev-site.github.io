import AboutCars from './AboutCars/AboutCars'
import HomeCarsCard from './AboutCars/HomeCarsCard/HomeCarsCard'
import HomeCarsSlider from './HomeCarsSlider/HomeCarsSlider'
import './Main.scss'

export default function HomeMain(){
    return <main className='main'>
        <HomeCarsSlider></HomeCarsSlider>
        <AboutCars></AboutCars>
        <HomeCarsCard></HomeCarsCard>
    </main>
}