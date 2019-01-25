// NPM
import React, { Component } from 'react';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// Components

class CourseShow extends Component {

  render() {
    const { courseQuery } = this.props;
    if(courseQuery.loading) {
      return null;
    }

    const course = courseQuery.course;

    return(
      <div className="CourseShow content">
        <h1>{ course.title }</h1>
        <ul>
          <li>{ course.id }</li>
          <li>{ course.author }</li>
          <li>{ course.description }</li>
          <li>{ course.topic }</li>
          <li>{ course.url }</li>
        </ul>
      </div>
    )
  }

}

export const COURSE_SHOW_QUERY = gql`
  query CourseQuery($id: ID!) {
    course(id: $id) {
      id,
      title,
      author,
      description,
      topic,
      url
    }
  }
`

export default graphql(
  COURSE_SHOW_QUERY,
  {
    name: 'courseQuery',
    options: ownProps => {
      return {
        variables: {
          id: ownProps.match.params.id
        }
      }
    }
  }
)(CourseShow)

