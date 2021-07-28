import pizzaLogoWhiteSmall from '../../img/pizzaLogoWhiteSmall.svg'
import pizzaMaker from '../../img/pizzaMaker.svg'
import {Link} from 'react-router-dom'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
                <Link to='/'>
                    <img className='logo' src={pizzaLogoWhiteSmall} alt='Pizza logo white' />
                </Link>

                <div className='content'>
                    <h1>Mike's Pizza</h1>

                    <div className='description'>
                        <p>Longest tradition in making the most delicious pizza in town. Since 1954.</p>
                    </div>

                    <a href='#menu' className='button buttonPrimary heroButton'>See Menu</a>
                </div>

                <div className='image'>
                    <img src={pizzaMaker} alt='Pizza maker' />
                </div>

            </div>
        </div>
    )
}

export default Hero
