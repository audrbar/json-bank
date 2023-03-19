import { useContext } from 'react';
import { Global } from './GlobalContext';

const Totals = () => {

    const { list } = useContext(Global);


    return (
        <nav className="container mx-auto flex flex-col items-center justify-between p-4 rounded-xl shadow-md mb-2 md:flex-row">
            <p className="text-xl mb-3 md:mb-0">Kija International Totals</p>
            <div className="flex flex-col items-center justify-between gap-y-2 md:flex-row md:gap-x-4">
                <p className="pt-2">Cash Total: {" "}
                    {list?.map((item) => item.amount).reduce((acc, curr) => acc + curr, 0)}{" $"}
                </p>
                <p className="pt-2">Clients Total: {list === null ? null : list.length}</p>
            </div>
        </nav>
    )
}

export default Totals;
