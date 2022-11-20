import './App.css';
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import Navi from './layouts/Navi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navi></Navi>
        <Dashboard></Dashboard>

        
      </header>
    </div>
  );
}

export default App;
