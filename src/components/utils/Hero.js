import pizzaLogoWhite from '../../img/pizzaLogoWhite.png'
import pizzaMaker from '../../img/pizzaMaker.svg'
import {Link} from 'react-router-dom'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>
                <Link to='/'>
                    <img className='logo' src={pizzaLogoWhite} alt='Pizza logo white' />
                </Link>

                <div className='content'>
                    <h1>Mike's Pizza</h1>

                    <div className='description'>
                        <p>Longest tradition in making the most delicious pizza in town. Since 1954.</p>
                    </div>

                    <Link to='/' className='button buttonPrimary heroButton'>Order Now</Link>
                </div>

                <div className='image'>
                    <img src={pizzaMaker} alt='Pizza maker' width={'600px'} />
                </div>

            </div>
        </div>
    )
}

export default Hero
