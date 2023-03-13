import { useEffect, useState } from 'react';
import axios from 'axios';
const URL = 'http://localhost:3003/accounts';


export const useRead = _ => {

    const [list, setList] = useState(null);
    const [update, setUpdate] = useState(null);

    useEffect(() => {
        if (null === update) {
            return;
        }
        axios.get(URL)
            .then(res => setList(res.data.sort((a, b) => a.surname.localeCompare(b.surname))));
    }, [update]);


    return [list, setUpdate];

}
