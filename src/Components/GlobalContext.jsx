import { createContext, useEffect, useState } from "react";
import { useMessages } from "../Use/useMessages";
import { useModal } from "../Use/useModal";
import axios from 'axios';
import { useRead } from "../Use/useRead";
import { useWrite } from "../Use/useWrite";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {

    const [response, setCreate, setEdit, setDelete] = useWrite();
    const [list, setUpdate] = useRead();
    const [deleteModal, setDeleteModal, addModal, setAddModal, remModal, setRemModal] = useModal();
    const [messages, setMessage] = useMessages([]);
    const [route, setRoute] = useState('home');
    const [logged, setLogged] = useState(null);
    const [authName, setAuthName] = useState(null);

    useEffect(() => {
        setUpdate(Date.now());
        if (null !== response) {
            setMessage({ text: response.message.text, type: response.message.type });
        }
    }, [response, setMessage, setUpdate, setCreate]);

    const logOut = e => {
        axios.post('http://localhost:3003/logout', {}, { withCredentials: true })
            .then(res => {
                setLogged(false);
                setAuthName(false);
                setRoute('home');
            });
    }

    useEffect(() => {
        axios.get('http://localhost:3003/login', { withCredentials: true })
            .then(res => {
                console.log(res.data);
                if (res.data.status === 'ok') {
                    setRoute('accounts');
                    setLogged(true);
                    setAuthName(res.data.name);
                }
            })
    }, []);

    useEffect(() => {

        setLogged(null);

    }, [route])

    return (
        <Global.Provider value={{
            setDelete,
            setCreate,
            list,
            deleteModal, setDeleteModal, addModal, setAddModal, remModal, setRemModal,
            setEdit,
            messages,
            route, setRoute,
            authName, setAuthName, logOut, logged, setLogged
        }}>
            {children}
        </Global.Provider>
    )
}