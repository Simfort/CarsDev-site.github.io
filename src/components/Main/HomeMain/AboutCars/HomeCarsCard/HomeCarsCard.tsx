import './Card.scss';
import legend from '../../../../../assets/legend.svg'
import luxury from '../../../../../assets/luxury.svg'
import fast from '../../../../../assets/speed.svg'

export default function HomeCarsCard(){
    return <section className='cards'>
        <div className='cards-container'>
            <div className="cards-container__item --1">
                <h2>Luxury</h2>
                <p>We are pretty and luxury</p>
                <img src={luxury} alt="luxury mersedez" width='200' />
            </div>
            <div className="cards-container__item --2">
                <h2>Fast</h2>
                <p>We are always faster</p>
                <img src={fast} alt="speed fast" width='200' />
            </div>
            <div className="cards-container__item --3">
                <h2>Legend</h2>
                <p>We are yet 123 years with your!</p>
                <img src={legend} alt="legend" width='200' />
            </div>
        </div>
    </section>
}