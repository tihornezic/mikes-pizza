import darkBackground from '../../img/darkBackground.svg'
import pizzaLogoWhite from '../../img/pizzaLogoWhite.png'
import facebook from '../../img/facebook.svg'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className='darkBackground'>
                <div className='container infoRow'>
                    <img src={pizzaLogoWhite} alt='Pizza logo white' />
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
