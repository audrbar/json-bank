import { useContext } from 'react';
import { Global } from './GlobalContext';
import Footer from './Footer';

const List = () => {

    const { list, setDeleteModal, setAddModal, setRemModal } = useContext(Global);

    return (
        <div className="container mx-auto flex flex-col items-center justify-between p-4 rounded-xl shadow-md" >
            <h1 className="text-xl">Accounts List</h1>
            {
                list === null ? <p className="text-xl">Loading...</p> : list?.map(n => (<div key={n.id} className="flex flex-col items-center justify-between w-full shadow-md rounded-x md:flex-row">
                    <ul className="flex flex-row items-center justify-between w-full p-1">
                        <li className="p-2">
                            <h2><span className="text-slate-400">Surname: </span>{n.surname}</h2>
                        </li>
                        <li className="p-2">
                            <h2><span className="text-slate-400">Name: </span>{n.name}</h2>
                        </li>
                        <li className="p-2">
                            <h2><span className="text-slate-400">Balance: </span>{n.amount}<span className="text-slate-400"> $</span></h2>
                        </li>
                    </ul>
                    <div className="flex flex-row justify-between p-1">
                        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-1 rounded" onClick={() => setAddModal(n)}>ADD</button>
                        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 m-1 rounded" onClick={() => setRemModal(n)}>REMOVE</button>
                        <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 m-1 rounded" onClick={() => setDeleteModal(n)}>DELETE</button>
                    </div>
                </div>))
            }
            <Footer />
        </div >
    )
}

export default List;
