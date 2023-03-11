import { useContext, useEffect, useState } from 'react';
import { Global } from './GlobalContext';

function ModalAdd() {

    const { addModal, setAddModal, setEdit } = useContext(Global);
    const [account, setAccount] = useState(0);

    useEffect(() => {
        if (null === addModal) {
            return;
        }
        setAccount(0);
    }, [addModal]);

    const add = _ => {
        setEdit({
            account: parseInt(account),
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
                    <p className="text-xl p-2 text-gray-500">Add to account</p>
                    <div className="modal-body">
                    </div>
                    <div className="flex justify-end">
                        <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => setAddModal(null)}>Cancel</button>
                        <button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" onClick={add}>ADD</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalAdd;