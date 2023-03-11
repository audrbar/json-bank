import { useContext } from 'react';
import { Global } from './GlobalContext';

function ModalDelete() {

    const { deleteModal, setDeleteModal, setDelete } = useContext(Global);

    const del = _ => {
        setDelete(deleteModal);
        setDeleteModal(null);
    }

    if (null === deleteModal) {
        return null;
    }

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75">
            <div className="relative top-32 left-32 inset-0 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all p-6 sm:my-8 sm:w-full sm:max-w-lg">
                <h5 className="text-xl p-2 text-gray-500">Delete Account</h5>
                <div className="mt-2">
                    <p className="text-md px-2 py-4 text-gray-500">Do you really want to delete that account?</p>
                </div>
                <div className="flex justify-end">
                    <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={() => setDeleteModal(null)}>Cancel</button>
                    <button type="button" className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto" onClick={del}>DELETE</button>
                </div>
            </div>
        </div>
    );
}

export default ModalDelete;