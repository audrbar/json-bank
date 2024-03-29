import './css/main.css';
import { GlobalProvider } from './Components/GlobalContext';
import Navbar from './Components/Navbar';
import ModalDelete from './Components/ModalDelete';
import ModalAdd from './Components/ModalAdd';
import ModalRemove from './Components/ModalRemove';
import Messages from './Components/Messages';
import Routes from './Components/Routes';

function App() {

  return (
    <GlobalProvider>
      <div className='container mx-auto max-w-screen-lg'>
        <Navbar />
        <Routes />
      </div>
      <ModalDelete />
      <ModalAdd />
      <ModalRemove />
      <Messages />
    </GlobalProvider>
  );
}

export default App;
