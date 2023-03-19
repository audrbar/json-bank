import './css/main.css';
import { GlobalProvider } from './Components/GlobalContext';
import Navbar from './Components/Navbar';
import List from './Components/List';
import CreateAccount from './Components/CreateAccount';
import ModalDelete from './Components/ModalDelete';
import ModalAdd from './Components/ModalAdd';
import ModalRemove from './Components/ModalRemove';
import Messages from './Components/Messages';
import Login from './Components/Login';
import Totals from './Components/Totals';

function App() {

  return (
    <GlobalProvider>
      <div className='container mx-auto max-w-screen-lg'>
        <Navbar />
        <Login />
        <Totals />
        <CreateAccount />
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
