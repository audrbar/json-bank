import { useContext } from 'react';
import { Global } from './GlobalContext';

const List = () => {

    const { list, setDeleteModal, setAddModal, setRemModal } = useContext(Global);

    return (
        <div className="container flex  items-center justify-between flex-col mx-auto p-6 bg-inherit rounded-xl shadow-lg space-x-4 space-y-4" >
            <h1 className="text-xl p-4">Accounts List</h1>
            <>
                {
                    list?.map(n => (<div key={n.id} className="flex flex-col md:flex-row items-center justify-between w-full rounded-x">
                        <ul className="flex flex-row items-center justify-between w-full p-6">
                            <li className="p-4">
                                <h2>Surname: {n.surname}</h2>
                            </li>
                            <li className="p-4">
                                <h2>Name: {n.name}</h2>
                            </li>
                            <li className="p-4">
                                <h2>Balance $: 888</h2>
                            </li>
                        </ul>
                        <div className="flex flex-row justify-between p-6">
                            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-1 rounded" onClick={() => setAddModal(n)}>ADD</button>
                            <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-1 rounded" onClick={() => setRemModal(n)}>REM</button>
                            <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 m-1 rounded" onClick={() => setDeleteModal(n)}>DELETE</button>
                        </div>
                    </div>))
                }
            </>
        </div >
    )
}

export default List;
