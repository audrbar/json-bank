import { useContext } from "react";
import { Global } from "./GlobalContext";
import Home from "./Home";
import Login from "./Login";
import Accounts from "./Accounts";
import Auth from './Auth';

function Routes() {

    const { route } = useContext(Global);

    switch (route) {
        case 'home': return <Auth roles={''}><Home /></Auth >
        case 'accounts': return <Auth roles={'client,manager,admin'}><Accounts /></Auth>
        case 'login': return <Login />
        default: return null
    }
}

export default Routes;