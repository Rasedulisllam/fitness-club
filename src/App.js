
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
     </BrowserRouter>
    </div>
  );
}

export default App;
