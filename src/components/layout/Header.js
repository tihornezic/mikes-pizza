import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className='header'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>Order</Link>
                </li>
                <li>
                    <Link to='/'>Account</Link>
                </li>
                <li>
                    <a href='#menu' className='button buttonPrimary'>See Menu</a>
                </li>
            </ul>
        </div>
    )
}

export default Header
