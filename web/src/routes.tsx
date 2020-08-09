import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import TeacherForm from './pages/TeacherForm';
import TeacherList from './pages/TeacherList';
import Login from './pages/Login';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} exact />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
      <Route path="/login" component={Login} />
    </BrowserRouter>
  )
}

export default Routes;