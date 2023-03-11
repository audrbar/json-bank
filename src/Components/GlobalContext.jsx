import { createContext, useEffect } from "react";
import { useMessages } from "../Use/useMessages";
import { useModal } from "../Use/useModal";
import { useRead } from "../Use/useRead";
import { useWrite } from "../Use/useWrite";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {

    const [response, setCreate, setEdit, setDelete] = useWrite();
    const [list, setUpdate] = useRead();
    const [deleteModal, setDeleteModal, addModal, setAddModal, remModal, setRemModal] = useModal();
    const [messages, setMessage] = useMessages([]);

    useEffect(() => {
        setUpdate(Date.now());
        if (null !== response) {
            setMessage({ text: response.message.text, type: response.message.type });
        }
    }, [response, setMessage, setUpdate]);

    return (
        <Global.Provider value={{
            setDelete,
            setCreate,
            list,
            deleteModal, setDeleteModal, addModal, setAddModal, remModal, setRemModal,
            setEdit,
            messages
        }}>
            {children}
        </Global.Provider>
    )
}