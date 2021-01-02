import './App.css';
import { Route, Switch } from 'react-router-dom';

import { DateRangePicker, Toggle } from 'rsuite';

function App() {
  return (
    <Switch>
      <Route path="/">
        Hallo
        <Toggle size="lg"  />
        <DateRangePicker />
      </Route>
    </Switch>
  );
}

export default App;
