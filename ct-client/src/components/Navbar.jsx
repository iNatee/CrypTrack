import { React } from 'react'
import { Link } from 'react-router-dom'
import { AiFillDashboard } from 'react-icons/ai'
import { GrMoney } from 'react-icons/gr'


function Navbar() {
    return (
        <navbar className='header'>
            <div className='logo'>
            </div>
            <ul>
                <li className='menu-item-top'>
                    CrypTrack
                </li>
                <li>
                    <Link to='/'>
			Dashboard
                    </Link>
                </li>
                <li>
                    <Link to='/portfolio'>
                        Portfolio
                    </Link>
                </li>
                 <li>
                    <Link to='/calculator'>
                        Calculator
                    </Link>
                </li>
                <li>
                    <Link to='/history'>
                        History
                    </Link>
                </li>
                <li>
                    <Link to='/library'$>
                        Library
                    </Link>
                </li>
            </ul>
        </navbar>
    )
}

export default Navbar
