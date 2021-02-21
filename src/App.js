import './App.css';
import { Route, Switch, useParams } from 'react-router-dom';
import MainPage from './components/MainPage';
import ConfigContext from './ConfigContext';
import config from './config';
import { useState } from 'react';

function App() {

  const { station } = useParams();
  const [context, setContext] = useState({config, station: station ?? config.stations[0]});

  return (
    <ConfigContext.Provider value={[context, setContext]}>
      <Switch>
        <Route exact path={["/", "/:station/:date([0-9]{4}-[0-9]{2}-[0-9]{2})"]}>
          <MainPage />
        </Route>
      </Switch>
    </ConfigContext.Provider>
  );
}

export default App;
