var React = require('react');
var NavLink = require('react-router-dom').NavLink;

function NavBar () {
    return(
        <ul className='nav'>
        <li>
            <NavLink exact activeClassName='active' to='/'>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink activeClassName='active' to='/about'>
                About
            </NavLink>
        </li>
        <li>
            <NavLink activeClassName='active' to='/contact'>
                Contact
            </NavLink>
        </li>
        <li>
            <NavLink activeClassName='active' to='/ask'>
               Ask
            </NavLink>
        </li>
    </ul>
    )
    
}


export default  NavBar;