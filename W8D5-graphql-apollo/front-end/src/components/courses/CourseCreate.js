// NPM
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import _ from 'lodash';

// GraphQL
import { graphql, withApollo } from 'react-apollo'
import gql from 'graphql-tag'
import { COURSES_QUERY } from './CoursesListHOC';

// Components

class CourseCreate extends Component {

  state = {
    title: '',
    author: '',
    description: '',
    topic: '',
    url: ''
  }

  createCourse = async (e) => {
    e.preventDefault();

    // await this.props.createCourse({
    //   variables: this.state,
    //   refetchQueries: [ { query: COURSES_QUERY } ]
    // });

    // Wait for the response
    const response = await this.props.createCourse({
      variables: this.state
    });

    // Load the course list query
    const courseListQuery = this.props.client.readQuery({
      query: COURSES_QUERY
    })

    // Append to it
    courseListQuery.courses.push(response.data.createCourse)

    this.props.client.writeQuery({
      query: COURSES_QUERY,
      data: courseListQuery
    })

    // Redirect to List
    this.props.history.push("/")
  }

  render() {
    return(
      <div className="CourseCreate">
        <form className="content" onSubmit={ this.createCourse }>
          <h1>Create Course</h1>
          <div className="field">
            <label className="label">Title</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Title"
                value={ this.state.title }
                onChange={ e => this.setState({ title: e.target.value })}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Author</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Author"
                value={ this.state.author }
                onChange={ e => this.setState({ author: e.target.value })}
              />
            </div>
          </div>
          <Link to={ `/` } className="button">
            Cancel
          </Link>
          <input type="submit" className="button" value="Submit" />
        </form>
      </div>
    )
  }

}

export const CREATE_COURSE = gql`
  mutation CreateCourse($title: String!, $author: String!) {
    createCourse(title: $title, author: $author) {
      id,
      title,
      author,
      description,
      topic,
      url
    }
  }
`

export default _.flow(
  withApollo,
  withRouter,
  graphql(CREATE_COURSE, { name: 'createCourse' })
)(CourseCreate);

