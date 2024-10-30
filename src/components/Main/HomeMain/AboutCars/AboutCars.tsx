import './AboutCars.scss';
import HomeCarsCard from './HomeCarsCard/HomeCarsCard';

export default function AboutCars(){
    return <section className='about-cars'>
        <div className='about-cars__texts'>
        <h1 className='about-cars__title'>Change us</h1>
        <p className='about-cars__about'>Mercedes-Benz (German pronunciation: [mɛʁˌtseːdəs ˈbɛnts, -dɛs -] ⓘ) commonly referred to simply as Mercedes and occasionally as Benz, is a German luxury and commercial vehicle brand that was founded in 1926. Mercedes-Benz AG (a subsidiary of the Mercedes-Benz Group, established in 2019) is based in Stuttgart, Baden-Württemberg, Germany. Mercedes-Benz AG manufactures luxury vehicles and light commercial vehicles, all branded under the Mercedes-Benz name. From November 2019 onwards, the production of Mercedes-Benz-branded heavy commercial vehicles (trucks and buses) has been managed by Daimler Truck, which separated from the Mercedes-Benz Group to form an independent entity at the end of 2021.
        In 2018, Mercedes-Benz became the world’s largest premium vehicle brand, with a sales volume of 2.31 million passenger cars.
        The roots of the brand trace back to the 1901 Mercedes by Daimler-Motoren-Gesellschaft and the 1886 Benz Patent-Motorwagen by Carl Benz, which is widely recognized as the first automobile powered by an internal combustion engine. The brand’s slogan is "The Best or Nothing".]</p>
        </div>
        <HomeCarsCard></HomeCarsCard>
    </section>
}
