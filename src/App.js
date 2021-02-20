import './App.css';
import { Route, Switch, useParams } from 'react-router-dom';
import MainPage from './components/MainPage';
import ConfigContext from './ConfigContext';
import { useContext } from 'react';

function App() {

  const context = useContext(ConfigContext);
  const { station = context.station } = useParams();

  return (
    <Switch>
      <Route exact path={["/", "/:station/:date([0-9]{4}-[0-9]{2}-[0-9]{2})"]}>
        <MainPage station={station} />
      </Route>
    </Switch>
  );
}

export default App;
