import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage'; 
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import ClientsPage from './components/client/ClientsPage';
import ManageClientPage from './components/client/ManageClientPage';
import EmployeesPage from './components/employee/EmployeesPage';
import FundEventsPage from './components/fundEvent/FundEventsPage';
import ManageEmployeePage from './components/employee/ManageEmployeePage';
import ManageUserPage from './components/userMgt/ManageUserPage';
import UsersPage from './components/userMgt/UsersPage';
import LoginPage from './components/userLogin/LoginPage';
import RegisterPage from './components/userRegistration/UserRegistryPage';
//eslint-disable-line import/no-named-as-default

function requireAuth (nextState, replace,callback) {
  const token = sessionStorage.getItem("token");
  if (!token) {
    console.log("requireAuth");
    replace('/login');
    callback();
  } else {
    callback();
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="home" component={HomePage} />
    <Route path="about" component={AboutPage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="clients" component={ClientsPage} onEnter={requireAuth}/>
    <Route path="client" component={ManageClientPage} />
    <Route path="client/:id" component={ManageClientPage} />
    <Route path="employees/:employer" component={EmployeesPage} />
    <Route path="fundevents/:id/:employer/:name" component={FundEventsPage} />
    <Route path="employee" component={ManageEmployeePage} />
    <Route path="employee/:id/:employer" component={ManageEmployeePage} />
    <Route path="user" component={ManageUserPage} />
    <Route path="user/:email" component={ManageUserPage} />
    <Route path="users" component={UsersPage} />
    <Route path="login" component={LoginPage} />
    <Route path="register" component={RegisterPage} />
  </Route>
);