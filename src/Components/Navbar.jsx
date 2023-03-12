import { useContext } from 'react';
import { Global } from './GlobalContext';

const Navbar = () => {

    const { list } = useContext(Global);


    return (
        <nav className="container mx-auto pt-6 pb-6 flex flex-col items-center md:justify-between md:flex-row">
            <h1 className="text-4xl text-center cursor-pointer hover:text-darkGrayishBlue">Kija International</h1>
            <div className="flex flex-col items-center md:flex-row md:space-x-6">
                <p className="pt-2">Cash Total: {" "}
                    {list?.map((item) => item.amount).reduce((acc, curr) => acc + curr, 0)}{" $"}
                </p>
                <p className="pt-2">Clients Total: {list === null ? null : list.length}</p>
            </div>
        </nav>
    )
}

export default Navbar;
