import tradition from '../../img/tradition.svg'
import quality from '../../img/quality.svg'
import speed from '../../img/speed.svg'

const Badges = () => {
    return (
        <div className='badges'>
            <div className='container badgesRow'>
                <div className='badgesItem'>
                    <img src={tradition} alt='tradition' />
                    <p>67 YEARS OF TRADITION</p>
                </div>
                <div className='badgesItem'>
                    <img src={quality} alt='quality' />
                    <p>GUARANTEED QUALITY</p>
                </div>
                <div className='badgesItem'>
                    <img src={speed} alt='speed' />
                    <p>THE SIMPLEST & FASTEST ORDERING SYSTEM </p>
                </div>
            </div>
        </div>
    )
}

export default Badges
