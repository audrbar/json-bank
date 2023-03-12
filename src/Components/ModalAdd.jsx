import { useContext, useEffect, useState } from 'react';
import { Global } from './GlobalContext';

function ModalAdd() {

    const { addModal, setAddModal, setEdit } = useContext(Global);
    const [amount, setAmount] = useState(0);

    useEffect(() => {
        if (null === addModal) {
            return;
        }
        setAmount(0);
    }, [addModal]);

    const add = _ => {
        setEdit({
            amount: parseInt(amount),
            id: addModal.id,
            action: 'add'
        });
        setAddModal(null);
    }

    if (null === addModal) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75">
            <div className="relative top-32 left-16 inset-0 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all p-6 sm:my-8 sm:w-full sm:max-w-lg">
                <div className="modal-content">
                    <p className="text-xl p-2 text-gray-500">Add to account? Current balance - {addModal.amount}</p>
                    <div className="flex justify-end">
                        <input className="block bg-white border border-slate-300 rounded-md py-2 pl-2 pr-3 max-w-sm shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" type="number" name="amount" min="0" value={amount} onChange={e => setAmount(e.target.value)} />
                        <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => setAddModal(null)}>Cancel</button>
                        <button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" onClick={add}>ADD</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalAdd;