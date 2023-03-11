import Navbar from './Components/Navbar';
import List from './Components/List';
import FilterAccounts from './Components/FilterAccounts';
import CreateAccount from './Components/CreateAccount';
import './css/main.css';

function App() {
  return (
    <div>
      <Navbar />
      <CreateAccount />
      <FilterAccounts />
      <List />
    </div>
  );
}

export default App;
