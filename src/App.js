import logo from './logo.svg';
import './App.css';
import Main from './pages/Main';
import Header from './components/Header';
import { Provider } from 'react-redux';
import store from './redux/configStore'

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Header></Header>
        <Main></Main>

      </div>
    </Provider>
  );
}

export default App;
