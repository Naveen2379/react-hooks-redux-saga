import { Provider } from 'react-redux';
import store from './store/store';
import { Users } from './components/Users';
import './App.css';
import { Posts } from './components/Posts';


function App() {


  return (
    <Provider store={store}>
      <div className="App">
        <h1>App</h1>
        {/* <Users /> */}
        <Posts />
      </div>
    </Provider>

  );
}

export default App;
