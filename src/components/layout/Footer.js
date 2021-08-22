import pizzaLogoWhiteSmall2x from '../../img/pizzaLogoWhiteSmall2x.png'
import facebook from '../../img/facebook.svg'
import footerWave from '../../img/footerWave.svg'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className='footerWave'>
                <img src={footerWave} alt='Footer wave' />
            </div>
            <div className='darkBackground'>
                <div className='container infoRow'>
                    <img src={pizzaLogoWhiteSmall2x} alt='Pizza logo white' />
                    <div className='infoItem'>
                        <ul>
                            <Link to='/'>
                                <li>About</li>
                            </Link>
                            <Link to='/'>
                                <li>Terms of Service</li>
                            </Link>
                            <Link to='/'>
                                <li>Follow Us</li>
                            </Link>
                            <Link className='logo' to='/'>
                                <img src={facebook} alt='Facebook' />
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
