import './App.css';
import { Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <MainPage/>
      </Route>
      <Route path="/plays/:date">
        DATE
        <MainPage/>
      </Route>
    </Switch>
  );
}

export default App;
