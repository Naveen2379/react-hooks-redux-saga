import { Provider } from 'react-redux';
import store from './store/store';
import { Users } from './components/Users';
import './App.css';


function App() {


  return (
    <Provider store={store}>
      <div className="App">
        <h1>App</h1>
        <Users />
      </div>
    </Provider>

  );
}

export default App;
