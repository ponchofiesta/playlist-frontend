import './App.css';
import { Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';

function App() {
  return (
    <Switch>
      <Route path="/">
        <MainPage/>
      </Route>
    </Switch>
  );
}

export default App;
