import { Route, Switch } from 'react-router-dom';
import { Home, Restaurant } from './pages'

export const routes = (
    <Switch>
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/restaurant/:id">
            <Restaurant />
        </Route>
    </Switch>
)