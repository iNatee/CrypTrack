import { React } from 'react'
import { Link } from 'react-router-dom'
import { FaUser, FaSignInAlt, FaSignOutAlt,
     FaDollarSign, FaCalculator, FaHistory, 
     FaBook, FaAddressBook } from 'react-icons/fa'


function Header() {
    return (
        <header className='header'>
            <div className='logo'>
            </div>
            <ul>
                <li>
                    <Link to='/'>
                    <FaDollarSign/> 
                    </Link>
                </li>
                <li>
                    <Link to='/portfolio'>
                    <FaAddressBook/> 
                    </Link>
                </li>
                 <li>
                    <Link to='/calculator'>
                        <FaCalculator/> 
                    </Link>
                </li>
                <li>
                    <Link to='/history'>
                    <FaHistory/> 
                    </Link>
                </li>
                <li>
                    <Link to='/library'$>
                        <FaBook/> 
                    </Link>
                </li>
                <li>
                    <Link to='/'$>
                        <FaSignInAlt/> 
                    </Link>
                </li>               
                <li>
                    <Link to='/'$>
                        <FaSignOutAlt/> 
                    </Link>
                </li>
                 <li>
                    <Link to='/'$>
                        <FaUser/> 
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header