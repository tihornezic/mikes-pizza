import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>Menu</Link>
                </li>
                <li>
                    <Link to='/'>Cart</Link>
                </li>
                <li>
                    <Link to='/'>Account</Link>
                </li>
            </ul>
        </div>
    )
}

export default Header
