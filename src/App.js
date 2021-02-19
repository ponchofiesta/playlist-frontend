import './App.css';
import { Route, Switch, useParams } from 'react-router-dom';
import MainPage from './components/MainPage';
import config from './config';

function App() {

  const { station = config.stations[0] } = useParams();

  return (
    <Switch>
      <Route exact path={["/", "/:station/:date([0-9]{4}-[0-9]{2}-[0-9]{2})"]}>
        <MainPage config={config} station={station} />
      </Route>
    </Switch>
  );
}

export default App;
