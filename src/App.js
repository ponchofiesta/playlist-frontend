import './App.css';
import { Route, Switch } from 'react-router-dom';
import Playlist from './components/Playlist';

function App() {
  return (
    <Switch>
      <Route path="/">
        <Playlist/>
      </Route>
    </Switch>
  );
}

export default App;
