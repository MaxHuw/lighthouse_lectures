import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import CoursesListQuery from './components/courses/CoursesListQuery';
import CoursesListHOC from './components/courses/CoursesListHOC';
import CourseShow from './components/courses/CourseShow';
import CourseCreate from './components/courses/CourseCreate';

class App extends Component {
  render() {
  return (
    <div className="center w85">
      <div className="ph3 pv1 background-gray">
        <Switch>
          {/*<Route exact path="/" component={CoursesListQuery} />*/}
          <Route exact path="/" component={CoursesListHOC} />
          <Route exact path="/courses" component={CoursesListHOC} />
          <Route exact path="/courses/new" component={ CourseCreate } />
          <Route exact path="/courses/:id" component={ CourseShow } />
        </Switch>
      </div>
    </div>
  )
}
}

export default App;
