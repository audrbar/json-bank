import { useContext, useEffect, useState } from 'react';
import { Global } from './GlobalContext';

function ModalRemove() {

    const { remModal, setRemModal, setEdit } = useContext(Global);
    const [account, setAccount] = useState(0);

    useEffect(() => {
        if (null === remModal) {
            return;
        }
        setAccount(0);
    }, [remModal]);

    const rem = _ => {
        setEdit({
            account: parseInt(account),
            id: remModal.id,
            action: 'rem'
        });
        setRemModal(null);
    }

    if (null === remModal) {
        return null;
    }

    return (
        <div className="modal cust-modal">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add to account {remModal.account}</h5>
                        <button type="button" className="btn-close" onClick={() => setRemModal(null)}></button>
                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label className="form-label">Slide to add {account}</label>
                            <input type="range" min="0" max={remModal.account - 1} className="form-range"
                                value={account} onChange={e => setAccount(e.target.value)} />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={() => setRemModal(null)}>Cancel</button>
                        <button type="button" className="btn btn-primary" onClick={rem}>REMOVE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalRemove;