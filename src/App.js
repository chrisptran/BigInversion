import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div >
      <PersonCard lastName="Tran" firstName="Chris" age={22} hairColor="brown"/>

      <PersonCard lastName="Shom" firstName="John" age={12} hairColor="black"/>

      <PersonCard lastName="Adam" firstName="Prim" age={28} hairColor="brown"/>

    </div>
  );
}

export default App;
