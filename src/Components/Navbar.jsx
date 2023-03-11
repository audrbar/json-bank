import React from 'react';

const Navbar = () => {
    return (
        <nav className="relative container mx-auto p-6 mb-6  bg-white rounded-xl shadow-lg space-x-4 space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <h1 className="pt-2 text-4xl cursor-pointer hover:text-darkGrayishBlue p-2">Kija International</h1>
                <div className="flex flex-col md:flex-row md:space-x-6">
                    <h3 className="pt-2">Cash Total: $50 000</h3>
                    <h3 className="pt-2">Clients Total: 25</h3>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
