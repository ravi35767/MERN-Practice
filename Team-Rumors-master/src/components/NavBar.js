import React,{useState,useEffect} from 'react';
import { 
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    Button,
    NavItemBtn,
    NavBtnLink 
 } from './styledNavbar'; 

import { FaBars,FaTimes } from 'react-icons/fa';

const NavBar = () => {
    const [click , setClick ] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }
        else{
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize',showButton);

    return(
        <>
            <Nav>
                <NavbarContainer>
                    
                    <NavLogo to = "/" onClick = {closeMobileMenu}>
                        <NavIcon />
                        Team Rumors
                    </NavLogo>

                    <MobileIcon onClick = {handleClick}>
                        {click ? <FaTimes/> : <FaBars />}
                    </MobileIcon>
                    
                    <NavMenu onClick ={handleClick} click={click }>
                        <NavItem>
                            <NavLinks to="/">Home</NavLinks>
                        </NavItem>
                    
                        <NavItem>
                            <NavLinks to="/services">Services</NavLinks>
                        </NavItem>
                        
                        <NavItem>
                            <NavLinks to="/products">Products</NavLinks>
                        </NavItem>

                        <NavItemBtn>
                            {button ? (
                                <NavBtnLink to="/getStarted">
                                    <Button primary>
                                        Get Started
                                    </Button>
                                </NavBtnLink>
                            ):(
                                <NavBtnLink to="/getStarted">
                                    <Button fontBig primary>
                                    Get Started
                                    </Button>
                                </NavBtnLink>
                            )}
                        </NavItemBtn>
                    </NavMenu>    
                </NavbarContainer>
            </Nav>
        </>         
    )
}

export default NavBar;