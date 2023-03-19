import { useContext } from 'react';
import { Global } from './GlobalContext';

const Navbar = () => {

    const { route, setRoute, authName, logOut } = useContext(Global);


    return (
        <nav className="container mx-auto pt-6 pb-6 flex flex-col items-center md:justify-between md:flex-row">
            <h1 className="text-4xl text-center cursor-pointer hover:text-darkGrayishBlue">Kija International</h1>
            <div className="flex flex-col items-center md:flex-row md:space-x-6">
                <ul className="flex flex-col items-center md:flex-row md:space-x-6">
                    <li className="nav-item cursor-pointer">
                        <span onClick={_ => setRoute('home')} className={
                            'nav-link' + (route === 'home' ? ' active' : '')
                        }>Home</span>
                    </li>
                    <li className="nav-item cursor-pointer">
                        <span onClick={_ => setRoute('accounts')} className={
                            'nav-link' + (route === 'accounts' ? ' active' : '')
                        }>Accounts</span>
                    </li>
                </ul>
            </div>
            {
                authName ?
                    (
                        <ul>
                            <li className="nav-item cursor-pointer">
                                <span className="nav-link"><b>Loged in: {authName}</b></span>
                            </li>
                            <li className="nav-item cursor-pointer">
                                <span className="nav-link" onClick={logOut}>Logout</span>
                            </li>
                        </ul>
                    ) :
                    (
                        <div className="nav-item cursor-pointer">
                            <span onClick={_ => setRoute('login')} className="nav-link">Login</span>
                        </div>
                    )
            }
        </nav>
    )
}

export default Navbar;
