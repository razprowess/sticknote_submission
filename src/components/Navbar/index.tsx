import './navbar.css';

interface NavBarProp {
createNote: Function,
clearNote: Function,
}

const Navbar: React.FC<NavBarProp> = ({createNote, clearNote}) => {
    
    const handleAddNote =()=> {
        createNote();
    }

    const handleClearNote = () => {
        clearNote();
    }

    return (
        <div className="navbar-container">
            <h2>Sticky Note</h2>
            <ul>
                <li>
                    <a title='Add a Note' href='#' onClick={handleAddNote}> 
                   <img className='navbar-icon' src='/icons/plus.svg' alt='add icon'/>
                   </a>
                </li>
                <li>
                    <a title='Clear all Notes' href='#' onClick={handleClearNote}>
                   <img className='navbar-icon' src='/icons/delete.svg' alt='trash icon'/>
                   </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;