import './navbar.css';


const Navbar: React.FC = () => {
    return (
        <div className="navbar-container">
            <h2>Sticky Note</h2>
            <ul>
                <li>
                    <a title='Add a Note' href='#'> 
                   <img className='navbar-icon' src='/icons/plus.svg' alt='add icon'/>
                   </a>
                </li>
                <li>
                    <a title='Clear all Notes' href='#'>
                   <img className='navbar-icon' src='/icons/delete.svg' alt='trash icon'/>
                   </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;