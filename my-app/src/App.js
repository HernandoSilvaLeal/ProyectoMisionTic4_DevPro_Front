import './App.css';
import {
   Switch,
   Route,
 } from 'react-router-dom'
// import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProjectsPage from './pages/ProjectsPage';
import RequestsPages from './pages/RequestsPage';
import UsersPage from './pages/UsersPage';


function App() {
  return (
    <div className="App">
    <Switch>
      <Route path='/' component={HomePage} exact />
      <Route path='/login' component={LoginPage} />
      <Route path='/projects' component={ProjectsPage} />
      <Route path='/requests' component={RequestsPages} />
      <Route path='/users' component={UsersPage} />
      <Route component={Error} />
    </Switch>
    </div>
  );
}

export default App;
