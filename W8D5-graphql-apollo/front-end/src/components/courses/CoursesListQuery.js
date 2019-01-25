// NPM
import React, { Component } from 'react';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

class CoursesList extends Component {

  renderCourses = (courses) => {
    return courses.map((course, i) => {
      return (
        <tr key={ i }>
          <td>{ course.id }</td>
          <td>{ course.title }</td>
          <td>{ course.author }</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <Query query={ COURSES_QUERY }>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const courses = data.courses;

          return (
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Author</th>
                </tr>
              </thead>
              <tbody>
                { this.renderCourses(courses) }
              </tbody>
            </table>
          )
        }}
      </Query>
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

export default CoursesList;
