import AboutCars from './AboutCars/AboutCars'
import HomeCarsSlider from './HomeCarsSlider/HomeCarsSlider'
import './Main.scss'

export default function HomeMain(){
    return <main className='main'>
        <HomeCarsSlider></HomeCarsSlider>
        <AboutCars></AboutCars>
    </main>
}