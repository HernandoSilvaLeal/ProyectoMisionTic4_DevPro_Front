import './App.css';
import {
   Switch,
   Route,
 } from 'react-router-dom'
 
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import ProjectsPage from './pages/Projects/ProjectsPage';
import RequestsPages from './pages/Requests/RequestsPage';
import UsersPage from './pages/Users/UsersPage';
import RegisterPage from './pages/Register/RegisterPage';
import ProfilePage from './pages/Profile/ProfilePage';


function App() {
  return (
    <div className="App">
    <Switch>
      <Route path='/' component={LoginPage} exact /> {/* LOGIN PAGINA INICIAL */}
      <Route path='/register' component={RegisterPage} />
      <Route path='/home' component={HomePage} />
      <Route path='/profile' component={ProfilePage} />
      <Route path='/projects' component={ProjectsPage} />
      <Route path='/requests' component={RequestsPages} />
      <Route path='/users' component={UsersPage} />
      <Route component={Error} />
    </Switch>
    </div>
  );
}

export default App;
