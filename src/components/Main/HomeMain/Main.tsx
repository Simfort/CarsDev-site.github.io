import HomeCarsCard from './HomeCarsCard/HomeCarsCard'
import HomeCarsSlider from './HomeCarsSlider/HomeCarsSlider'
import './Main.scss'

export default function HomeMain(){
    return <main className='main'>
        <HomeCarsSlider></HomeCarsSlider>
        <HomeCarsCard></HomeCarsCard>
    </main>
}