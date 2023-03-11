import React from 'react';

const SearchFor = () => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between mb-6 p-6 bg-white rounded-xl shadow-lg space-x-4 space-y-4" >
            <h1 className="pt-2 flex-col md:flex-row text-xl hover:text-darkGrayishBlue">Filter an account</h1>
            <div>
                <input type="checkbox" id="all" name="accounts" value="all" />
                <label for="coding">All Accounts</label>
            </div>
            <div>
                <input type="checkbox" id="active" name="accounts" value="active" />
                <label for="music">Active Only</label>
            </div>
            <div>
                <input type="checkbox" id="empty" name="accounts" value="empty" />
                <label for="music">Empty Only</label>
            </div>
        </div>
    )
}

export default SearchFor;
