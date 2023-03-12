import './css/main.css';
import { GlobalProvider } from './Components/GlobalContext';
import Navbar from './Components/Navbar';
import List from './Components/List';
import FilterAccounts from './Components/FilterAccounts';
import CreateAccount from './Components/CreateAccount';
import ModalDelete from './Components/ModalDelete';
import ModalAdd from './Components/ModalAdd';
import ModalRemove from './Components/ModalRemove';
import Messages from './Components/Messages';

function App() {

  return (
    <GlobalProvider>
      <div className='container mx-auto'>
        <Navbar />
        <CreateAccount />
        <FilterAccounts />
        <List />
      </div>
      <ModalDelete />
      <ModalAdd />
      <ModalRemove />
      <Messages />
    </GlobalProvider>
  );
}

export default App;
