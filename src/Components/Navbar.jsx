import React from 'react';

const Navbar = () => {
    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <h1 className="pt-2 text-xl hover:text-darkGrayishBlue">Kija Bank</h1>
                <div className="flex flex-col md:flex-row md:space-x-6">
                    <h3 className="pt-2">Cash Total:</h3>
                    <h3 className="pt-2">Clients Total:</h3>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
