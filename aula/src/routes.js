import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre';
import Contanto from './pages/Contanto';

import Header from './components/Header';

const Routes = () => {
   return (
      <BrowserRouter>
         <Header></Header>
         <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/sobre' component={Sobre} />
            <Route path='/contato' component={Contanto} />
         </Switch>

      </BrowserRouter>
   )
}

export default Routes