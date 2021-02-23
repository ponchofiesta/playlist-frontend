import './App.css';
import { Route, Switch, useParams } from 'react-router-dom';
import MainPage from './components/MainPage';
import ConfigContext from './ConfigContext';
import config from './config';
import { useState } from 'react';
// import SearchPage from './components/SearchPage';
import StationRoute from './components/StationRoute';

function App() {

  const { station } = useParams();
  const [context, setContext] = useState({config, station: station ?? config.stations[0]});

  return (
    <ConfigContext.Provider value={[context, setContext]}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/:station" component={StationRoute} />
      </Switch>
    </ConfigContext.Provider>
  );
}

export default App;
