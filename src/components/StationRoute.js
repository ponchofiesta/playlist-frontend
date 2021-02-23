import SearchPage from "./SearchPage";
import MainPage from './MainPage';
import { Route } from 'react-router-dom';

function StationRoute() {
    return (
        <>
            <Route exact path="/:date([0-9]{4}-[0-9]{2}-[0-9]{2})" component={MainPage} />
            <Route exact path="/search" component={SearchPage} />
        </>
    );
}

export default StationRoute;