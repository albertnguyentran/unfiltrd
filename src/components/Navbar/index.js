import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {Nav, NavbarContainer, NavLogo, 
    MobileIcon, NavMenu, NavItem, NavLinks, NavLink} from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll'

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
        <>
            <IconContext.Provider value={{ color: '#fff '}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>Unfiltrd</NavLogo>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}
                                >About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLink to="/start"
                                smooth={true} duration={500} spy={true} exact='true' offset={-80}>Start</NavLink>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar

