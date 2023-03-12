import { useState, useContext } from 'react';
import { Global } from './GlobalContext';

const SearchFor = () => {

    const { list } = useContext(Global);
    const [emty, setEmpty] = useState(true);
    const [full, setFull] = useState(true);

    // const showEmpty = list.filter(item => item.amount <= 0);
    // console.log(showEmpty);

    // onClick = {() => setDeleteModal(null)
    // const empty = list.filter(({ surname, amount }) => {
    //     const includesSurname = surname.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    //     return isEmpty ? includesSurname && amount > 0 : includesSurname;

    return (
        <div className="container mx-auto flex flex-col items-center justify-between p-4 mb-2 rounded-xl shadow-md md:flex-row" >
            <h1 className="text-xl mb-3 md:mb-0">Filter an accounts</h1>
            <div className='flex gap-x-6'>
                <div>
                    <input type="radio" id="all" name="accounts" className="peer hidden" value="all" /*checked*/ />
                    <label htmlFor="coding" className="block cursor-pointer select-none rounded-xl py-1 px-6 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">All</label>
                </div>
                <div>
                    <input type="radio" id="active" name="accounts" className="peer hidden" value="active" />
                    <label htmlFor="music" className="block cursor-pointer select-none rounded-xl py-1 px-6 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">Active</label>
                </div>
                <div>
                    <input type="radio" id="empty" name="accounts" className="peer hidden" value="empty" />
                    <label htmlFor="music" className="block cursor-pointer select-none rounded-xl py-1 px-6 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white" onClick={() => list.filter(item => item.amount <= 0)}>Empty</label>
                </div>
            </div>
        </div>
    )
}

export default SearchFor;
