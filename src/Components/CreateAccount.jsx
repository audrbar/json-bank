import React from 'react';

const CreateAccount = () => {
    return (
        <div className="container mx-auto flex flex-col mb-6 md:flex-row items-center justify-between p-6 bg-white rounded-xl shadow-lg space-x-4 space-y-4">
            <h1 className="pt-2 flex-col md:flex-row text-xl hover:text-darkGrayishBlue">Create an account</h1>
            <div className="flex flex-col md:flex-row md:space-y-6 items-center justify-between">
                <form className='flex flex-col md:flex-row md:space-x-6 '>
                    <label className="relative block">
                        <input className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 max-w-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Your Name..." type="text" name="search" />
                    </label>
                    <label className="relative block">
                        <input className="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 max-w-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Your Surname..." type="text" name="search" />
                    </label>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Create</button>
                </form>
            </div>
        </div>
    )
}

export default CreateAccount;
