import { Link } from 'react-router-dom';
import Style from './Navigation.module.scss';
import { useState } from 'react';

import Logo from '../../Assets/Logo.png';

const Navigation = (props) => {
    const loggedIn = props.loggedIn;
    const setLoggedIn = props.setLoggedIn;

    const [toggleMenu, setToggleMenu] = useState(false);
    const handleBurgerMenu = () => {setToggleMenu(!toggleMenu)}

    return (
        <header className={Style.pageNavigation}>
            <div onClick={handleBurgerMenu} className={Style.burgerMenu}>
                <div className={Style.burgerLine}></div>
                <div className={Style.burgerLine}></div>
                <div className={Style.burgerLine}></div>
            </div>

            <img className={Style.navLogo} src={Logo} alt="logo" />

            <nav className={toggleMenu === true ? `${Style.navigationWrapper} ${Style.active}` : Style.navigationWrapper}>
                <ul className={Style.list}>
                    <li className={Style.listItem}><Link onClick={handleBurgerMenu} className={Style.links} to="/Forside">Forside</Link> </li>
                    <li className={Style.listItem}> Events
                        <ul className={Style.dropdown}>
                            <li className={Style.ListItem}> <Link onClick={handleBurgerMenu} className={Style.links} to="/Events/LineUp">Line-up</Link> </li>
                            <li className={Style.ListItem}> <Link onClick={handleBurgerMenu} className={Style.links} to="/Events/Program">Program</Link> </li>
                            {loggedIn === true ? <li className={Style.ListItem}> <Link onClick={handleBurgerMenu} className={Style.links} to="/Events/MyProgram">Mit Program</Link> </li> : null}
                        </ul>
                    </li>
                    <li className={Style.listItem}> Camps
                        <ul className={Style.dropdown}>
                            <li className={Style.ListItem}> <Link onClick={handleBurgerMenu} className={Style.links} to="/Camps/CampColorit">Camp Colorit</Link> </li>
                            <li className={Style.ListItem}> <Link onClick={handleBurgerMenu} className={Style.links} to="/Camps/CampKultunaut">Camp Kultunaut</Link> </li>
                            <li className={Style.ListItem}> <Link onClick={handleBurgerMenu} className={Style.links} to="/Camps/CampDeLuxe">Camp De Luxe</Link> </li>
                        </ul>
                    </li>
                    <li className={Style.listItem}><Link onClick={handleBurgerMenu} className={Style.links} to="/Billetter">Billetter</Link> </li>
                    <li className={Style.listItem}><Link onClick={handleBurgerMenu} className={Style.links} to="/Info">Info</Link> </li>
                    {loggedIn === true ? <li className={Style.listItem} onClick={(e) => {setLoggedIn(false)}}>LogOut</li> : <li className={Style.listItem}><Link onClick={handleBurgerMenu} className={Style.links} to="/Login">Login</Link> </li>}
                    <li className={Style.listItem}><p className={Style.links}>Search</p> </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;