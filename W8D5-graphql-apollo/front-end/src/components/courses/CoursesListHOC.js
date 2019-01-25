// NPM
import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { Link } from 'react-router-dom'

class CoursesList extends Component {

  renderCourses = () => {
    const courses = this.props.coursesQuery.courses;

    return courses.map((course, i) => {
      return (
        <tr key={ i }>
          <td>{ course.id }</td>
          <td>{ course.title }</td>
          <td>{ course.author }</td>
          <td>
            <Link to={ `/courses/${ course.id }` } className="button">
              View
            </Link>
          </td>
        </tr>
      )
    })
  }

  render() {
    const coursesQuery = this.props.coursesQuery;
    if(coursesQuery.loading) {
      return null;
    }

    const courses = coursesQuery.courses;

    return (
      <div className="CourseList">
        <Link to={ `/courses/new` } className="button">
          New Course
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Author</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            { this.renderCourses() }
          </tbody>
        </table>
      </div>
    )
  }
}

export const COURSES_QUERY = gql`
  {
    courses {
      id,
      title,
      author
    }
  }
`

// , options: () => ({ fetchPolicy: 'network-only' })
export default graphql(
  COURSES_QUERY,
  { name: "coursesQuery" }
)(CoursesList);
