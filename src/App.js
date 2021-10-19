
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Header/Header';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import NotFound from './pages/NotFound/NotFound';
import Home from './pages/home/Home/Home';
import Footer from './pages/Footer/Footer';
import ServiceDetails from './pages/home/ServiceDetails/ServiceDetails';
import Login from './pages/authentication/Login/Login';
import Register from './pages/authentication/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import Blogs from './pages/Blogs/Blogs';
import Services from './pages/Services/Services';
import PrivateRoute from './pages/authentication/PrivateRoute/PrivateRoute';
import Trainers from './pages/Trainers/Trainers';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
            <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/services'>
              <Services></Services>
            </Route>
            <PrivateRoute path='/serviceDetail/:serviceKey'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path='/trainers'>
              <Trainers></Trainers>
            </Route>
            <Route path='/blogs'>
              <Blogs></Blogs>
            </Route>
            <Route path='/signIn'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
