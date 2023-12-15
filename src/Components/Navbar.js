import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
/*import { Button } from './Button';*/

function Navbar() {
    const [click, setClick] = useState(false); /*creates opposite state to open and close menu on click*/
    /*const [button, setButton] = useState(true);*/

    const handleClick = () => setClick(!click); /*reverses false click state set*/
    const closeMobileMenu = () => setClick(false);


    /*const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
      }; /*makes button disappear when screen is smaller than 960 pixels. good for mobile accessibility. 

      useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);*/

    

  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                MB.Portfolio
                <i class="fa-solid fa-code-commit" />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> {/*? is equal to true. : creates toggle from one item to another.  */}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                        </Link>
                    </li>    
                
                    <li className='nav-item'>
                        <Link to='/about-me' className='nav-links' onClick={closeMobileMenu}>
                        About Me
                        </Link>
                    </li>
                    
                    <li className='nav-item'>
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                        Projects
                        </Link>
                    </li>
                    
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact
                        </Link>
                    </li>
                    
                    <li className='nav-item'>
                        <a href='MarkelBradfordResume.pdf' className='nav-links-mobile'>
                        Resume
                        </a>
                    </li>
                </ul>
                {/*{button && <Button buttonStyle='btn--outline' className='btn-mobile'>Resume</Button>} {/*links to button js. passes child to button.*/}
            </div>
        </nav>
    </>
  );
};

export default Navbar;
